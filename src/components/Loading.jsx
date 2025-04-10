import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loading() {
  const loadingRef = useRef();

  useEffect(() => {
    gsap.to(loadingRef.current, {
      duration: 0.8,
      opacity: 0.5,
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <div className="loading" ref={loadingRef}>
      Loading...
    </div>
  );
}