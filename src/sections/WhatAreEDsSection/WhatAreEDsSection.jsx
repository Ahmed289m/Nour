import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './WhatAreEDsSection.css';

export default function WhatAreEDsSection() {
  const { currentSection } = useScroll();
  const { t } = useLang();
  const w = t.whatEDs;
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isActive = currentSection === 2;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (isActive) {
      const tl = gsap.timeline();
      tl.set(section, { opacity: 1, pointerEvents: 'auto' })
        .fromTo(imageRef.current,
          { opacity: 0, x: -60, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' }
        )
        .fromTo(Array.from(textRef.current.children),
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' },
          '-=0.6'
        );
    } else {
      gsap.set(section, { opacity: 0, pointerEvents: 'none' });
    }
  }, [isActive]);

  return (
    <SectionWrapper ref={sectionRef} id="section-what-are-eds" theme="dark">
      <div className="whats__inner">
        <div ref={imageRef} className="whats__image-col">
          <div className="whats__image-frame">
            <img src="/images/portrait_mood.png" alt="Person reflecting" className="whats__image" />
            <div className="whats__image-caption">
              <span className="text-eyebrow">{w.captionLeft}</span>
              <span className="text-eyebrow" style={{ marginInlineStart: 'auto', color: 'var(--color-text-dim)' }}>{w.captionRight}</span>
            </div>
          </div>
        </div>

        <div ref={textRef} className="whats__text-col">
          <span className="text-eyebrow">{w.eyebrow}</span>
          <h2 className="text-display-md whats__title">{w.title}</h2>
          <p className="text-body-lg whats__body">{w.body}</p>
          <p className="text-body whats__body-sub">{w.bodySub}</p>
          <div className="whats__types">
            {w.types.map((type, i) => (
              <span key={i} className="badge badge--teal">{type}</span>
            ))}
          </div>
          <div className="whats__quote">
            <span className="whats__quote-text">{w.quote}</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
