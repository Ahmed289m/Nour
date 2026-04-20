import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './SymptomsSection.css';

function SymptomItem({ icon, text, delay, isActive, dir }) {
  const itemRef = useRef(null);
  useEffect(() => {
    if (!itemRef.current) return;
    if (isActive) {
      gsap.fromTo(itemRef.current,
        { opacity: 0, x: dir === 'left' ? -30 : 30 },
        { opacity: 1, x: 0, duration: 0.6, delay, ease: 'power2.out' }
      );
    } else {
      gsap.set(itemRef.current, { opacity: 0 });
    }
  }, [isActive, delay, dir]);

  return (
    <li ref={itemRef} className="sym__item">
      <span className="sym__icon">{icon}</span>
      <span className="sym__text">{text}</span>
    </li>
  );
}

export default function SymptomsSection() {
  const { currentSection } = useScroll();
  const { t } = useLang();
  const s = t.symptoms;
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const dividerRef = useRef(null);
  const isActive = currentSection === 4;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (isActive) {
      const tl = gsap.timeline();
      tl.set(section, { opacity: 1, pointerEvents: 'auto' })
        .fromTo(headerRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })
        .fromTo(dividerRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power2.inOut' }, '-=0.2');
    } else {
      gsap.set(section, { opacity: 0, pointerEvents: 'none' });
    }
  }, [isActive]);

  return (
    <SectionWrapper ref={sectionRef} id="section-symptoms" theme="dark">
      <div className="sym__inner">
        <div ref={headerRef} className="sym__header">
          <span className="text-eyebrow">{s.eyebrow}</span>
          <h2 className="text-display-md sym__title">{s.title} <em>{s.titleEm}</em></h2>
        </div>

        <div className="sym__columns">
          <div className="sym__column">
            <div className="sym__col-label"><span className="badge badge--crimson">{s.physicalLabel}</span></div>
            <ul className="sym__list">
              {s.physical.map((item, i) => (
                <SymptomItem key={i} {...item} delay={0.15 + i * 0.08} isActive={isActive} dir="left" />
              ))}
            </ul>
          </div>

          <div ref={dividerRef} className="sym__divider-col">
            <div className="sym__pulse-line" />
          </div>

          <div className="sym__column">
            <div className="sym__col-label"><span className="badge badge--amber">{s.behavioralLabel}</span></div>
            <ul className="sym__list">
              {s.behavioral.map((item, i) => (
                <SymptomItem key={i} {...item} delay={0.15 + i * 0.08} isActive={isActive} dir="right" />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
