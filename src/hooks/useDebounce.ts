import React, { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number): string => {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue!;
};

export default useDebounce;
