export const getLocalStorageItem = <T>(key: string): T | null => {
  const object = localStorage.getItem(key);

  if (object) {
    return JSON.parse(object) as T;
  }

  return null;
};
