import { useEffect, useRef, useState } from "react";

interface UseInViewReturn {
  ref: React.RefObject<HTMLElement>;
  inView: boolean;
}

export const useInView = (threshold = 0.15): UseInViewReturn => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};
