import gsap from 'gsap';

// Using high-quality royalty-free atmospheric tracks downloaded locally
const URL_DRAMA = "/audio/drama.mp3"; 
const URL_HOPE = "/audio/hope.mp3";

let dramaAudio = null;
let hopeAudio = null;
let currentMode = null;
let isMuted = true;
let isInitialized = false;

function initAudioElements() {
  if (isInitialized) return;

  dramaAudio = new Audio(URL_DRAMA);
  dramaAudio.loop = true;
  dramaAudio.volume = 0;

  hopeAudio = new Audio(URL_HOPE);
  hopeAudio.loop = true;
  hopeAudio.volume = 0;

  isInitialized = true;
}

function playAudioSafely(audioElement) {
  if (!audioElement) return;
  const playPromise = audioElement.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.warn("Audio playback prevented by auto-play policy or network:", error);
    });
  }
}

function crossfade(toMode) {
  if (toMode === currentMode) return;
  currentMode = toMode;

  if (isMuted) return;

  if (toMode === 'drama') {
    playAudioSafely(dramaAudio);
    gsap.to(dramaAudio, { volume: 0.8, duration: 3, ease: 'power2.inOut' });
    gsap.to(hopeAudio, { volume: 0, duration: 3, ease: 'power2.inOut', onComplete: () => hopeAudio.pause() });
  } else {
    playAudioSafely(hopeAudio);
    gsap.to(hopeAudio, { volume: 0.7, duration: 3, ease: 'power2.inOut' });
    gsap.to(dramaAudio, { volume: 0, duration: 3, ease: 'power2.inOut', onComplete: () => dramaAudio.pause() });
  }
}

export function setMuted(mute) {
  isMuted = mute;
  if (!isInitialized) initAudioElements();

  if (mute) {
    gsap.to(dramaAudio, { volume: 0, duration: 1.5, ease: 'power2.out', onComplete: () => dramaAudio.pause() });
    gsap.to(hopeAudio, { volume: 0, duration: 1.5, ease: 'power2.out', onComplete: () => hopeAudio.pause() });
  } else {
    // Unmuting, start the appropriate track
    crossfade(currentMode || 'drama');
  }
}

export function getMuted() {
  return isMuted;
}

export function updateSoundForSection(sectionIndex) {
  if (!isInitialized) initAudioElements();
  const mode = sectionIndex >= 6 ? 'hope' : 'drama';
  crossfade(mode);
}

export function initSound() {
  initAudioElements();
  isMuted = true;
}
