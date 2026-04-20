import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './SupportSection.css';

export default function SupportSection() {
  const { currentSection } = useScroll();
  const { t } = useLang();
  const s = t.support;
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const isActive = currentSection === 6;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (isActive) {
      const tl = gsap.timeline();
      tl.set(section, { opacity: 1, pointerEvents: 'auto' })
        .fromTo(overlayRef.current,
          { opacity: 0.95 },
          { opacity: 0.45, duration: 1.2, ease: 'power2.out' }
        )
        .fromTo(Array.from(contentRef.current.children),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        );
    } else {
      gsap.set(section, { opacity: 0, pointerEvents: 'none' });
    }
  }, [isActive]);

  return (
    <SectionWrapper ref={sectionRef} id="section-support" bgImage="/images/warm_forest.png" theme="warm">
      <div ref={overlayRef} className="support__extra-overlay" />
      <div ref={contentRef} className="support__inner">
        <span className="text-eyebrow-amber">{s.eyebrow}</span>
        <h2 className="text-display-lg support__title">{s.title} <em>{s.titleEm}</em></h2>
        <p className="text-body-lg support__subtitle">{s.subtitle}</p>
        <div className="support__cards">
          {s.pillars.map((p, i) => (
            <div key={i} className="support-card support__card">
              <span className="support__card-icon">{p.icon}</span>
              <div className="support__card-title">{p.title}</div>
              <div className="support__card-desc">{p.desc}</div>
            </div>
          ))}
        </div>
        <p className="support__quote">{s.quote}</p>
      </div>
    </SectionWrapper>
  );
}
