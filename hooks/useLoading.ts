import { create } from "zustand";

interface LoadingStore {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useLoading = create<LoadingStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useLoading;
