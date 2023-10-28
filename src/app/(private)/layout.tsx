import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { TOKEN_KEY } from '@/constant/config';

// ('use client');
// const ClientComponent = ({ token }: { token: string }) => {
//   // const user = useAuthStore((state) => state.user);
//   // const loggedRef = useRef(!!user?.id)
//   // useEffect(() => {
//   //   if (token) {

//   //   }
//   // }, [user]);

//   return null;
// };

// ('use server');
const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const token = cookies().get(TOKEN_KEY);

  if (!token?.value) redirect('/');
  return (
    <div>
      {/* <ClientComponent token={token?.value} /> */}
      {children}
    </div>
  );
};

export default PrivateLayout;
