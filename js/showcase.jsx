/* Statement + Case Desk showcase + module marquee */

function Principle(){
  const ref = React.useRef(null);
  const text = "A lawyer at 10 PM, exhausted, should find the tool has already done the work; they just need to confirm it.";
  const words = text.split(' ');
  React.useEffect(()=>{
    const el = ref.current; if(!el) return;
    const spans = el.querySelectorAll('.pw');
    const N = spans.length, lead = 5;
    const L=[210,206,196], D=[24,32,54];
    const clamp=(x,a,b)=>x<a?a:x>b?b:x;
    let raf=0;
    const loop=()=>{
      const r=el.getBoundingClientRect(), vh=window.innerHeight;
      const p=clamp((vh*0.86 - r.top)/(vh*0.72), 0, 1);
      const head=p*(N+lead);
      for(let i=0;i<N;i++){
        const t=clamp((head - i)/lead, 0, 1);
        const rr=Math.round(L[0]+(D[0]-L[0])*t), gg=Math.round(L[1]+(D[1]-L[1])*t), bb=Math.round(L[2]+(D[2]-L[2])*t);
        spans[i].style.color=`rgb(${rr},${gg},${bb})`;
      }
      raf=requestAnimationFrame(loop);
    };
    raf=requestAnimationFrame(loop);
    return ()=>cancelAnimationFrame(raf);
  },[]);
  return (
    <section className="section principle" id="principle">
      <div className="wrap">
        <span className="principle-star" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0 C12.6 6.5 17.5 11.4 24 12 C17.5 12.6 12.6 17.5 12 24 C11.4 17.5 6.5 12.6 0 12 C6.5 11.4 11.4 6.5 12 0 Z"/></svg>
        </span>
        <p className="principle-text" ref={ref}>
          {words.map((w,i)=>(<span className="pw" key={i}>{w}{i<words.length-1?' ':''}</span>))}
        </p>
      </div>
    </section>
  );
}

const CD_FEATS = [
  { n:'01', h:'Slide-in, not rip-and-replace', p:'A plug-in layer over Word and Outlook. Your team adopts it without learning a new ecosystem — friction eliminated on day one.' },
  { n:'02', h:'Citation verification, in-panel', p:'Runs beside the draft, verifying citations automatically and neutralising the risk of citing ghost cases.' },
  { n:'03', h:'Passive activity monitoring', p:'Captures billable work as it happens across the matter — closing the billing leakage most firms never see.' },
  { n:'04', h:'Offline-first courtroom mode', p:'Edge databases keep the desk working inside shielded courtrooms, syncing the moment you reconnect.' },
];

function CaseDesk(){
  return (
    <section className="section casedesk" id="casedesk">
      <div className="wrap">
        <div className="cd-head">
          <div>
            <div className="rv"><span className="eyebrow">Flagship Module</span></div>
            <h2 className="cd-title rv rv-2">Case <em>Desk</em></h2>
          </div>
          <p className="cd-lead rv rv-3">One surface for every live matter. The Case Desk reads the file, orders the timeline, checks the citations and tracks the billable minute &mdash; so the advocate arrives already prepared.</p>
        </div>

        <div className="cd-stage">
          <div className="macwin rv rv-2" data-cursor>
            <div className="mac-bar">
              <div className="mac-lights"><span></span><span></span><span></span></div>
              <div className="mac-title">Stemple &mdash; Case Desk</div>
            </div>
            <div className="mac-toolbar">
              <span className="mock-tabs"><span>Matters</span><span className="on">Desk</span><span>Drafting</span><span>Billing</span></span>
              <span className="tb-status">Vault open &middot; Synced</span>
            </div>
            <div className="mock-body">
              <aside className="mock-side">
                <div className="mrow on"><span className="ic"></span>Active Desk</div>
                <div className="mrow"><span className="ic"></span>Cause List</div>
                <div className="mrow"><span className="ic"></span>Citations</div>
                <div className="mrow"><span className="ic"></span>Documents</div>
                <div className="mrow"><span className="ic"></span>Time & Billing</div>
                <div className="mrow"><span className="ic"></span>Vault</div>
              </aside>
              <div className="mock-main">
                <div className="matter">
                  <h4>Mehta v. Union of India</h4>
                  <span className="tag live">● Hearing today</span>
                </div>
                <div className="matter-sub">W.P. (C) 4821/2026 · High Court of Delhi · Bench II · 11:30 AM</div>
                <div className="timeline">
                  <div className="tl done"><div className="t">Petition filed &amp; indexed</div><div className="d">Auto-tagged · 04 Jun</div></div>
                  <div className="tl done"><div className="t">Counter-affidavit reviewed</div><div className="d">AI summary ready · 09 Jul</div></div>
                  <div className="tl now"><div className="t">Rejoinder — final pass</div><div className="d">In progress · 12 citations checked</div></div>
                  <div className="tl"><div className="t">Oral submission brief</div><div className="d">Drafted from timeline · pending review</div></div>
                </div>
                <div className="cite">
                  <b>Citation check</b> — 12 of 12 authorities verified against reporters. <b>1 flag:</b> (2019) 4 SCC 221 cited for a holding it does not contain. Ghost-case risk neutralised.
                </div>
              </div>
            </div>
          </div>

          <div className="cd-feats">
            {CD_FEATS.map((f,i)=>(
              <div className={`feat rv rv-${i+2}`} key={i} data-cursor>
                <div className="n">{f.n}</div>
                <h5>{f.h}</h5>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee(){
  const items = ['Case Management','Contract Lifecycle','AI Drafting Review','IP Portfolio','Time & Billing','Client Portal','Compliance Vault'];
  const run = items.concat(items);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {run.map((t,i)=><span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

Object.assign(window, { Principle, CaseDesk, Marquee });
