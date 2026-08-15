/* Book a Secure Demo */
function DemoCTA(){
  const [sent, setSent] = React.useState(false);
  const [f, setF] = React.useState({name:'',firm:'',email:'',interest:'',city:''});
  const up = k => e => setF(s=>({...s,[k]:e.target.value}));
  React.useEffect(()=>{
    const h = (e)=>{ const city=e.detail&&e.detail.city; if(city) setF(s=>({...s,city})); };
    window.addEventListener('demo-prefill', h);
    return ()=>window.removeEventListener('demo-prefill', h);
  },[]);
  return (
    <section className="section cta" id="demo">
      <div className="bg"><img src="assets/cta-surveillance.jpg" alt="" draggable="false" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>
      <div className="wrap cta-inner">
        <div>
          <div className="rv"><span className="eyebrow" style={{color:'var(--color-orange)'}}>Book a Secure Demo</span></div>
          <h2 className="rv rv-2">Start your<br/>secure practice.</h2>
          <p className="cta-sub rv rv-3">See the Case Desk run against a live matter. We'll walk your firm through the zero-knowledge vault, citation checks and billing capture in under thirty minutes.</p>
          <div className="contactline rv rv-4">
            <span>Security posture&nbsp; <b>Zero-knowledge</b></span>
            <span>Response&nbsp; <b>Within 1 business day</b></span>
            <span>Based in&nbsp; <b>India</b></span>
          </div>
        </div>
        <div className="demo-card rv rv-3">
          {sent ? (
            <div className="demo-ok">
              <div className="ck">✓</div>
              <div className="hl" style={{fontSize:24,marginBottom:10}}>Thanks, we received your submission.</div>
              <p style={{color:'rgba(255,255,255,.55)',fontSize:14}}>A member of our team will reach out to schedule your secure walkthrough.</p>
            </div>
          ) : (
            <form onSubmit={e=>{e.preventDefault();setSent(true);}}>
              <div className="field"><label>Full name</label><input required value={f.name} onChange={up('name')} placeholder="Adv. Priya Nair"/></div>
              <div className="field"><label>Firm / Organisation</label><input required value={f.firm} onChange={up('firm')} placeholder="Nair & Associates"/></div>
              <div className="field"><label>Work email</label><input type="email" required value={f.email} onChange={up('email')} placeholder="priya@firm.in"/></div>
              <div className="field"><label>City</label>
                <select value={f.city} onChange={up('city')}>
                  <option value="">Select your city</option>
                  <option>Mumbai</option><option>Pune</option><option>Delhi-NCR</option>
                  <option>Bengaluru</option><option>Hyderabad</option><option>Ahmedabad</option>
                  <option>Chennai</option><option>Kolkata</option><option>Chandigarh</option><option>Other</option>
                </select>
              </div>
              <div className="field"><label>Primary interest</label>
                <select required value={f.interest} onChange={up('interest')}>
                  <option value="" disabled>Select primary interest</option>
                  <option>Case Management</option>
                  <option>AI-Based Drafting Analysis &amp; Review</option>
                  <option>Contract Lifecycle Management</option>
                  <option>IP Management</option>
                </select>
              </div>
              <button className="submit" type="submit">Request Secure Demo →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { DemoCTA });
