import axios from '../config/axiosConfig';
const maxFishes = 10;

const requestUrl = 'https://hungvu.net/';
const createFishSlice = (set, get) => ({
  fishes: maxFishes,
  repopulate: () => {
    set((prev) => ({ fishes: maxFishes }));
  },
  getFish: async () => {
    const response = await axios.get(requestUrl);
    set({ fishies: response?.data });
  },
  createFish: (params) => async pond => {
    const response = await axios.post(requestUrl, params);
    set({ fishies: response?.data });
  }
});

export default createFishSlice;
