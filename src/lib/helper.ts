import { NextPageContext } from 'next';
import nookies from 'nookies';

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

export function getToken(ctx?: NextPageContext): string | undefined {
  return nookies.get(ctx)?.maoki_token;
}
