import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './TreatmentSection.css';

export default function TreatmentSection() {
  const { currentSection } = useScroll();
  const { t } = useLang();
  const tr = t.treatment;
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const footerRef = useRef(null);
  const isActive = currentSection === 8;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (isActive) {
      const tl = gsap.timeline();
      tl.set(section, { opacity: 1, pointerEvents: 'auto' })
        .fromTo(Array.from(headerRef.current.children),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out' }
        )
        .fromTo(Array.from(cardsRef.current.children),
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(footerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        );
    } else {
      gsap.set(section, { opacity: 0, pointerEvents: 'none' });
    }
  }, [isActive]);

  return (
    <SectionWrapper ref={sectionRef} id="section-treatment" theme="dark">
      <div className="treat__inner">
        <div ref={headerRef} className="treat__header">
          <span className="text-eyebrow">{tr.eyebrow}</span>
          <h2 className="text-display-md treat__title">{tr.title} <em>{tr.titleEm}</em></h2>
          <p className="text-body-lg treat__subtitle">{tr.subtitle}</p>
        </div>

        <div ref={cardsRef} className="treat__cards">
          {tr.items.map((item, i) => (
            <div key={i} className="treatment-card treat__card">
              <span className="treatment-card__icon">{item.icon}</span>
              <div className="treatment-card__title">{item.title}</div>
              <div className="treatment-card__desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <div ref={footerRef} className="treat__footer">
          <div className="treat__hope-banner">
            <span className="treat__hope-icon">✦</span>
            <p className="treat__hope-text">{tr.hopeBanner}</p>
            <span className="treat__hope-icon">✦</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
