import {memo, MutableRefObject, ReactNode, useRef} from 'react';
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
  children: ReactNode,
  className?: string,
  onScrollEnd?: () => void
}

const Page = memo((props: PageProps) => {
  const {
    children,
    className,
    onScrollEnd
  } = props;

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    triggerRef,
    callback: onScrollEnd
  });

  return (
    <section className={className}>
      {children}
      <div ref={triggerRef}/>
    </section>
  );
});

export default Page;