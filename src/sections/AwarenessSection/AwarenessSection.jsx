import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './AwarenessSection.css';

export default function AwarenessSection() {
  const { currentSection } = useScroll();
  const { t } = useLang();
  const a = t.awareness;
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isActive = currentSection === 7;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (isActive) {
      const tl = gsap.timeline();
      tl.set(section, { opacity: 1, pointerEvents: 'auto' })
        .fromTo(Array.from(leftRef.current.children),
          { opacity: 0, filter: 'blur(8px)', y: 20 },
          { opacity: 1, filter: 'blur(0px)', y: 0, stagger: 0.15, duration: 0.8, ease: 'power2.out' }
        )
        .fromTo(Array.from(rightRef.current.children),
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out' },
          '-=0.5'
        );
    } else {
      gsap.set(section, { opacity: 0, pointerEvents: 'none' });
    }
  }, [isActive]);

  return (
    <SectionWrapper ref={sectionRef} id="section-awareness" theme="dark">
      <div className="aware__inner">
        <div ref={leftRef} className="aware__left">
          <span className="text-eyebrow">{a.eyebrow}</span>
          <h2 className="text-display-lg aware__title">{a.title} <em>{a.titleEm}</em></h2>
          <p className="text-body-lg aware__body">{a.body}</p>
          <blockquote className="aware__pull-quote">{a.pullQuote}</blockquote>
        </div>

        <div ref={rightRef} className="aware__right">
          {a.points.map((p, i) => (
            <div key={i} className="aware__point glass-card">
              <span className="aware__point-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="aware__point-text">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
