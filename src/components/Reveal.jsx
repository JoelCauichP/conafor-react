import { useEffect, useRef, useState } from 'react';

function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  distance = 40,
  duration = 700,
  once = true,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`}
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-distance': `${distance}px`,
        '--reveal-duration': `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;