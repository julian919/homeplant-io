import { create } from 'zustand';

interface CommonState {
  language: 'en' | 'zh';
  setLanguage: (language: 'en' | 'zh') => void;
}

export const useCommonStore = create<CommonState>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}));
