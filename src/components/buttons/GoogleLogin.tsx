import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import React from 'react';
import { RiGoogleFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';

import useAuthStore from '@/store/auth';

import { siteConfig } from '@/constant/config';
import { loginGoogle } from '@/services/auth';

import { AuthResponse } from '@/types/auth';

const GoogleButton = ({
  onSuccess,
}: {
  onSuccess: (response: AuthResponse) => void;
}) => {
  const { setRequestLoading } = useAuthStore();

  const login = useGoogleLogin({
    flow: 'auth-code',
    onError: () => {
      toast.error('Đăng nhập không thành công. Vui lòng thử lại');
    },

    onSuccess: async (codeResponse) => {
      const { code } = codeResponse || {};
      if (code) {
        setRequestLoading(true);
        const response = await loginGoogle(code);
        onSuccess(response);
      }
    },
  });

  return (
    <Button
      onClick={() => login()}
      variant='ghost'
      size='lg'
      className='gap-3 !bg-[#DB4437] !text-white transition-transform hover:opacity-80 active:scale-95'
    >
      <RiGoogleFill size={18} />
      Tiếp tục với Google
    </Button>
  );
};

const GoogleLogin = ({
  onSuccess,
}: {
  onSuccess: (response: AuthResponse) => void;
}) => {
  return (
    <GoogleOAuthProvider clientId={siteConfig.google.clientId}>
      <GoogleButton onSuccess={onSuccess} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLogin;
