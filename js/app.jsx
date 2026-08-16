/* App shell — pill nav + light theme sections, boots engine + hero video */
const DS = window.StempleDesignSystem_8b712a;
const LOGO = 'assets/stemple-logo.jpeg';

const FOOTER_COLS = [
  { h:'Platform', l:[{t:'Case Desk',href:'#casedesk'},{t:'Drafting Review',href:'#'},{t:'Contract Lifecycle',href:'#'},{t:'IP Management',href:'#'}] },
  { h:'Security', l:[{t:'Zero-Knowledge Architecture',href:'#inside'},{t:'DPDP Act 2023',href:'#'},{t:'Offline-First',href:'#'},{t:'Accessibility Statement',href:'#'}] },
  { h:'Company', l:[{t:'About',href:'#'},{t:'Our Journey',href:'#journey'},{t:'Team',href:'#team'},{t:'LinkedIn',href:'https://www.linkedin.com/company/stemple/',ext:true}] },
  { h:'Get in touch', l:[{t:'Book a Secure Demo',href:'#demo'},{t:'info@stemple.in',href:'mailto:info@stemple.in'}] },
];

function SiteFooter(){
  return (
    <footer className="site-footer">
      <div className="footer-top wrap">
        <a className="footer-logo" href="#top" aria-label="Stemple"><img src={LOGO} alt="Stemple"/></a>
        <div className="footer-cols">
          {FOOTER_COLS.map((col,i)=>(
            <div className="footer-col" key={i}>
              <p className="footer-head">{col.h}</p>
              {col.l.map((l,j)=>(
                <a className="footer-link" key={j} href={l.href} {...(l.ext?{target:'_blank',rel:'noopener'}:{})}>
                  {l.t}{l.sub && <span className="footer-sub">{l.sub}</span>}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-wm-wrap"><div className="footer-wm">STEMPLE</div></div>
      <div className="footer-base wrap">
        <p className="footer-quote">Your Law. Your Judgment. Our Intelligence.</p>
        <p className="footer-copy">Stemple &copy; 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App(){
  React.useEffect(()=>{
    const eng = window.StempleEngine;
    eng.initLattice('lattice');
    eng.start();
    // hero background video: show only if the source actually loads
    const v = document.getElementById('hero-video');
    if(v){
      v.src = (window.STEMPLE_MEDIA||{}).heroVideo || '';
      v.addEventListener('loadeddata', ()=>{ v.style.opacity='1'; });
      v.addEventListener('error', ()=>{ v.style.display='none'; });
      v.style.opacity='0'; v.style.transition='opacity .6s';
    }
    const t1 = setTimeout(()=>eng.refresh(), 60);
    const t2 = setTimeout(()=>eng.refresh(), 500);
    const onClick = (e)=>{
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      const id = a.getAttribute('href');
      if(id.length<2) return;
      const el = document.querySelector(id);
      if(!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 10;
      if(window.StempleEngine && document.documentElement.classList.contains('lenis')) window.StempleEngine.scrollTo(y);
      else window.scrollTo({top:y, behavior:'smooth'});
    };
    document.addEventListener('click', onClick);
    return ()=>{ clearTimeout(t1); clearTimeout(t2); document.removeEventListener('click', onClick); };
  },[]);

  const footerCols = [];

  return (
    <React.Fragment>
      <NavPill/>
      <VideoModal/>
      <main>
        <Hero/>
        <Principle/>
        <CaseDesk/>
        <Bleed id="inside" slot="bleed-inside" eyebrow="The Vault" title="Inside the Vault" label="Zero-Knowledge"
          text="Every matter lives inside an encrypted vault only your firm can open. We can't read your files — and neither can anyone else."
          bullets={["AES-256 end-to-end encryption","Only your firm holds the keys","Full offline vault on Windows"]}/>
        <Marquee/>
        <Security/>
        <Journey/>
        <Film/>
        <Voices/>
        <Values/>
        <Team/>
        <DemoCTA/>
      </main>
      <SiteFooter/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
