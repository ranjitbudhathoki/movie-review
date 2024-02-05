import { useState, useEffect } from "react";

// this is a custom hook that does all setting and getting values from local storage stuff
export default function useLocalStorage(initialValue: [], key: string) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
