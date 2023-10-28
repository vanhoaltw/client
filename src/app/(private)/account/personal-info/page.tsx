/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import useAuthStore from '@/store/auth';

import AddressForm from '@/app/(private)/account/personal-info/_components/address-form';
import EmailForm from '@/app/(private)/account/personal-info/_components/email-form';
import NameForm from '@/app/(private)/account/personal-info/_components/name-form';
import NationalForm from '@/app/(private)/account/personal-info/_components/national-form';
import PhoneForm from '@/app/(private)/account/personal-info/_components/phone-form';
import UsernameForm from '@/app/(private)/account/personal-info/_components/username-form';

const PersonalInfoPage = () => {
  const [focusIdx, setFocusIdx] = useState<number>(-1);
  const user = useAuthStore((state) => state.user);

  const fields: any = useMemo(
    () => [
      {
        label: 'Tên',
        value: `${user?.firstName} ${user?.lastName}`.trim(),
        component: NameForm,
        description:
          'Đây là tên trên giấy tờ thông hành của bạn, có thể là giấy phép hoặc hộ chiếu.',
      },
      {
        label: 'Tên tài khoản',
        description: 'Tên sẽ hiển thị dưới dạng biệt danh',
        value: user?.username,
        component: UsernameForm,
      },
      {
        label: 'Địa chỉ email',
        value: user?.email,
        description: 'Sử dụng địa chỉ mà bạn luôn có quyền truy cập.',
        component: EmailForm,
      },
      {
        label: 'Số điện thoại',
        value: user?.phoneNumber || 'Chưa cập nhật',
        description:
          'Thêm số điện thoại để khách đã xác nhận và Airbnb có thể liên hệ với bạn. Bạn có thể thêm các số điện thoại khác và chọn mục đích sử dụng tương ứng.',
        component: PhoneForm,
      },
      // {
      //   label: 'Ngày sinh',
      //   value: user?.birthday || 'Chưa cập nhật',
      //   description:
      // },
      {
        label: 'Quốc gia',
        value: user?.national || 'Chưa cập nhật',
        description: '',
        component: NationalForm,
      },
      // {
      //   label: 'Giới tính',
      //   value: user?.gender || 'Không xác định',
      // },
      {
        label: 'Địa chỉ',
        value: user?.address || 'Chưa cập nhật',
        description: 'Sử dụng địa chỉ thường trú để nhận thư.',
        component: AddressForm,
      },
    ],
    [user]
  );

  return (
    <div>
      {fields.map((field: any, idx: number) => {
        const isActive = focusIdx === idx;
        return (
          <div
            key={field.label}
            className={cn(
              'mb-4 border-b pb-4',
              focusIdx > -1 && focusIdx !== idx ? 'opacity-20' : ''
            )}
          >
            <div className='flex items-center gap-4'>
              <div className='flex-1 shrink-0'>
                <p className='mb-1 font-semibold'>{field.label}</p>
                {isActive && field.description && (
                  <p className='text-foreground/60'>{field.description}</p>
                )}
                {!isActive && <p>{field.value}</p>}
              </div>

              <Button
                variant='link'
                size='sm'
                className='text-foreground'
                onClick={() => (isActive ? setFocusIdx(-1) : setFocusIdx(idx))}
              >
                {isActive ? 'Huỷ' : 'Chỉnh sửa'}
              </Button>
            </div>
            <div className='my-4'>
              {isActive && field.component ? (
                <field.component onDismiss={() => setFocusIdx(-1)} />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalInfoPage;
