/* Full-bleed showcase + Film (full-scale video) + Journey map */
const MEDIA = window.STEMPLE_MEDIA || {};

/* ---- Full-bleed image showcase (White Desert "Our Camps" style) ---- */
function Bleed({ id, title, label, text, slot, eyebrow, bullets=[] }){
  return (
    <section className="bleed" id={id}>
      <div className="bg" data-parallax="0.22"><img src={(window.STEMPLE_IMG&&window.STEMPLE_IMG[slot])||`assets/slot-${slot}.webp`} alt="" draggable="false" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>
      <div className="bleed-head rv" data-parallax="-0.05">
        {eyebrow && <span className="bleed-eyebrow">{eyebrow}</span>}
        <h2 className="bleed-title"><span className="clip-rise"><span>{title}<i>.</i></span></span></h2>
      </div>
      <div className="bleed-panel rv rv-2">
        <div className="panel-top">
          <span className="panel-lock" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/><circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none"/></svg>
          </span>
          <div className="lab">{label}</div>
        </div>
        <p>{text}</p>
        {bullets.length>0 && (
          <ul className="panel-list">
            {bullets.map((b,i)=>(<li key={i}><span className="tick" aria-hidden="true"></span>{b}</li>))}
          </ul>
        )}
      </div>
    </section>
  );
}

/* ---- Video modal (Watch Film) — YouTube iframe ---- */
const YT_ID = 'x9Xz78g5wxQ';
window.StempleFilm = { open:()=>window.dispatchEvent(new Event('film-open')) };
function VideoModal(){
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
    const onOpen = ()=>{ setOpen(true); };
    window.addEventListener('film-open', onOpen);
    return ()=>window.removeEventListener('film-open', onOpen);
  },[]);
  React.useEffect(()=>{
    if(open) document.documentElement.classList.add('lenis-stopped');
    else document.documentElement.classList.remove('lenis-stopped');
  },[open]);
  const close = ()=>setOpen(false);
  const src = open ? `https://www.youtube.com/embed/${YT_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(location.origin)}` : '';
  return (
    <div className={`vmodal${open?' open':''}`} onClick={e=>{ if(e.target.classList.contains('vmodal')) close(); }}>
      <div className="vmodal-box">
        <button className="vmodal-close" onClick={close} aria-label="Close">×</button>
        {open && <iframe className="vmodal-frame" src={src} title="Stemple film" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0"></iframe>}
      </div>
    </div>
  );
}

