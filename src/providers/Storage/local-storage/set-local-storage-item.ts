export const setLocalStorageItem = (key: string, object: unknown): void => {
  if (object) {
    const JsonObject = JSON.stringify(object);
    localStorage.setItem(key, JsonObject);
  }
};
