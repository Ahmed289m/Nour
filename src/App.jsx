import './styles/reset.css';
import './styles/design-system.css';
import './styles/components.css';
import './styles/animations.css';
import './App.css';

import { ScrollProvider } from './context/ScrollContext';
import { LanguageProvider } from './context/LanguageContext';
import { useScrollEngine } from './hooks/useScrollEngine';
import { useScroll } from './context/ScrollContext';

import NavigationDots from './components/NavigationDots/NavigationDots';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import SoundToggle from './components/SoundToggle/SoundToggle';

import HeroSection from './sections/HeroSection/HeroSection';
import StatisticsSection from './sections/StatisticsSection/StatisticsSection';
import WhatAreEDsSection from './sections/WhatAreEDsSection/WhatAreEDsSection';
import AnorexiaSection from './sections/AnorexiaSection/AnorexiaSection';
import SymptomsSection from './sections/SymptomsSection/SymptomsSection';
import DangerSection from './sections/DangerSection/DangerSection';
import SupportSection from './sections/SupportSection/SupportSection';
import AwarenessSection from './sections/AwarenessSection/AwarenessSection';
import TreatmentSection from './sections/TreatmentSection/TreatmentSection';
import PromiseSection from './sections/PromiseSection/PromiseSection';

function AppInner() {
  useScrollEngine();
  const { currentSection, totalSections } = useScroll();
  const progress = (currentSection / (totalSections - 1)) * 100;
  const isHope = currentSection >= 6;

  return (
    <div className="app">
      {/* Top nav bar */}
      <header className="app-topbar">
        <div className="app-topbar__logo">
          <span className={`app-topbar__dot ${isHope ? 'app-topbar__dot--warm' : ''}`} />
          <span className="app-topbar__name">Nour</span>
        </div>
        <div className="app-topbar__controls">
          <SoundToggle />
          <LanguageToggle />
        </div>
      </header>

      {/* All sections stacked absolutely */}
      <div className="sections-container">
        <HeroSection />
        <StatisticsSection />
        <WhatAreEDsSection />
        <AnorexiaSection />
        <SymptomsSection />
        <DangerSection />
        <SupportSection />
        <AwarenessSection />
        <TreatmentSection />
        <PromiseSection />
      </div>

      <NavigationDots />

      {/* Bottom progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* Section counter */}
      <div className="section-counter" aria-live="polite">
        <span className="section-counter__current">{String(currentSection + 1).padStart(2, '0')}</span>
        <span className="section-counter__sep">/</span>
        <span className="section-counter__total">{String(totalSections).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ScrollProvider>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </ScrollProvider>
  );
}
