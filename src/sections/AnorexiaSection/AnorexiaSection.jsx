import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './AnorexiaSection.css';

export default function AnorexiaSection() {
  const { currentSection } = useScroll();
  const { t } = useLang();
  const a = t.anorexia;
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const isActive = currentSection === 3;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (isActive) {
      const tl = gsap.timeline();
      tl.set(section, { opacity: 1, pointerEvents: 'auto' })
        .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        .fromTo(cardRef.current,
          { opacity: 0, y: 70 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(cardRef.current.querySelectorAll('.anorexia__point'),
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' },
          '-=0.4'
        );
    } else {
      gsap.set(section, { opacity: 0, pointerEvents: 'none' });
    }
  }, [isActive]);

  return (
    <SectionWrapper ref={sectionRef} id="section-anorexia" bgImage="/images/dark_landscape.png" theme="dark">
      <div className="anorexia__inner">
        <div ref={titleRef} className="anorexia__eyebrow-wrap">
          <span className="text-eyebrow">{a.eyebrow}</span>
          <h2 className="text-display-lg anorexia__heading">
            {a.heading1} <br /><em>{a.heading2}</em>
          </h2>
        </div>

        <div ref={cardRef} className="glass-card anorexia__card">
          <p className="text-body-lg anorexia__definition">{a.definition}</p>
          <div className="divider divider--teal" style={{ margin: 'var(--space-6) 0' }} />
          <ul className="anorexia__points">
            {a.points.map((pt, i) => (
              <li key={i} className="anorexia__point">
                <span className="anorexia__point-icon">◆</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <div className="anorexia__alert">
            <span className="badge badge--crimson">{a.alertBadge}</span>
            <span className="anorexia__alert-text">{a.alertText}</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
