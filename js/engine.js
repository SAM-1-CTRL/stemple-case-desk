/* Stemple Case Desk — motion engine (plain JS, no build) */
(function(){
  const reduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const isTouch = window.matchMedia('(pointer:coarse)').matches;

  /* ---------- Smooth scroll (lerp / momentum) ---------- */
  const SS = { target:0, current:0, ease:0.12, on:false, max:0 };
  function recalc(){ SS.max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight); }
  function clamp(v){ return Math.max(0, Math.min(SS.max, v)); }
  function onWheel(e){
    if(!SS.on) return;
    if(e.ctrlKey) return;              // let pinch-zoom through
    e.preventDefault();
    let d = e.deltaY;
    if(e.deltaMode===1) d *= 16;       // lines -> px
    else if(e.deltaMode===2) d *= window.innerHeight; // pages -> px
    SS.target = clamp(SS.target + d);
  }
  function syncFromNative(){ // keyboard / anchor / scrollbar drag
    if(!SS.on) return;
    const y = window.scrollY;
    if(Math.abs(y - SS.current) > 2 && Math.abs(y - SS.target) > 2){ SS.target = clamp(y); SS.current = y; }
  }
  function scrollTo(y){ SS.target = clamp(y); }

  /* ---------- Parallax + reveal driver ---------- */
  let pEls = [];
  function scan(){
    pEls = [...document.querySelectorAll('[data-parallax]')].map(el=>({el, sp:parseFloat(el.dataset.parallax)||0.2}));
  }
  function currentScroll(){ return SS.on ? SS.current : window.scrollY; }
  function frame(){
    if(SS.on){
      SS.current += (SS.target - SS.current) * SS.ease;
      if(Math.abs(SS.target - SS.current) < 0.4) SS.current = SS.target;
      window.scrollTo(0, SS.current);
    }
    revealInView();
    const y = currentScroll(), vh = window.innerHeight;
    for(const p of pEls){
      const r = p.el.getBoundingClientRect();
      const center = r.top + r.height/2 - vh/2;   // distance from viewport center
      p.el.style.transform = `translate3d(0,${(center * -p.sp).toFixed(2)}px,0)`;
    }
    // cursor: ring lerps in rAF; dot is positioned directly on mousemove (never starves)
    if(CUR.on && CUR.ring){
      CUR.rx += (CUR.mx - CUR.rx)*0.16; CUR.ry += (CUR.my - CUR.ry)*0.16;
      CUR.ring.style.transform = `translate(${CUR.rx}px,${CUR.ry}px) translate(-50%,-50%)`;
    }
    requestAnimationFrame(frame);
  }

  /* ---------- Reveal (IO + rect fallback; IO can stall while doc is hidden) ---------- */
  let io;
  function revealInView(margin){
    const vh = window.innerHeight, m = margin==null ? vh*0.12 : margin;
    document.querySelectorAll('.rv:not(.in),.clip-rise:not(.in)').forEach(el=>{
      const r = el.getBoundingClientRect();
      if(r.top < vh - m && r.bottom > 0) el.classList.add('in');
    });
  }
  function observeReveals(){
    if(!io){
      io = new IntersectionObserver((ents)=>{
        for(const e of ents){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }
      }, { threshold:0.12, rootMargin:'0px 0px -8% 0px' });
    }
    document.querySelectorAll('.rv:not(.in),.clip-rise:not(.in)').forEach(el=>io.observe(el));
    revealInView();          // reveal anything already on screen right now
  }

  /* ---------- Custom cursor ---------- */
  const CUR = { on:false, mx:0,my:0,cx:0,cy:0,rx:0,ry:0,dot:null,ring:null };
  function initCursor(){
    if(isTouch || reduced) return;
    CUR.dot = document.getElementById('cursor'); CUR.ring = document.getElementById('ring');
    if(!CUR.dot) return;
    CUR.on = true;
    window.addEventListener('mousemove', e=>{
      CUR.mx=e.clientX; CUR.my=e.clientY;
      // position the dot immediately — not tied to the shared rAF, so it stays glued to the pointer
      CUR.dot.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
    }, {passive:true});
    document.addEventListener('mouseover', e=>{
      const t = e.target.closest('a,button,[data-cursor],.feat,.val,.pillar,.mrow');
      CUR.dot.classList.toggle('big', !!t);
      if(CUR.ring) CUR.ring.style.opacity = t ? '0' : '1';
    });
  }

  /* ---------- Lattice canvas (encryption field) ---------- */
  function initLattice(id){
    const cv = document.getElementById(id); if(!cv) return;
    const ctx = cv.getContext('2d'); let w,h,dpr,nodes=[],packets=[],paused=false,tick=0;
    function size(){
      dpr = Math.min(window.devicePixelRatio||1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w*dpr; cv.height = h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
      const count = Math.min(58, Math.round(w*h/21000));
      nodes = Array.from({length:count},()=>({ x:Math.random()*w, y:Math.random()*h, vx:(Math.random()-.5)*0.28, vy:(Math.random()-.5)*0.28, ph:Math.random()*6.28 }));
      // travelling data packets ride random node-to-node hops
      packets = Array.from({length:Math.min(10,Math.round(count/5))},()=>({ a:0, b:1, t:Math.random(), sp:0.004+Math.random()*0.006 }));
      packets.forEach(p=>{ p.a=(Math.random()*count)|0; p.b=(Math.random()*count)|0; });
    }
    size(); window.addEventListener('resize', size);
    const mouse = {x:-999,y:-999};
    cv.parentElement.addEventListener('mousemove', e=>{ const r=cv.getBoundingClientRect(); mouse.x=e.clientX-r.left; mouse.y=e.clientY-r.top; });
    cv.parentElement.addEventListener('mouseleave', ()=>{ mouse.x=-999; mouse.y=-999; });
    function draw(){
      if(paused){ requestAnimationFrame(draw); return; }
      tick++;
      ctx.clearRect(0,0,w,h);
      for(const n of nodes){
        n.x+=n.vx; n.y+=n.vy;
        // gentle breathing drift
        n.x += Math.sin(tick*0.006 + n.ph)*0.12;
        if(n.x<0||n.x>w) n.vx*=-1; if(n.y<0||n.y>h) n.vy*=-1;
        const dm = Math.hypot(n.x-mouse.x,n.y-mouse.y);
        if(dm<130){ n.x += (n.x-mouse.x)/dm*0.7; n.y += (n.y-mouse.y)/dm*0.7; }
      }
      for(let i=0;i<nodes.length;i++){
        for(let j=i+1;j<nodes.length;j++){
          const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);
          if(d<150){ const o=(1-d/150)*0.22; ctx.strokeStyle=`rgba(31,42,68,${o})`; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
        }
      }
      for(const n of nodes){
        const near = Math.hypot(n.x-mouse.x,n.y-mouse.y)<130;
        ctx.fillStyle = near ? 'rgba(255,126,21,.95)' : 'rgba(31,42,68,.4)';
        ctx.beginPath(); ctx.arc(n.x,n.y, near?2.4:1.5, 0, 6.29); ctx.fill();
      }
      // travelling teal packets along node hops
      for(const p of packets){
        const a=nodes[p.a], b=nodes[p.b]; if(!a||!b) continue;
        p.t += p.sp;
        if(p.t>=1){ p.t=0; p.a=p.b; p.b=(Math.random()*nodes.length)|0; }
        const x=a.x+(b.x-a.x)*p.t, y=a.y+(b.y-a.y)*p.t;
        const g=ctx.createRadialGradient(x,y,0,x,y,9);
        g.addColorStop(0,'rgba(57,198,178,.9)'); g.addColorStop(1,'rgba(57,198,178,0)');
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,9,0,6.29); ctx.fill();
        ctx.fillStyle='rgba(230,255,250,.95)'; ctx.beginPath(); ctx.arc(x,y,1.8,0,6.29); ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    if('IntersectionObserver' in window){ new IntersectionObserver(es=>{ paused=!es[0].isIntersecting; },{threshold:0.01}).observe(cv); }
    if(!reduced) draw(); else { /* static single frame */ }
  }

  /* ---------- Public API ---------- */
  window.StempleEngine = {
    start(){
      recalc();
      if(!isTouch && !reduced){
        SS.on = true; SS.target = SS.current = window.scrollY;
        window.addEventListener('wheel', onWheel, {passive:false});
        window.addEventListener('scroll', syncFromNative, {passive:true});
        document.documentElement.classList.add('lenis');
      }
      window.addEventListener('resize', recalc);
      scan(); observeReveals(); initCursor();
      document.addEventListener('visibilitychange', ()=>{ if(!document.hidden){ recalc(); revealInView(); observeReveals(); } });
      requestAnimationFrame(frame);
    },
    refresh(){ recalc(); scan(); observeReveals(); },
    scrollTo, initLattice
  };
})();
