import { createContext, useContext, useState, useRef, useCallback } from 'react';

const TOTAL_SECTIONS = 10;

export const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState('down');
  const isTransitioning = useRef(false);
  // Mirror of currentSection in a ref so callbacks always see the latest value
  const currentSectionRef = useRef(0);

  const goToSection = useCallback((index) => {
    if (isTransitioning.current) return;
    if (index < 0 || index >= TOTAL_SECTIONS) return;
    if (index === currentSectionRef.current) return;

    const dir = index > currentSectionRef.current ? 'down' : 'up';
    setDirection(dir);
    currentSectionRef.current = index;
    setCurrentSection(index);

    isTransitioning.current = true;
    setTimeout(() => {
      isTransitioning.current = false;
    }, 1100);
  }, []);

  const goNext = useCallback(() => {
    if (isTransitioning.current) return;
    const next = currentSectionRef.current + 1;
    if (next >= TOTAL_SECTIONS) return;
    setDirection('down');
    currentSectionRef.current = next;
    setCurrentSection(next);
    isTransitioning.current = true;
    setTimeout(() => { isTransitioning.current = false; }, 1100);
  }, []);

  const goPrev = useCallback(() => {
    if (isTransitioning.current) return;
    const prev = currentSectionRef.current - 1;
    if (prev < 0) return;
    setDirection('up');
    currentSectionRef.current = prev;
    setCurrentSection(prev);
    isTransitioning.current = true;
    setTimeout(() => { isTransitioning.current = false; }, 1100);
  }, []);

  return (
    <ScrollContext.Provider value={{
      currentSection,
      direction,
      totalSections: TOTAL_SECTIONS,
      goToSection,
      goNext,
      goPrev,
      isTransitioning,
      currentSectionRef,
    }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error('useScroll must be used within ScrollProvider');
  return ctx;
}
