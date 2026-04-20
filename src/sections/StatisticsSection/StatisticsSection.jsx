import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './StatisticsSection.css';

function StatCard({ value, suffix = '', label, description, delay = 0, isActive }) {
  const count = useAnimatedCounter(value, 2, isActive);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    if (isActive) {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 50, scale: 0.93 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay, ease: 'power3.out' }
      );
    } else {
      gsap.set(cardRef.current, { opacity: 0, y: 50, scale: 0.93 });
    }
  }, [isActive, delay]);

  return (
    <div ref={cardRef} className="stat-card">
      <div className="stat-card__value">{count}{suffix}</div>
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__desc">{description}</div>
    </div>
  );
}

export default function StatisticsSection() {
  const { currentSection } = useScroll();
  const { t } = useLang();
  const s = t.stats;
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isActive = currentSection === 1;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (isActive) {
      gsap.set(section, { opacity: 1, pointerEvents: 'auto' });
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    } else {
      gsap.set(section, { opacity: 0, pointerEvents: 'none' });
    }
  }, [isActive]);

  return (
    <SectionWrapper ref={sectionRef} id="section-statistics" theme="dark">
      <div className="stats__inner">
        <div ref={headingRef} className="stats__header">
          <span className="text-eyebrow">{s.eyebrow}</span>
          <h2 className="text-display-lg stats__title">
            {s.title} <em>{s.titleEm}</em>
          </h2>
        </div>
        <div className="stats__grid">
          {s.items.map((item, i) => (
            <StatCard key={i} {...item} delay={0.1 + i * 0.1} isActive={isActive} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
