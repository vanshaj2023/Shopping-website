import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function PageTransition({ children }) {
  const location = useLocation();
  const transitionRef = useRef();

  useEffect(() => {
    gsap.from(transitionRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      ease: "power2.out"
    });
  }, [location.pathname]); // Changed to pathname for more reliable triggering

  return <div ref={transitionRef}>{children}</div>;
}