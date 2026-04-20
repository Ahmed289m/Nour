import { useLang } from '../../context/LanguageContext';
import './LanguageToggle.css';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();
  const isAr = lang === 'ar';

  return (
    <button
      id="lang-toggle-btn"
      className="lang-toggle"
      onClick={toggleLang}
      title={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
      aria-label={isAr ? 'Switch to English' : 'Switch to Arabic'}
    >
      <span className={`lang-toggle__option ${!isAr ? 'lang-toggle__option--active' : ''}`}>EN</span>
      <div className="lang-toggle__track">
        <div className={`lang-toggle__thumb ${isAr ? 'lang-toggle__thumb--right' : ''}`} />
      </div>
      <span className={`lang-toggle__option ${isAr ? 'lang-toggle__option--active' : ''}`}>ع</span>
    </button>
  );
}
