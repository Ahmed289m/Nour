import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './HeroSection.css';

export default function HeroSection() {
  const { currentSection, goNext } = useScroll();
  const { t } = useLang();
  const h = t.hero;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const logoRef = useRef(null);
  const particlesRef = useRef(null);
  const isActive = currentSection === 0;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (isActive) {
      const tl = gsap.timeline();
      tl.set(section, { opacity: 1, pointerEvents: 'auto' })
        .fromTo(logoRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        .fromTo(
          titleRef.current.querySelectorAll('.hero__title-word'),
          { opacity: 0, y: 70, rotateX: -30 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.0, stagger: 0.15, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo(subtitleRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
        .fromTo(ctaRef.current, { opacity: 0, y: 16, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3');
    } else {
      gsap.set(section, { opacity: 0, pointerEvents: 'none' });
    }
  }, [isActive]);

  // Particle canvas
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    const particles = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.3, speed: Math.random() * 0.25 + 0.08,
        opacity: Math.random() * 0.4 + 0.05, drift: (Math.random() - 0.5) * 0.15,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45,212,168,${p.opacity})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -2) { p.y = canvas.height + 2; p.x = Math.random() * canvas.width; }
      });
      animFrame = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="section-hero" bgImage="/images/hero_bg.png" theme="dark">
      <canvas ref={particlesRef} className="particles-canvas" />
      <div className="hero__inner">
        <div ref={logoRef} className="hero__logo">
          <span className="hero__logo-dot" />
          <span className="hero__logo-name">{h.logo}</span>
        </div>

        <h1 ref={titleRef} className="hero__title">
          {h.titleWords.filter(Boolean).map((word, i) => (
            <span key={i} className="hero__title-word" style={{ color: i === h.titleWords.filter(Boolean).length - 1 ? 'var(--color-teal)' : undefined }}>
              {word}
            </span>
          ))}
        </h1>

        <p ref={subtitleRef} className="hero__subtitle">{h.subtitle}</p>

        <div ref={ctaRef} className="hero__cta">
          <button id="hero-begin-btn" className="btn btn--teal anim-pulse-teal" onClick={goNext}>
            {h.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </button>
        </div>

        <div className="hero__scroll-hint">
          <span>{h.scrollHint}</span>
          <div className="hero__scroll-line" />
        </div>
      </div>
    </SectionWrapper>
  );
}
