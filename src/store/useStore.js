import { create } from "zustand";
import createVideoSlice from "./slices/videoSlice";

const useStore = create((set, get) => ({
  ...createVideoSlice(set, get),
}));

export default useStore;
