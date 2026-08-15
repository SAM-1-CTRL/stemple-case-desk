/* Floating pill navigation (White Desert style) */
function NavPill(){
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
    const onScroll = ()=>setScrolled(window.scrollY>40);
    window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
    return ()=>window.removeEventListener('scroll', onScroll);
  },[]);
  const go = ()=>setOpen(false);
  const glow = (e)=>{ const el=e.currentTarget; const r=el.getBoundingClientRect(); el.style.setProperty('--mx', (e.clientX-r.left)+'px'); el.style.setProperty('--my', (e.clientY-r.top)+'px'); };
  return (
    <nav className={`pillnav${scrolled?' scrolled':''}${open?' open':''}`}>
      <div className="pill-group left" onMouseMove={glow}>
        <a className="pill" href="#casedesk" onClick={go}>Case Desk</a>
        <a className="pill" href="#security" onClick={go}>Security</a>
        <a className="pill" href="#journey" onClick={go}>Journey</a>
      </div>
      <a className="nav-logo" href="#top">
        <span className="wm">STEMPLE</span>
      </a>
      <div className="nav-side">
        <div className="pill-group right" onMouseMove={glow}>
          <a className="pill" href="#voices" onClick={go}>Reviews</a>
          <a className="pill book" href="#demo" onClick={go}>Book a Demo</a>
        </div>
        <button className="nav-burger" aria-label="Menu" onClick={()=>setOpen(o=>!o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
Object.assign(window, { NavPill });
