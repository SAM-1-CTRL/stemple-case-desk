/* Book a Secure Demo */
const WEB3FORMS_ACCESS_KEY = "63dfb0ed-67e6-4111-84f1-9f4e0e544d8c";

function DemoCTA(){
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [err, setErr] = React.useState('');
  const [f, setF] = React.useState({name:'',firm:'',email:'',interest:'',city:'',hp:''});
  const up = k => e => setF(s=>({...s,[k]:e.target.value}));
  const submit = async (e) => {
    e.preventDefault();
    if (f.hp) return; // honeypot tripped, silently drop
    setSending(true);
    setErr('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Secure Demo request — Stemple CaseDesk',
          from_name: 'Stemple CaseDesk website',
          name: f.name,
          firm: f.firm,
          email: f.email,
          city: f.city,
          interest: f.interest,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setErr('Something went wrong sending your request. Please try again or email us directly.');
      }
    } catch (e2) {
      setErr('Something went wrong sending your request. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };
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
            <form onSubmit={submit}>
              <input type="text" name="hp" value={f.hp} onChange={up('hp')} tabIndex="-1" autoComplete="off" style={{position:'absolute',left:'-9999px',width:1,height:1,opacity:0}} aria-hidden="true"/>
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
              {err && <p style={{color:'#ff8080',fontSize:13,marginTop:-6,marginBottom:14}}>{err}</p>}
              <button className="submit" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Request Secure Demo →'}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { DemoCTA });
