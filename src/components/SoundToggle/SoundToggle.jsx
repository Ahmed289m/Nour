import { useState, useEffect } from 'react';
import { initSound, setMuted, getMuted, updateSoundForSection } from '../../hooks/soundEngine';
import { useScroll } from '../../context/ScrollContext';
import './SoundToggle.css';

export default function SoundToggle() {
  const [muted, setMutedState] = useState(true);
  const [started, setStarted] = useState(false);
  const { currentSection } = useScroll();

  // Init sound engine once
  useEffect(() => { initSound(); }, []);

  // Update sound when section changes
  useEffect(() => {
    if (started && !muted) {
      updateSoundForSection(currentSection);
    }
  }, [currentSection, started, muted]);

  const handleToggle = () => {
    if (!started) {
      setStarted(true);
      setMutedState(false);
      setMuted(false);
      updateSoundForSection(currentSection);
    } else {
      const next = !muted;
      setMutedState(next);
      setMuted(next);
      if (!next) updateSoundForSection(currentSection);
    }
  };

  const isHopeSection = currentSection >= 6;

  return (
    <button
      id="sound-toggle-btn"
      className={`sound-toggle ${isHopeSection ? 'sound-toggle--warm' : ''} ${!muted ? 'sound-toggle--active' : ''}`}
      onClick={handleToggle}
      title={muted ? 'Enable ambient sound' : 'Mute sound'}
      aria-label={muted ? 'Enable ambient sound' : 'Mute sound'}
    >
      {muted ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <line x1="23" y1="9" x2="17" y2="15"/>
          <line x1="17" y1="9" x2="23" y2="15"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
      )}
      <span className="sound-toggle__label">
        {muted ? 'Sound' : (isHopeSection ? 'Hope' : 'Drama')}
      </span>
      {!muted && (
        <span className="sound-toggle__wave">
          <span /><span /><span />
        </span>
      )}
    </button>
  );
}
