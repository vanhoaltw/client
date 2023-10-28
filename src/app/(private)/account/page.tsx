'use client';
import { Eye, Shield } from 'lucide-react';
import Link from 'next/link';
import { LiaIdCard } from 'react-icons/lia';

import useAuthStore from '@/store/auth';

const settings = [
  {
    label: 'Thông tin cá nhân',
    description: 'Cung cấp thông tin cá nhân để hiện thị đến người dùng',
    icon: LiaIdCard,
    href: '/account/personal-info',
  },
  {
    label: 'Đăng nhập và bảo mật',
    description: 'Cập nhật mật khẩu và bảo mật tài khoản',
    icon: Shield,
    href: '/account/personal-info',
  },
  {
    label: 'Quyền riêng tư và chia sẻ',
    description: 'Quản lý dữ liệu cá nhân, cài đặt chia sẻ dữ liệu',
    icon: Eye,
    href: '/account/personal-info',
  },
];

const AccountPage = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h1>Tài khoản</h1>
      <p className='mt-2 text-base'>
        <strong>
          {user?.firstName} {user?.lastName}
        </strong>
        , {user?.email}
      </p>

      <div className='mt-10 grid grid-cols-2 gap-4'>
        {settings.map(({ href, label, icon: Icon, description }) => (
          <Link
            href={href}
            key={label}
            className='hover:border-foreground flex gap-4 rounded-lg border p-4 transition-colors'
          >
            <Icon size={32} />
            <dl className='space-y-1.5'>
              <dt className='text-base font-bold'>{label}</dt>
              <dd className='text-foreground/60 text-sm'>{description}</dd>
            </dl>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccountPage;
