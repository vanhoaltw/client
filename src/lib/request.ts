import ky from 'ky';

import { apiUrl } from '@/constant/env';

const request = ky.create({
  prefixUrl: apiUrl,
  headers: {},
  retry: 0,
  timeout: 30000, // 10s
  hooks: {
    afterResponse: [
      async (res) => {
        const body = await res.json();
        if (body.status === 'error') {
          throw new Error(body.message);
        }
      },
    ],
  },
});

export { request };
