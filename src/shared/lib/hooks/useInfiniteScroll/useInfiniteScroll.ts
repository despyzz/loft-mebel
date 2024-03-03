import {MutableRefObject, useEffect} from "react";

export interface UseInfiniteScrollOptions {
  callback: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({callback, wrapperRef, triggerRef}: UseInfiniteScrollOptions) {
  useEffect(() => {
    const options = {
      root: wrapperRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerRef.current);

    return () => {
      if (observer) {
        observer.unobserve(triggerRef.current);
      }
    }
  }, []);
}