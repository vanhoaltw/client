'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const routes: any = {
  ['personal-info']: 'Thông tin cá nhân',
  account: 'Tài khoản',
};

const AccountLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const arrPath = pathname.split('/')?.slice(1);

  return (
    <div className='container my-10'>
      {arrPath?.length > 1 && (
        <div>
          <ul className='mb-2 flex items-center font-semibold'>
            {arrPath.map((item, idx) => (
              <li key={item} className='flex items-center'>
                {idx === arrPath.length - 1 ? (
                  routes?.[item]
                ) : (
                  <Link
                    className='hover:underline'
                    href={idx === 0 ? '/account' : item}
                  >
                    {routes?.[item]}
                  </Link>
                )}
                {idx !== arrPath.length - 1 && (
                  <ChevronRight size={16} className='mx-2' />
                )}
              </li>
            ))}
          </ul>

          <h1 className='mb-6'>{routes?.[arrPath?.slice(-1)?.[0]]}</h1>
        </div>
      )}

      {children}
    </div>
  );
};

export default AccountLayout;