/* ---- Film section ---- */
function Film(){
  const secRef = React.useRef(null);
  const stickyRef = React.useRef(null);
  const frameRef = React.useRef(null);
  const copyRef = React.useRef(null);
  const bgRef = React.useRef(null);
  React.useEffect(()=>{
    const el = bgRef.current; if(!el || el.src) return;
    el.src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3&enablejsapi=1&origin=${encodeURIComponent(location.origin)}`;
  },[]);
  React.useEffect(()=>{
    const sec=secRef.current, frame=frameRef.current, copy=copyRef.current;
    if(!sec||!frame||!copy) return;
    let raf=0, cur=0;
    const ease=t=>t*t*(3-2*t);
    const clamp=(x,a,b)=>x<a?a:x>b?b:x;
    const loop=()=>{
      const r=sec.getBoundingClientRect();
      const vh=window.innerHeight;
      const total=sec.offsetHeight-vh;
      const p=clamp(-r.top/(total||1),0,1);
      cur+=(p-cur)*0.16;                 // smoothing
      const e=ease(clamp(cur/0.72,0,1));  // shrink completes at 72% of scroll
      const out=ease(clamp((cur-0.74)/0.26,0,1)); // exit phase
      const scale=(1-e*0.30)*(1-out*0.34);
      const rad=e*26;
      const ty=out*-46;                   // move up on exit, in vh
      frame.style.transform=`translate3d(0,${ty}vh,0) scale(${scale})`;
      frame.style.borderRadius=rad+'px';
      const tScale=(1-e*0.52)*(1-out*0.4);
      copy.style.transform=`scale(${tScale})`;
      copy.style.opacity=String(1-out*0.85);
      raf=requestAnimationFrame(loop);
    };
    raf=requestAnimationFrame(loop);
    return ()=>cancelAnimationFrame(raf);
  },[]);
  return (
    <section className="film" id="film" ref={secRef}>
      <div className="film-sticky" ref={stickyRef}>
        <div className="film-frame" ref={frameRef}>
          <div className="bg"><iframe ref={bgRef} title="Film background" frameBorder="0" allow="autoplay; encrypted-media" tabIndex="-1" aria-hidden="true"></iframe></div>
          <div className="film-copy" ref={copyRef}>
            <div className="lab">Inside the practice</div>
            <h2>The Stemple</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Journey / Rollout map ---- */
const CITIES = [
  { city:'Delhi-NCR', lng:77.21, lat:28.61, phase:1, status:'Pilot open', lp:'r', courts:['Gautam Budh Nagar District Court','Delhi Saket Court','Rohini Court Bar Association'], fit:'Civil · Criminal · Consumer · IBC' },
  { city:'Mumbai', lng:72.87, lat:19.07, phase:1, status:'Waitlist open', lp:'l', courts:['Bombay High Court','City Civil Court','DRT Mumbai','NCLT Mumbai'], fit:'Civil · Criminal · Consumer · IBC' },
  { city:'Pune', lng:73.86, lat:18.52, phase:1, status:'Waitlist open', lp:'b', courts:['District & Sessions Court','Small Causes Court','DRT Pune','Consumer Commission'], fit:'Civil · Criminal · Consumer · IBC' },
  { city:'Bengaluru', lng:77.59, lat:12.97, phase:2, status:'Waitlist open', lp:'b', courts:['Karnataka High Court','City Civil Court','DRT Bengaluru','NCLT Bengaluru'], fit:'Civil · Criminal · Consumer · IBC' },
  { city:'Hyderabad', lng:78.47, lat:17.38, phase:2, status:'Waitlist open', lp:'r', courts:['Telangana High Court','City Civil Court','DRT Hyderabad','NCLT Hyderabad'], fit:'Civil · Criminal · Consumer · IBC' },
  { city:'Ahmedabad', lng:72.57, lat:23.02, phase:2, status:'Waitlist open', lp:'l', courts:['Gujarat High Court','City Civil Court','DRT Ahmedabad','NCLT Ahmedabad'], fit:'Civil · Criminal · Consumer · IBC' },
  { city:'Chennai', lng:80.27, lat:13.08, phase:3, status:'Planned 2027', lp:'r', courts:['Madras High Court','City Civil Court','DRT Chennai','NCLT Chennai'], fit:'Civil · Criminal · Consumer · IBC' },
  { city:'Kolkata', lng:88.36, lat:22.57, phase:3, status:'Planned 2027', lp:'r', courts:['Calcutta High Court','City Civil Court','DRT Kolkata','NCLT Kolkata'], fit:'Civil · Criminal · Consumer · IBC' },
  { city:'Chandigarh', lng:76.78, lat:30.73, phase:3, status:'Planned 2027', lp:'t', courts:['Punjab & Haryana High Court','District Courts','DRT Chandigarh','Consumer Commission'], fit:'Civil · Criminal · Consumer · IBC' },
];
const PHASE_CTA = { 'Pilot open':'Request early access', 'Waitlist open':'Join the waitlist', 'Planned 2027':'Register interest' };

function Journey(){
  const [cur, setCur] = React.useState(0);
  const ctlRef = React.useRef(null);
  React.useEffect(()=>{
    if(window.StempleMap){
      ctlRef.current = window.StempleMap.render('map-holder', { milestones:CITIES, onMilestone:setCur });
    }
    return ()=>{ ctlRef.current && ctlRef.current.stop && ctlRef.current.stop(); };
  },[]);
  const c = CITIES[cur] || CITIES[0];
  const requestCity = ()=>{
    window.dispatchEvent(new CustomEvent('demo-prefill', { detail:{ city:c.city } }));
    const el = document.querySelector('#demo');
    if(el){ const y = el.getBoundingClientRect().top + window.scrollY - 10;
      if(window.StempleEngine && document.documentElement.classList.contains('lenis')) window.StempleEngine.scrollTo(y); else window.scrollTo({top:y,behavior:'smooth'}); }
  };
  return (
    <section className="section journey dark-sec" id="journey">
      <div className="wrap">
        <div className="journey-top">
          <div className="rv"><span className="eyebrow on-dark">Our Rollout</span></div>
          <h2 className="rv rv-2">Rolling out across India, firm by firm.</h2>
          <p className="rv rv-3">We're onboarding our first litigation firms in Maharashtra and Delhi-NCR now, then expanding city by city. Every city goes live with the courts local firms actually file in.</p>
        </div>
        <div className="map-stage">
          <div className="map-card rv rv-2">
            <div className="city-head">
              <div className="v">{c.city}</div>
              <span className={`status-chip s${c.phase}`}><span className="d"></span>{c.status}</span>
            </div>
            <div className="map-stat">
              <div className="k">Courts covered</div>
              <ul className="courts">{c.courts.map((x,i)=><li key={i}>{x}</li>)}</ul>
            </div>
            <div className="map-stat">
              <div className="k">Practice fit</div>
              <div className="fit">{c.fit}</div>
            </div>
            <button className="city-cta" onClick={requestCity}>Request a secure demo <em>in {c.city}</em> <span>→</span></button>
            <div className="map-counts">
              <div><div className="v">9</div><div className="k">cities planned</div></div>
              <div><div className="v">1</div><div className="k">module live</div></div>
            </div>
            <div className="phase-key">
              <span><i className="pk p1"></i>Pilot (now)</span>
              <span><i className="pk p2"></i>2026–27</span>
              <span><i className="pk p3"></i>2027</span>
            </div>
          </div>
          <div className="map-holder" id="map-holder"></div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Bleed, VideoModal, Film, Journey });
