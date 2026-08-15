/* @ds-bundle: {"format":4,"namespace":"StempleDesignSystem_8b712a","components":[{"name":"Button","sourcePath":"components/button/Button.jsx"},{"name":"CTASection","sourcePath":"components/cta-section/CTASection.jsx"},{"name":"FeatureBlock","sourcePath":"components/feature-block/FeatureBlock.jsx"},{"name":"FooterSection","sourcePath":"components/footer-section/FooterSection.jsx"},{"name":"HeroSection","sourcePath":"components/hero-section/HeroSection.jsx"},{"name":"MetaLabel","sourcePath":"components/meta-label/MetaLabel.jsx"},{"name":"NavBar","sourcePath":"components/nav/NavBar.jsx"},{"name":"ProductCard","sourcePath":"components/product-card/ProductCard.jsx"},{"name":"QuoteBlock","sourcePath":"components/quote/QuoteBlock.jsx"},{"name":"SectionLabel","sourcePath":"components/section-label/SectionLabel.jsx"},{"name":"SideTab","sourcePath":"components/side-tab/SideTab.jsx"},{"name":"StatementBlock","sourcePath":"components/statement-block/StatementBlock.jsx"},{"name":"StatsPanel","sourcePath":"components/stats/StatsPanel.jsx"},{"name":"WatchButton","sourcePath":"components/watch-button/WatchButton.jsx"}],"sourceHashes":{"components/button/Button.jsx":"76dee6f29165","components/cta-section/CTASection.jsx":"dc2f078566da","components/feature-block/FeatureBlock.jsx":"c21fa6870123","components/footer-section/FooterSection.jsx":"1ab4fe3f2449","components/hero-section/HeroSection.jsx":"80dd20ddbecc","components/meta-label/MetaLabel.jsx":"67342c1e73f2","components/nav/NavBar.jsx":"ec7a1552b9c8","components/product-card/ProductCard.jsx":"f1c62ac72cc8","components/quote/QuoteBlock.jsx":"fe003bb8c613","components/section-label/SectionLabel.jsx":"1f39aaee1302","components/side-tab/SideTab.jsx":"3e98dacbcf13","components/statement-block/StatementBlock.jsx":"fa91fe4bf6a0","components/stats/StatsPanel.jsx":"6acc1df9f77a","components/watch-button/WatchButton.jsx":"6e70a91e92fd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StempleDesignSystem_8b712a = window.StempleDesignSystem_8b712a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/button/Button.jsx
try { (() => {
function Button({
  label = 'Get Started',
  href = '#',
  variant = 'ghost',
  icon,
  size = 'md'
}) {
  const sz = {
    sm: {
      padding: '8px 24px',
      fontSize: 13
    },
    md: {
      padding: '13px 38px',
      fontSize: 15.1
    },
    lg: {
      padding: '18px 54px',
      fontSize: 17
    }
  }[size] || {};
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: "'Roboto',sans-serif",
    fontWeight: 400,
    letterSpacing: '.04em',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background .2s, border-color .2s',
    ...sz
  };
  const variants = {
    primary: {
      background: '#FF7E15',
      border: '1px solid #FF7E15',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,.4)',
      color: '#fff'
    },
    'ghost-dark': {
      background: 'transparent',
      border: '1px solid rgba(31,42,68,.35)',
      color: '#1F2A44'
    },
    orange: {
      background: '#FF7E15',
      border: '1px solid #FF7E15',
      color: '#fff'
    }
  };
  const [hovered, setHovered] = React.useState(false);
  const hoverMap = {
    primary: {
      background: '#e86d08',
      borderColor: '#e86d08'
    },
    ghost: {
      background: 'rgba(255,255,255,.08)',
      borderColor: 'rgba(255,255,255,.85)'
    },
    'ghost-dark': {
      background: 'rgba(31,42,68,.05)',
      borderColor: 'rgba(31,42,68,.7)'
    },
    orange: {
      background: '#e86d08',
      borderColor: '#e86d08'
    }
  };
  const style = {
    ...base,
    ...(variants[variant] || variants.ghost),
    ...(hovered ? hoverMap[variant] : {})
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: style,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, label, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8em'
    }
  }, icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/cta-section/CTASection.jsx
try { (() => {
function CTASection({
  title = 'START YOUR LEGAL TRANSFORMATION',
  buttonLabel = 'Request a Demo',
  buttonHref = '#',
  backgroundSrc
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '60vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, backgroundSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '-20%',
      bottom: '-20%',
      background: `url(${backgroundSrc}) center/cover no-repeat`
    }
  }), !backgroundSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#1F2A44'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(9,11,16,.32)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      padding: '60px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Oswald',sans-serif",
      fontSize: 'clamp(40px,6vw,90px)',
      fontWeight: 400,
      color: '#fff',
      letterSpacing: '-.01em',
      lineHeight: .95,
      marginBottom: 48
    }
  }, title), /*#__PURE__*/React.createElement("a", {
    href: buttonHref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '16px 54px',
      border: '1px solid ' + (hovered ? '#fff' : 'rgba(255,255,255,.55)'),
      fontFamily: "'Roboto',sans-serif",
      fontSize: 15,
      letterSpacing: '.06em',
      color: '#fff',
      background: hovered ? 'rgba(255,255,255,.1)' : 'transparent',
      transition: 'background .2s,border-color .2s',
      textDecoration: 'none'
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, buttonLabel)));
}
Object.assign(__ds_scope, { CTASection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cta-section/CTASection.jsx", error: String((e && e.message) || e) }); }

// components/feature-block/FeatureBlock.jsx
try { (() => {
function FeatureBlock({
  label = 'OUR PRODUCTS',
  description = 'Enterprise-grade signing for the most demanding legal operations.',
  imageSrc,
  floatCardTitle = 'ENTERPRISE GRADE',
  floatCardBody = 'Advanced cryptographic signing, tamper-proof audit logs, and 99.99% uptime.',
  layout = 'label-left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 600,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '-30%',
      bottom: '-30%',
      background: imageSrc ? `url(${imageSrc}) center/cover no-repeat` : '#1F2A44',
      willChange: 'transform'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(9,11,16,.3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      top: '50%',
      transform: 'translateY(-50%)',
      fontFamily: "'Oswald',sans-serif",
      fontSize: 'clamp(60px,11vw,200px)',
      fontWeight: 400,
      color: '#fff',
      lineHeight: .85,
      letterSpacing: '-.01em',
      zIndex: 2
    }
  }, label.split('\n').map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 60,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(9,11,16,.72)',
      backdropFilter: 'blur(10px)',
      padding: 44,
      maxWidth: 320,
      border: '1px solid rgba(255,255,255,.1)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Oswald',sans-serif",
      fontSize: 19.5,
      fontWeight: 500,
      letterSpacing: '.12em',
      color: '#fff',
      marginBottom: 18
    }
  }, floatCardTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Roboto',sans-serif",
      fontSize: 15,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.8)'
    }
  }, floatCardBody)));
}
Object.assign(__ds_scope, { FeatureBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feature-block/FeatureBlock.jsx", error: String((e && e.message) || e) }); }

// components/footer-section/FooterSection.jsx
try { (() => {
function FooterSection({
  brandName = 'STEMPLE',
  logoSrc,
  columns = [],
  quote = '"A signature is the most personal commitment in law." – Sir Edward Coke',
  copyright = 'Stemple©2026. All rights reserved.'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#F3F1EC',
      color: '#1F2A44',
      padding: '80px 60px 0',
      fontFamily: "'Roboto',sans-serif"
    }
  }, logoSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 60
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: brandName,
    style: {
      height: 28,
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: columns.map(() => '1fr').join(' '),
      gap: 48,
      paddingBottom: 80,
      borderBottom: '1px solid rgba(31,42,68,.12)'
    }
  }, columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, col.heading && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontStyle: 'italic',
      fontSize: 15,
      color: '#1F2A44',
      marginBottom: 20
    }
  }, col.heading), (col.links || []).map((l, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: l.href || '#',
    style: {
      display: 'block',
      fontSize: 15,
      color: '#535353',
      marginBottom: 9,
      textDecoration: 'none'
    }
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Oswald',sans-serif",
      fontSize: 'clamp(80px,16vw,300px)',
      fontWeight: 400,
      color: '#1F2A44',
      lineHeight: .82,
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap',
      padding: '40px 0 0',
      margin: '0 -60px',
      paddingLeft: 60
    }
  }, brandName), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 0 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontStyle: 'italic',
      fontSize: 13,
      color: '#535353'
    }
  }, quote), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: '#535353'
    }
  }, copyright)));
}
Object.assign(__ds_scope, { FooterSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/footer-section/FooterSection.jsx", error: String((e && e.message) || e) }); }

// components/hero-section/HeroSection.jsx
try { (() => {
function HeroSection({
  title = 'STEMPLE',
  subtitle = 'Precision and trust\nin every legal moment',
  watchLabel = 'Watch Demo',
  backgroundSrc,
  onWatch
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 600,
      overflow: 'hidden',
      background: '#090B10'
    }
  }, backgroundSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '-30%',
      bottom: '-30%',
      background: `url(${backgroundSrc}) center/cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(9,11,16,.45) 0%,rgba(9,11,16,.05) 40%,rgba(9,11,16,.6) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      top: '32%',
      fontFamily: "'Inter',sans-serif",
      fontStyle: 'italic',
      fontSize: 15,
      lineHeight: 1.55,
      color: '#fff',
      maxWidth: 200,
      zIndex: 2,
      whiteSpace: 'pre-line'
    }
  }, subtitle), /*#__PURE__*/React.createElement("button", {
    onClick: onWatch,
    style: {
      position: 'absolute',
      right: 60,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: "'Roboto',sans-serif",
      fontSize: 15.1,
      color: '#fff',
      border: '1px solid rgba(255,255,255,.3)',
      padding: '11px 30px',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'border-color .2s',
      zIndex: 2
    }
  }, watchLabel, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, "▶")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-0.06em',
      left: 0,
      right: 0,
      fontFamily: "'Oswald',sans-serif",
      fontSize: 'clamp(100px,17vw,320px)',
      fontWeight: 400,
      color: '#fff',
      textAlign: 'center',
      lineHeight: .85,
      letterSpacing: '-.01em',
      zIndex: 2,
      userSelect: 'none',
      pointerEvents: 'none'
    }
  }, title));
}
Object.assign(__ds_scope, { HeroSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero-section/HeroSection.jsx", error: String((e && e.message) || e) }); }

// components/meta-label/MetaLabel.jsx
try { (() => {
function MetaLabel({
  text = '[ STEMPLE-SIGN ]',
  variant = 'code',
  color
}) {
  const styles = {
    code: {
      fontFamily: "'Inter',sans-serif",
      fontSize: 12,
      fontWeight: 300,
      letterSpacing: '.15em',
      color: color || '#FF7E15',
      textTransform: 'uppercase'
    },
    attr: {
      fontFamily: "'Roboto',sans-serif",
      fontSize: 11.5,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: color || 'rgba(255,255,255,.65)'
    },
    coord: {
      fontFamily: "'Roboto',sans-serif",
      fontSize: 11,
      letterSpacing: '.06em',
      color: color || 'rgba(255,255,255,.35)'
    },
    eyebrow: {
      fontFamily: "'Oswald',sans-serif",
      fontSize: 19.5,
      fontWeight: 500,
      letterSpacing: '.12em',
      color: color || '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: styles[variant] || styles.code
  }, text);
}
Object.assign(__ds_scope, { MetaLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/meta-label/MetaLabel.jsx", error: String((e && e.message) || e) }); }

// components/nav/NavBar.jsx
try { (() => {
function NavBar({
  links = [{
    label: 'Products',
    href: '#'
  }, {
    label: 'Solutions',
    href: '#'
  }, {
    label: 'About',
    href: '#'
  }],
  ctaLinks = [{
    label: 'Pricing',
    href: '#'
  }, {
    label: 'Get Started',
    href: '#'
  }],
  logoSrc,
  logoText = 'STEMPLE',
  dark = false
}) {
  const [scrolled, setScrolled] = React.useState(dark);
  React.useEffect(() => {
    const onScroll = () => setScrolled(dark || window.scrollY > 40);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [dark]);
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'stretch',
    transition: 'background .3s',
    background: scrolled ? 'rgba(9,11,16,.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none'
  };
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0 28px',
    height: 52,
    fontFamily: "'Roboto',sans-serif",
    fontSize: 15.2,
    color: '#fff',
    letterSpacing: '.3px',
    border: '1px solid transparent',
    transition: 'border-color .2s',
    textDecoration: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: navStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    style: linkStyle,
    onMouseEnter: e => e.currentTarget.style.borderColor = 'rgba(255,255,255,.35)',
    onMouseLeave: e => e.currentTarget.style.borderColor = 'transparent'
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: logoText,
    style: {
      height: 26,
      borderRadius: 4,
      background: '#F3F1EC',
      padding: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Oswald',sans-serif",
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '.35em',
      color: '#fff'
    }
  }, logoText))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch'
    }
  }, ctaLinks.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    style: {
      ...linkStyle,
      borderColor: 'rgba(255,255,255,.22)',
      background: i === ctaLinks.length - 1 ? 'rgba(255,255,255,.08)' : 'transparent'
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = 'rgba(255,255,255,.6)',
    onMouseLeave: e => e.currentTarget.style.borderColor = 'rgba(255,255,255,.22)'
  }, l.label))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/product-card/ProductCard.jsx
try { (() => {
function ProductCard({
  name = 'E-SIGN',
  description = 'Legally binding electronic signatures accepted in 178 countries.',
  code = 'STEMPLE-SIGN',
  imageSrc,
  href = '#'
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      position: 'relative',
      display: 'block',
      overflow: 'hidden',
      aspectRatio: '3/4',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, imageSrc && /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform .6s ease',
      transform: hovered ? 'scale(1.04)' : 'scale(1)',
      display: 'block'
    }
  }), !imageSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#1F2A44'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(9,11,16,.85) 0%, rgba(9,11,16,.1) 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Oswald',sans-serif",
      fontSize: 'clamp(40px,5vw,80px)',
      fontWeight: 400,
      color: '#fff',
      lineHeight: .9,
      letterSpacing: '-.01em',
      marginBottom: 16
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Roboto',sans-serif",
      fontSize: 15,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.85)',
      maxWidth: 340
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: 12,
      fontWeight: 300,
      letterSpacing: '.15em',
      color: '#FF7E15',
      marginTop: 16,
      textTransform: 'uppercase'
    }
  }, "[ ", code, " ]")));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product-card/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/quote/QuoteBlock.jsx
try { (() => {
function QuoteBlock({
  source = 'Legal 500',
  quote = '...the most rigorous, elegant signature platform in the market.',
  attribution = '— ELEANOR WATTS, PARTNER',
  backgroundSrc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, backgroundSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-20% 0',
      background: `url(${backgroundSrc}) center/cover no-repeat`,
      willChange: 'transform'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(9,11,16,.45)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      padding: '60px',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Roboto',sans-serif",
      fontSize: 19.5,
      fontWeight: 400,
      letterSpacing: '.08em',
      color: '#fff',
      marginBottom: 48,
      opacity: .9
    }
  }, source), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: 60,
      color: '#fff',
      opacity: .55,
      lineHeight: 1,
      marginBottom: 16
    }
  }, "\""), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'clamp(18px,2.5vw,32px)',
      lineHeight: 1.25,
      color: '#fff',
      marginBottom: 36
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Roboto',sans-serif",
      fontSize: 12,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: '#fff',
      opacity: .65
    }
  }, attribution)));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quote/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/section-label/SectionLabel.jsx
try { (() => {
function SectionLabel({
  text = 'STEMPLE',
  size = 'hero',
  color = '#fff',
  opacity = 1
}) {
  const sizes = {
    hero: 'clamp(100px,17vw,320px)',
    section: 'clamp(60px,11vw,200px)',
    bg: 'clamp(80px,14vw,240px)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Oswald',sans-serif",
      fontSize: sizes[size] || sizes.section,
      fontWeight: 400,
      color,
      opacity,
      lineHeight: .85,
      letterSpacing: '-.01em',
      userSelect: 'none'
    }
  }, text.split('\n').map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l)));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/section-label/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/side-tab/SideTab.jsx
try { (() => {
function SideTab({
  label = 'Schedule Demo',
  href = '#demo'
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      position: 'fixed',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      background: '#FF7E15',
      color: '#fff',
      zIndex: 900,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: hovered ? '18px 15px 14px' : '18px 11px 14px',
      gap: 12,
      textDecoration: 'none',
      transition: 'padding .2s'
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1
    }
  }, "+"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: 11,
      fontWeight: 300,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      transform: 'rotate(180deg)'
    }
  }, label));
}
Object.assign(__ds_scope, { SideTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/side-tab/SideTab.jsx", error: String((e && e.message) || e) }); }

// components/statement-block/StatementBlock.jsx
try { (() => {
function StatementBlock({
  eyebrow = 'The Platform',
  headline = 'BINDING, CERTAIN AND REMARKABLY SECURE — EVERY SIGNATURE CARRIES THE FULL WEIGHT OF LAW.',
  background = '#fff',
  textColor = '#1F2A44'
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background,
      color: textColor,
      padding: '130px 60px 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      fontFamily: "'Inter',sans-serif",
      fontStyle: 'italic',
      fontSize: 15,
      color: textColor,
      marginBottom: 70
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 44,
      height: 1,
      background: textColor,
      opacity: .2
    }
  }), eyebrow, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      flex: '0 0 80px',
      height: 1,
      background: textColor,
      opacity: .2
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'clamp(26px,4vw,54px)',
      lineHeight: 1.1,
      color: textColor,
      maxWidth: 960,
      marginLeft: 'auto'
    }
  }, headline));
}
Object.assign(__ds_scope, { StatementBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/statement-block/StatementBlock.jsx", error: String((e && e.message) || e) }); }

// components/stats/StatsPanel.jsx
try { (() => {
function StatsPanel({
  stats = [{
    label: 'Average signing time',
    value: '00:47 MIN'
  }, {
    label: 'Documents signed',
    value: '4.2M / MONTH'
  }, {
    label: 'Compliance rate',
    value: '100%'
  }]
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 440
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,.15)',
      padding: '28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontStyle: 'italic',
      fontSize: 14,
      color: 'rgba(255,255,255,.55)',
      marginBottom: 8
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Roboto',sans-serif",
      fontSize: 'clamp(24px,3vw,40px)',
      fontWeight: 400,
      color: '#fff',
      lineHeight: 1
    }
  }, s.value))));
}
Object.assign(__ds_scope, { StatsPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/stats/StatsPanel.jsx", error: String((e && e.message) || e) }); }

// components/watch-button/WatchButton.jsx
try { (() => {
function WatchButton({
  label = 'Watch Demo',
  href = '#',
  previewSrc
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, previewSrc && hovered && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 262,
      height: 148,
      borderRadius: 4.77,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: previewSrc,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.05)'
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: "'Roboto',sans-serif",
      fontSize: 15.1,
      color: '#fff',
      border: '1px solid rgba(255,255,255,.3)',
      padding: '11px 30px',
      transition: 'border-color .2s,background .2s',
      background: hovered ? 'rgba(255,255,255,.07)' : 'transparent',
      textDecoration: 'none'
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, "▶")));
}
Object.assign(__ds_scope, { WatchButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/watch-button/WatchButton.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CTASection = __ds_scope.CTASection;

__ds_ns.FeatureBlock = __ds_scope.FeatureBlock;

__ds_ns.FooterSection = __ds_scope.FooterSection;

__ds_ns.HeroSection = __ds_scope.HeroSection;

__ds_ns.MetaLabel = __ds_scope.MetaLabel;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.SideTab = __ds_scope.SideTab;

__ds_ns.StatementBlock = __ds_scope.StatementBlock;

__ds_ns.StatsPanel = __ds_scope.StatsPanel;

__ds_ns.WatchButton = __ds_scope.WatchButton;

})();
