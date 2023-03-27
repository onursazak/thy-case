function LocalStorageManager() {
  return {
    getItem(key) {
      return JSON.parse(localStorage.getItem(key));
    },
    setItem(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
  };
}

const localStorageManager = LocalStorageManager();

export { localStorageManager };
