import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

import authSlice from "./authSlice";
import createBearSlice from "./createBearSlice";
import createFishSlice from "./createFishSlice";
import createHoneySlice from "./createHoneySlice";

const useStore = create(persist(
  (set, get) => ({
    ...authSlice(set, get),
    ...createBearSlice(set, get),
    ...createHoneySlice(set, get),
    ...createFishSlice(set, get)
  }),
  {
    name: "local-storage",
    getStorage: () => AsyncStorage,
    // partialize: (state) => ({})
  }
));

export default useStore;
