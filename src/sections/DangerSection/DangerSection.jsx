import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './DangerSection.css';

export default function DangerSection() {
  const { currentSection } = useScroll();
  const { t } = useLang();
  const d = t.danger;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const hopeRef = useRef(null);
  const isActive = currentSection === 5;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (isActive) {
      const tl = gsap.timeline();
      tl.set(section, { opacity: 1, pointerEvents: 'auto' })
        .fromTo(Array.from(titleRef.current.children),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out' }
        )
        .fromTo(Array.from(cardsRef.current.children),
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(hopeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.2'
        );
    } else {
      gsap.set(section, { opacity: 0, pointerEvents: 'none' });
    }
  }, [isActive]);

  return (
    <SectionWrapper ref={sectionRef} id="section-danger" theme="dark">
      <div className="danger__inner">
        <div ref={titleRef} className="danger__header">
          <span className="text-eyebrow-amber">{d.eyebrow}</span>
          <h2 className="text-display-lg danger__title">{d.title} <em>{d.titleEm}</em></h2>
          <p className="text-body-lg danger__subtitle">{d.subtitle}</p>
        </div>

        <div ref={cardsRef} className="danger__cards">
          {d.items.map((item, i) => (
            <div key={i} className="glass-card danger__card">
              <span className="danger__card-icon">{item.icon}</span>
              <div>
                <div className="danger__card-title">{item.title}</div>
                <div className="danger__card-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div ref={hopeRef} className="danger__hope">
          <div className="danger__hope-line" />
          <p className="danger__hope-text">
            {d.hope}<strong>{d.hopeBold}</strong><br />{d.hopeSub}
          </p>
          <div className="danger__hope-line" />
        </div>
      </div>
    </SectionWrapper>
  );
}
