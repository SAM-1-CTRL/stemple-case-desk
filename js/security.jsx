/* Security — zero-knowledge pillars */
const PILLARS = [
  { i:'01', h:'Zero-Knowledge Architecture', p:'Absolute privilege, mathematically enforced by end-to-end encryption. We cannot read your files — and neither can anyone else.', status:'Enforced', ok:true },
  { i:'02', h:'DPDP Act 2023 Compliant', p:'Built to mathematically insulate Indian law firms from cloud breaches, under the Digital Personal Data Protection Act.', status:'Compliant', ok:true },
  { i:'03', h:'Offline-First Capabilities', p:'Work seamlessly in shielded courtrooms with edge databases that sync the moment a connection returns.', status:'Live', ok:true },
  { i:'04', h:'GDPR Compliance', p:'Extending the same zero-knowledge guarantees to European data-residency requirements.', status:'Under process', ok:false },
];

function Security(){
  return (
    <section className="section security" id="security">
      <div className="sec-word" data-parallax="0.06" aria-hidden="true">SECURE</div>
      <div className="wrap">
        <div className="sec-top">
          <div>
            <div className="rv"><span className="eyebrow">Security Posture</span></div>
            <h2 className="rv rv-2" style={{marginTop:24}}>Privilege enforced by the immutable laws of mathematics.</h2>
          </div>
          <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
            <div className="badge rv rv-3"><span className="v">#1</span><span className="l">In terms of Security</span></div>
            <div className="badge rv rv-4"><span className="v">7</span><span className="l">Integrated Modules</span></div>
          </div>
        </div>
        <div className="sec-grid">
          {PILLARS.map((p,i)=>(
            <div className={`pillar rv rv-${(i%2)+2}`} key={i} data-cursor>
              <span className="idx">{p.i}</span>
              <h3>{p.h}</h3>
              <p>{p.p}</p>
              <span className={`status ${p.ok?'':'pending'}`}><span className="d"></span>{p.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Security });
