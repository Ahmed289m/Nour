import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function useAnimatedCounter(target, duration = 2, trigger = false) {
  const [value, setValue] = useState(0);
  const tweenRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    // Kill any existing tween
    if (tweenRef.current) tweenRef.current.kill();

    const obj = { val: 0 };
    tweenRef.current = gsap.to(obj, {
      val: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => setValue(Math.round(obj.val)),
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [trigger, target, duration]);

  return value;
}
