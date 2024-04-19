import { useState, useEffect, useCallback } from 'react';

type CallbackFunction = () => void;

const useInfiniteScroll = (callback: CallbackFunction): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if ((window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight) || isFetching) {
      return;
    }
    setIsFetching(true);
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching, callback]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
