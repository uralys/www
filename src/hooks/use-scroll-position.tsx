import {useEffect, useState} from 'react';

const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const onScroll = (e: Event) => {
      const {target} = e;
      setScrollPosition((target as Document)?.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPosition]);

  return scrollPosition;
};

export {useScrollPosition};
