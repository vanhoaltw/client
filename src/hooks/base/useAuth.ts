import nookies, { destroyCookie } from 'nookies';
import { toast } from 'react-toastify';
import { useDebouncedCallback } from 'use-debounce';

import useAuthStore from '@/store/auth';

import { TOKEN_KEY } from '@/constant/config';

import { AuthResponse } from '@/types/auth';

export const useLogin = () => {
  const {
    requestLoading,
    setUser,
    setToken,
    setOpenedLogin,
    setRequestLoading,
  } = useAuthStore();

  const doRequest = useDebouncedCallback(
    (response: AuthResponse) => {
      setUser(response.user);
      setToken(response.token);
      nookies.set(null, TOKEN_KEY, response.token, {
        maxAge: 180 * 24 * 60 * 60,
        path: '/',
      });
      toast.success(
        `Chào bạn ${response?.user?.firstName || ''} ${
          response?.user?.lastName || ''
        }`
      );
      setOpenedLogin(false);
      setRequestLoading(false);
    },
    250,
    { leading: true, trailing: false }
  );

  return { doRequest, isLoading: requestLoading };
};

export const useLogout = () => {
  const { reset } = useAuthStore();

  const doRequest = useDebouncedCallback(
    () => {
      reset();
      destroyCookie(null, TOKEN_KEY);
      toast.success('Đã đăng xuất tài khoản');
    },
    250,
    { leading: true, trailing: false }
  );

  return { doRequest };
};
