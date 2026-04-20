import './NavigationDots.css';
import { useScroll } from '../../context/ScrollContext';
import { useLang } from '../../context/LanguageContext';

export default function NavigationDots() {
  const { currentSection, goToSection, totalSections } = useScroll();
  const { t } = useLang();
  const labels = Object.values(t.nav);

  return (
    <nav className="nav-dots" aria-label="Section navigation">
      {Array.from({ length: totalSections }).map((_, i) => (
        <button
          key={i}
          id={`nav-dot-${i}`}
          className={`nav-dots__dot ${currentSection === i ? 'nav-dots__dot--active' : ''}`}
          onClick={() => goToSection(i)}
          aria-label={`Go to: ${labels[i]}`}
          title={labels[i]}
        >
          <span className="nav-dots__label">{labels[i]}</span>
        </button>
      ))}
    </nav>
  );
}
