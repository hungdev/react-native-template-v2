const createAuthSlice = (set, get) => ({
  language: null,
  token: null,
  setLanguage: (lang) => () => {
    set((prev) => ({ language: lang }));
  }
});

export default createAuthSlice;
