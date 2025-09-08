import { create } from 'zustand';
import Cookies from 'js-cookie';

interface CommonState {
  language: 'en' | 'zh';
  setLanguage: (language: 'en' | 'zh') => void;
}

export const useCommonStore = create<CommonState>((set) => ({
  language: 'en',
  setLanguage: (language) => {
    Cookies.set('locale', language, { expires: 365, path: '/', sameSite: 'Lax' });
    set({ language });
  },
}));
