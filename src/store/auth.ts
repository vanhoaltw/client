import { destroyCookie } from 'nookies';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { TOKEN_KEY } from '@/constant/config';

import { User } from '@/types/common';

type Store = {
  user: User | null;
  token: string | null;
  isLogged: boolean;
  requestLoading: boolean;
  openedLogin: boolean;
  setUser: (user: User | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  setOpenedLogin: (isLoading: boolean) => void;
  setToken: (token: string) => void;
  reset: () => void;
};

const defaultValue = {
  user: null,
  requestLoading: false,
  token: null,
  isLogged: false,
  openedLogin: false,
};

const useAuthStore = create<Store>()(
  persist(
    (set) => ({
      ...defaultValue,
      setUser: (user) => set((state) => ({ ...state, user: user })),
      setToken: (token) => set((state) => ({ ...state, token: token })),
      setRequestLoading: (isLoading) =>
        set((state) => ({ ...state, requestLoading: isLoading })),
      setOpenedLogin: (opened) =>
        set((state) => ({ ...state, openedLogin: opened })),
      reset: () => {
        set(defaultValue);
        destroyCookie(null, TOKEN_KEY, { path: '/' });
      },
    }),
    {
      name: 'auth',
      skipHydration: true,
    }
  )
);

export default useAuthStore;
