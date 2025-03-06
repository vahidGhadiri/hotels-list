import { useState, useEffect } from "react";

type UseDebounceType = <T>(value: T, delay?: number) => T;

const useDebounce: UseDebounceType = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
