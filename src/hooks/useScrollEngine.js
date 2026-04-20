import { useEffect, useRef } from 'react';
import { useScroll } from '../context/ScrollContext';

export function useScrollEngine() {
  const { goNext, goPrev, isTransitioning } = useScroll();
  const touchStartY = useRef(null);
  const isTargetScrollable = useRef(false);

  useEffect(() => {
    // Helper to determine if the user is trying to scroll within a natively scrollable container
    const checkScrollable = (target, isScrollingDown) => {
      let el = target;
      while (el && el !== document.body && el !== document.documentElement) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        
        if (overflowY === 'auto' || overflowY === 'scroll') {
          const contentScrolls = el.scrollHeight > el.clientHeight + 1;
          if (contentScrolls) {
            const canScrollUp = el.scrollTop > 0;
            const canScrollDown = el.scrollHeight - el.scrollTop > el.clientHeight + 1;
            
            // If the element can still scroll in the requested direction, we should yield to it
            if ((isScrollingDown && canScrollDown) || (!isScrollingDown && canScrollUp)) {
              return true;
            }
          }
        }
        el = el.parentElement;
      }
      return false;
    };

    const handleWheel = (e) => {
      const isScrollingDown = e.deltaY > 0;
      if (checkScrollable(e.target, isScrollingDown)) {
        return; // Let native browser scroll happen
      }

      e.preventDefault();
      if (isTransitioning.current) return;
      
      // Add a slight debounce/threshold for highly sensitive trackpads
      if (e.deltaY > 30) goNext();
      else if (e.deltaY < -30) goPrev();
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      // We check scrollability on start and store it broadly, as touchmove might not reliably trigger all the time
    };

    const handleTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY; // positive means swipe up = scroll down
      const isScrollingDown = delta > 0;

      if (checkScrollable(e.target, isScrollingDown)) {
        touchStartY.current = null;
        return; // Yield to native touch scroll
      }

      if (Math.abs(delta) < 50) return;
      if (isTransitioning.current) return;
      
      if (delta > 0) goNext();
      else goPrev();
      
      touchStartY.current = null;
    };

    const handleKeyDown = (e) => {
      const isArrowDown = e.key === 'ArrowDown' || e.key === 'PageDown';
      const isArrowUp = e.key === 'ArrowUp' || e.key === 'PageUp';
      
      if (isArrowDown || isArrowUp) {
        if (checkScrollable(e.target, isArrowDown)) {
          return; // Yield to native keyboard scroll
        }
        
        e.preventDefault();
        if (isTransitioning.current) return;
        
        if (isArrowDown) goNext();
        else goPrev();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goNext, goPrev, isTransitioning]);
}
