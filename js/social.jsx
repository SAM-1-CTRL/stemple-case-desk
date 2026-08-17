/* Testimonials + Values + Team */

const VOICES = [
  { nm:'Rajesh Singh', rl:'Managing Partner', q:<>Stemple's <b>'slide in' approach</b> is exactly what our firm needed. By integrating as a plug-in layer over our existing tools like Word and Outlook, we eliminated friction without forcing our team to learn an entirely new ecosystem. Furthermore, the passive activity monitoring has completely stopped our billing leakage.</> },
  { nm:'Shubham Mishra', rl:'General Counsel', q:<>As a corporate legal department, security is our absolute top priority. Built on a <b>military-grade, zero-knowledge hybrid architecture</b>, Stemple ensures that our attorney-client privilege is enforced by the immutable laws of mathematics. In the era of the DPDP Act 2023, this mathematically insulates us from cloud breaches.</> },
  { nm:'Ashok Singh', rl:'Senior Advocate', q:<>What happens when LegalTech tries to replace the lawyer? Hallucinated precedents and missed nuances. Stemple is completely different. We don't use it to draft our petitions. Instead, it operates directly in a side panel alongside our drafts, <b>automatically verifying citations</b> and completely neutralizing the risk of citing 'ghost cases'.</> },
];

function Voices(){
  const [i, setI] = React.useState(0);
  const [key, setKey] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const N = VOICES.length;
  React.useEffect(()=>{
    if(paused) return;
    const t = setTimeout(()=>{ setI(x=>(x+1)%N); setKey(k=>k+1); }, 7000);
    return ()=>clearTimeout(t);
  },[i, paused, N]);
  const go = (n)=>{ setI(((n%N)+N)%N); setKey(k=>k+1); };
  const v = VOICES[i];
  return (
    <section className="section voices" id="voices">
      <div className="voices-grid" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
        <div className="voices-bg" aria-hidden="true">
          <div className="vg-grid"></div>
          <div className="vg-orb"></div>
        </div>

        <header className="voices-head">
          <div className="rv"><span className="eyebrow">Client Reviews</span></div>
          <h2 className="voices-title rv rv-2">
            <span>The practitioners</span>
            <span>who <em>trust</em> the desk.</span>
          </h2>
          <div className="voices-meta rv rv-3"><span className="dot"></span> Verified &middot; India</div>
        </header>

        <div className="stage rv rv-2">
          <div className="stage-quote" key={key}>
            <span className="qmark" aria-hidden="true">&ldquo;</span>
            <blockquote className="qtext">{v.q}</blockquote>
            <div className="qrule"><span></span></div>
            <div className="qwho">
              <div className="qwho-name">{v.nm}</div>
              <div className="qwho-role">{v.rl}</div>
            </div>
          </div>
        </div>

        <aside className="index-rail">
          <div className="rail-count">
            <span className="cur">{String(i+1).padStart(2,'0')}</span>
            <span className="sep">/</span>
            <span className="tot">{String(N).padStart(2,'0')}</span>
          </div>
          <ol className="rail-list">
            {VOICES.map((x,ix)=>(
              <li key={ix} className={ix===i?'on':''}>
                <button onClick={()=>go(ix)}>
                  <span className="rl-num">{String(ix+1).padStart(2,'0')}</span>
                  <span className="rl-name">{x.nm}</span>
                  <span className="rl-role">{x.rl}</span>
                  {ix===i && !paused && <span className="rl-bar" key={key}></span>}
                </button>
              </li>
            ))}
          </ol>
          <div className="rail-arrows">
            <button aria-label="Previous" onClick={()=>go(i-1)}>&larr;</button>
            <button aria-label="Next" onClick={()=>go(i+1)}>&rarr;</button>
          </div>
        </aside>
      </div>
    </section>
  );
}

const VALS = [
  { n:'01', h:'Deadlines that don’t slip', p:'Every limitation date computed under the Limitation Act, with 7-day and 48-hour warnings. The date is tracked before you have to remember it.', icon:'clock' },
  { n:'02', h:'Billing without the month-end scramble', p:'Time captured as you work and turned into GST-compliant invoices — place of supply, CGST/SGST split, GSTIN, all handled.', icon:'invoice' },
  { n:'03', h:'Works with no signal', p:'Full offline access on Windows. Draft, log time, and update matters in a courtroom basement; it syncs the moment you reconnect.', icon:'offline' },
];

function ValIcon({ kind }){
  return (
    <span className={`val-icon ${kind}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        {kind==='clock' && <g>
          <circle className="vi-track" cx="24" cy="24" r="17"/>
          <circle className="vi-sweep" cx="24" cy="24" r="17"/>
          <line className="vi-hand hh" x1="24" y1="24" x2="24" y2="14"/>
          <line className="vi-hand mh" x1="24" y1="24" x2="32" y2="24"/>
        </g>}
        {kind==='invoice' && <g>
          <path className="vi-doc" d="M14 8h14l6 6v26H14z"/>
          <line className="vi-ln l1" x1="19" y1="22" x2="29" y2="22"/>
          <line className="vi-ln l2" x1="19" y1="28" x2="29" y2="28"/>
          <path className="vi-check" d="M18 33l4 4 8-9"/>
        </g>}
        {kind==='offline' && <g>
          <path className="vi-wave w3" d="M8 22c9-9 23-9 32 0"/>
          <path className="vi-wave w2" d="M14 28c6-6 14-6 20 0"/>
          <path className="vi-wave w1" d="M20 34c3-3 5-3 8 0"/>
          <circle className="vi-node" cx="24" cy="39" r="2.4"/>
        </g>}
      </svg>
    </span>
  );
}

function Values(){
  return (
    <section className="section values" id="values">
      <div className="wrap">
        <div className="rv"><span className="eyebrow" style={{color:'var(--color-orange)'}}>Built for the way you actually work</span></div>
        <p className="val-lead rv rv-2">Your matters, deadlines, and billing in one workspace — designed for firms running on Excel, WhatsApp and Outlook today.</p>
        <div className="val-grid">
          {VALS.map((v,i)=>(
            <div className={`val rv rv-${i+2}`} key={i} data-cursor>
              <div className="val-top"><span className="n">{v.n}</span><ValIcon kind={v.icon}/></div>
              <h4>{v.h}</h4>
              <p>{v.p}</p>
              <div className="line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  { id:'team-1', nm:'Samarth Shukla',     rl:'Co-Founder & CEO', disc:'PRODUCT DESIGNER' },
  { id:'team-2', nm:'Devansh Srivastava', rl:'Co-Founder & CIO', disc:'fINANCE sPECIALIST' },
  { id:'team-3', nm:'Mehul Mendhiratta',  rl:'Co-Founder & COO', disc:'oPERATIONS EXPERT' },
  { id:'team-4', nm:'Aditya Daryani',     rl:'Co-Founder & CMO', disc:'Marketing expert' },
  { id:'team-5', nm:'Aditya Raj',         rl:'Dev-Ops Engineer', disc:'SAAS EXPERT' },
  { id:'team-6', nm:'Yash Sharma',        rl:'AI & ML Developer', disc:'Machine learning' },
  { id:'team-7', nm:'Ravindra Katarki',   rl:'Technical Advisor', disc:'BLOCKCHAIN EXPERT' },
  { id:'team-8', nm:'Pranshu Patidar',    rl:'Investor',          disc:'Business operation' },
  { id:'team-9', nm:'Mayank Narayan',     rl:'Investor',          disc:'Backend Engineering' },
];

function Team(){
  return (
    <section className="section team" id="team">
      <div className="wrap">
        <div className="voices-top">
          <div className="rv"><span className="eyebrow">Meet Our Team</span></div>
          <span className="mono rv">The Founding Collective</span>
        </div>
        <h2 className="hl rv rv-2" style={{fontSize:'clamp(28px,4vw,52px)',maxWidth:820,margin:'8px 0 0'}}>Built by the people who understand the stakes of privilege.</h2>
      </div>
      <TeamCarousel/>
    </section>
  );
}

function TeamCarousel(){
  const trackRef = React.useRef(null);
  const pausedRef = React.useRef(false);
  React.useEffect(()=>{
    const track = trackRef.current; if(!track) return;
    const gap = 24;
    const sizeCards = ()=>{
      const cw = track.parentElement.clientWidth;
      const per = cw < 520 ? 1.15 : cw < 900 ? 2 : 3;
      const w = (cw - gap*(Math.ceil(per)-1)) / per;
      [...track.children].forEach(c=>{ c.style.flex = `0 0 ${w}px`; });
    };
    sizeCards();
    window.addEventListener('resize', sizeCards);
    const reduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if(reduced){ return ()=>window.removeEventListener('resize', sizeCards); }
    let offset = 0, raf;
    const speed = 0.9;
    const step = (ts)=>{
      {
        offset -= speed;
        const first = track.firstElementChild;
        if(first){
          const w = first.getBoundingClientRect().width + gap;
          if(-offset >= w){ offset += w; track.appendChild(first); }
        }
        track.style.transform = `translateX(${offset}px)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', sizeCards); };
  },[]);
  return (
    <div className="team-carousel rv rv-2">
      <div className="team-track" ref={trackRef}>
        {TEAM.map((m,i)=>(
          <div className="member" key={m.id}>
            <div className="ph">
              <span className="disc">{m.disc}</span>
              <img src={(window.STEMPLE_IMG&&window.STEMPLE_IMG[m.id])||`assets/slot-${m.id}.webp?v=2`} alt={m.nm} draggable="false" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',pointerEvents:'none',userSelect:'none'}}/>
            </div>
            <div className="meta">
              <div className="nm">{m.nm}</div>
              <div className="rl">{m.rl}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Voices, Values, Team });
