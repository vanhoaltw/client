import { request } from '@/lib/request';

import { AuthResponse } from '@/types/auth';

export const loginGoogle: (code: string) => Promise<AuthResponse> = (code) => {
  return request.post('auth/google', { json: { code } }).json();
};

export const loginFacebook = (token: string) => {
  return request.post('auth/facebook', { json: { token } }).json();
};
