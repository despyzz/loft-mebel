import {MutableRefObject, useEffect} from "react";

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({callback, triggerRef}: UseInfiniteScrollOptions) {
  useEffect(() => {
    if (!callback) {
      return
    }

    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    }

    const currentTrigger = triggerRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(currentTrigger);

    return () => {
      if (observer && currentTrigger) {
        observer.unobserve(currentTrigger);
      }
    }
  }, [triggerRef, callback]);
}