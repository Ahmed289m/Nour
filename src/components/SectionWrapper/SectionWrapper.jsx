import { forwardRef } from 'react';
import './SectionWrapper.css';

const SectionWrapper = forwardRef(function SectionWrapper(
  { children, className = '', bgImage, theme = 'dark', id, style = {} },
  ref
) {
  return (
    <section
      ref={ref}
      id={id}
      className={`section-wrapper section-wrapper--${theme} ${className}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        ...style,
      }}
    >
      {bgImage && <div className="section-wrapper__overlay" />}
      <div className="section-wrapper__content">
        {children}
      </div>
    </section>
  );
});

export default SectionWrapper;
