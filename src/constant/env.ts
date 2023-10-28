export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';
const ssr = typeof window === 'undefined';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const apiUrl = ssr
  ? process.env.API_URL
  : process.env.NEXT_PUBLIC_API_URL;
