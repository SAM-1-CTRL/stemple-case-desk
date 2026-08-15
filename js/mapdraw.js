/* Stemple journey map — real India geometry (d3-geo) + animated route.
   Exposes window.StempleMap.render(holderId, {milestones, onMilestone}) */
(function(){
  const reduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const ATLAS = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json';
  const INDIA = 'https://cdn.jsdelivr.net/gh/datameet/maps@master/Country/india-composite.geojson';

  function render(holderId, opts){
    const holder = document.getElementById(holderId);
    if(!holder || !window.d3) return { stop(){} };
    const d3 = window.d3;
    const cities = opts.milestones;
    const onMilestone = opts.onMilestone || (()=>{});
    let raf, stopped = false, land, neighbours, paused = false, selected = 0;
    let doSelect = null;
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS,'svg');
    holder.appendChild(svg);

    function build(){
      if(stopped) return;
      const w = holder.clientWidth, h = holder.clientHeight;
      if(!w || !h){ return; }
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.innerHTML = '';
      const proj = d3.geoMercator();
      // frame the projection on India (plus headroom), keep cities comfortably inside
      const focusPts = { type:'MultiPoint', coordinates: cities.map(c=>[c.lng,c.lat]).concat([[68,8],[90,32]]) };
      proj.fitExtent([[w*0.34, h*0.06],[w*0.995, h*0.99]], land ? land : focusPts);
      const path = d3.geoPath(proj);

      // landmasses
      if(neighbours){
        const g = document.createElementNS(svgNS,'path');
        g.setAttribute('d', path(neighbours)); g.setAttribute('class','map-land');
        svg.appendChild(g);
      }
      if(land){
        const g = document.createElementNS(svgNS,'path');
        g.setAttribute('d', path(land)); g.setAttribute('class','map-land focus');
        svg.appendChild(g);
      }

      // project city points
      const pts = cities.map(c=>proj([c.lng,c.lat]));

      // pins, styled by rollout phase (1 bright/solid, 2 medium, 3 faint outline)
      const wpEls = cities.map((c,i)=>{
        const [x,y] = pts[i];
        const g = el('g',{class:'pin pin-p'+c.phase, 'data-i':i, tabindex:0, role:'button'});
        g.style.setProperty('--d', (i*0.09)+'s');   // staggered entrance
        const hit = el('circle',{cx:x,cy:y,r:22,class:'pin-hit'});
        const dotR = c.phase===1?7:c.phase===2?5.5:5;
        const pulse = el('circle',{cx:x,cy:y,r:9,class:'pin-pulse'});
        const dot = el('circle',{cx:x,cy:y,r:dotR,class:'pin-dot'});
        if(c.phase===1){ const sonar = el('circle',{cx:x,cy:y,r:dotR,class:'pin-sonar'}); sonar.style.setProperty('--d',(i*0.5)+'s'); g.appendChild(sonar); }
        // per-city label placement overrides to avoid overlap (lp: 'l'|'r'|'t'|'b')
        const lp = c.lp || (x > w*0.6 ? 'l' : 'r');
        let lx=x, ly=y, anchor='start';
        if(lp==='l'){ lx=x-15; ly=y+5; anchor='end'; }
        else if(lp==='r'){ lx=x+15; ly=y+5; anchor='start'; }
        else if(lp==='t'){ lx=x; ly=y-15; anchor='middle'; }
        else if(lp==='b'){ lx=x; ly=y+22; anchor='middle'; }
        const lb = el('text',{x:lx,y:ly,class:'pin-label','text-anchor':anchor});
        lb.textContent = c.city.toUpperCase();
        g.appendChild(pulse); g.appendChild(dot); g.appendChild(lb); g.appendChild(hit);
        const pick = ()=>select(i);
        g.addEventListener('click', pick);
        g.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); pick(); } });
        svg.appendChild(g);
        return { g, dot, pulse, lb, phase:c.phase };
      });

      function select(i){ selected=i; wpEls.forEach((e,k)=>e.g.classList.toggle('sel',k===i)); onMilestone(i); }
      doSelect = select;
      select(selected);

      // gentle pulse only on the currently-selected pin
      let lastDraw=0;
      function frame(ts){
        if(stopped){ return; }
        if(paused){ raf=requestAnimationFrame(frame); return; }
        if(ts-lastDraw < 33){ raf=requestAnimationFrame(frame); return; }
        lastDraw=ts;
        const ph=(ts/1400)%1;
        wpEls.forEach((e,k)=>{
          if(k===selected){ e.pulse.style.opacity=(1-ph)*0.55; e.pulse.setAttribute('r',8+ph*24); }
          else e.pulse.style.opacity=0;
        });
        if(!reduced) raf=requestAnimationFrame(frame);
      }
      raf=requestAnimationFrame(frame);
    }

    function el(tag, attrs){ const e=document.createElementNS(svgNS,tag); for(const k in attrs) e.setAttribute(k,attrs[k]); return e; }

    // pause the animation loop whenever the map is scrolled off-screen
    if('IntersectionObserver' in window){
      new IntersectionObserver((ents)=>{ paused = !ents[0].isIntersecting; }, { threshold:0.01 }).observe(holder);
    }

    // fetch geometry, then build (build works even if this fails)
    fetch(ATLAS).then(r=>r.json()).then(topo=>{
      const feats = window.topojson.feature(topo, topo.objects.countries).features;
      const atlasIndia = feats.find(f=>f.id==='356' || (f.properties&&f.properties.name==='India'));
      if(!land) land = atlasIndia;                       // fallback India shape
      neighbours = { type:'FeatureCollection', features: feats.filter(f=>f!==atlasIndia) };
      build();
    }).catch(()=>build());
    // official India geometry (full J&K, Ladakh, Arunachal) — preferred for the focus shape
    fetch(INDIA).then(r=>r.json()).then(geo=>{
      const feats = (geo.features||[]);
      land = { type:'FeatureCollection', features: feats };  // whole country as focus
      build();
    }).catch(()=>{});
    // also try immediate build (route only) in case fetch is slow
    build();

    let rt; window.addEventListener('resize', ()=>{ clearTimeout(rt); rt=setTimeout(build,200); });
    return { stop(){ stopped=true; cancelAnimationFrame(raf); }, select(i){ if(doSelect) doSelect(i); } };
  }

  window.StempleMap = { render };
})();
