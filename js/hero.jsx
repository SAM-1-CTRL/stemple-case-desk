/* Hero — luxury full-bleed, parallax + ken-burns */
const { useEffect, useRef } = React;

function Hero(){
  return (
    <header className="hero" id="top">
      <div className="hero-media" data-parallax="0.16">
        <div className="hero-ken">
          <video id="hero-video" autoPlay muted loop playsInline preload="auto"></video>
          <img src="assets/hero-mumbai.jpg" alt="" draggable="false" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
        </div>
      </div>
      <div className="hero-scrim" aria-hidden="true"></div>
      <canvas id="lattice"></canvas>
      <div className="hero-inner wrap">
        <div className="hero-eyebrow rv">The zero-knowledge command desk for India&rsquo;s law firms</div>
        <h1 className="hero-title">
          <span className="clip-rise"><span>Where Judgment</span></span>
          <span className="clip-rise cr-2"><span>Meets <em>Certainty</em>.</span></span>
        </h1>
        <div className="hero-cta rv rv-3">
          <a className="btn-ghost-lux" href="#demo">Book a Secure Demo <span>&rarr;</span></a>
          <button className="watchfilm" onClick={()=>window.StempleFilm&&window.StempleFilm.open()}>
            <span className="pl">&#9654;</span> Watch Film
          </button>
        </div>
      </div>
      <div className="hero-scroll"><span className="bar"></span>Scroll</div>
    </header>
  );
}

// small DS Button wrapper so children files can use <Btn/>
function Btn(props){ const { Button } = window.StempleDesignSystem_8b712a; return React.createElement(Button, props); }

Object.assign(window, { Hero, Btn });
