import { useEffect, useState } from "react";
import { GetItem, SetItem } from "../utils/localStorage";

export function useStatePersistence(key, initial) {
  const [value, setValue] = useState(() => {
    const item = GetItem(key);
    return item !== null ? item : initial;
  });

  useEffect(() => {
    SetItem(key, value);
  }, [value]);

  return [value, setValue];
}
