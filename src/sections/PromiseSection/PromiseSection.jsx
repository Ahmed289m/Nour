import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './PromiseSection.css';

export default function PromiseSection() {
  const { currentSection } = useScroll();
  const { t } = useLang();
  const p = t.promise;
  const whatsappUrl = 'https://wa.me/201105221901';
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const sparklesRef = useRef([]);
  const isActive = currentSection === 9;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (isActive) {
      const tl = gsap.timeline();
      tl.set(section, { opacity: 1, pointerEvents: 'auto' })
        .fromTo(bgRef.current,
          { opacity: 0.95 },
          { opacity: 0.35, duration: 1.5, ease: 'power2.out' }
        )
        .fromTo(Array.from(contentRef.current.children),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' },
          '-=0.8'
        );

      sparklesRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 0.6 + i * 0.18, ease: 'back.out(2)', yoyo: true, repeat: -1, repeatDelay: 1.5 + i * 0.2 }
        );
      });
    } else {
      gsap.set(section, { opacity: 0, pointerEvents: 'none' });
    }
  }, [isActive]);

  return (
    <SectionWrapper ref={sectionRef} id="section-promise" bgImage="/images/dawn_sunrise.png" theme="warm">
      <div ref={bgRef} className="promise__overlay" />

      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          ref={el => sparklesRef.current[i] = el}
          className="promise__sparkle"
          style={{ top: `${15 + i * 12}%`, left: `${8 + i * 14}%`, opacity: 0 }}
        >✦</span>
      ))}

      <div ref={contentRef} className="promise__inner">
        <span className="text-eyebrow-amber">{p.eyebrow}</span>
        <h2 className="text-display-xl promise__title">
          {p.title} <br /><em>{p.titleEm}</em>
        </h2>
        <p className="text-body-lg promise__subtitle">{p.subtitle}</p>

        <div className="promise__commitments">
          {p.commitments.map((c, i) => (
            <div key={i} className="promise__commitment">
              <span className="promise__ci">{c.icon}</span>
              <span className="promise__ct">{c.text}</span>
            </div>
          ))}
        </div>

        <div className="promise__actions">
          <a id="promise-find-help-btn" className="btn btn--amber" href={whatsappUrl} target="_blank" rel="noreferrer">
            {p.cta1}
          </a>
          <a id="promise-learn-btn" className="btn btn--amber-outline" href={whatsappUrl} target="_blank" rel="noreferrer">
            {p.cta2}
          </a>
        </div>

        <footer className="promise__footer">
          <span className="promise__footer-logo">{p.footerLogo}</span>
          <span className="promise__footer-tagline">{p.footerTagline}</span>
        </footer>
      </div>
    </SectionWrapper>
  );
}
