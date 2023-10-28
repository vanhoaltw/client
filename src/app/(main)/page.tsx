import { Bath, Key, Snowflake, Wifi } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import BookingBar from '@/components/dashboard/BookingBar';
import Branch from '@/components/dashboard/Branch';
import DashboardHero from '@/components/dashboard/DashboardHero';
import Feedback from '@/components/dashboard/Feedback';
import CloudinaryImage from '@/components/images/CloudinaryImage';
import { Button } from '@/components/ui/button';

import { siteConfig } from '@/constant/config';

const utilities = [
  {
    image: <Image src='/svg/Tivi.svg' height={36} width={36} alt='Netflix' />,
    label: 'Netflix',
  },
  {
    image: <Wifi size={36} />,
    label: 'Wifi tốc độ cao',
  },
  {
    image: <Key size={36} />,
    label: 'Tự nhận phòng',
  },
  {
    image: (
      <Image src='/svg/Bancon.svg' height={36} width={36} alt='Ban công' />
    ),
    label: 'Ban công',
  },
  {
    image: <Bath size={36} />,
    label: 'Phòng tắm riêng',
  },
  {
    image: (
      <Image
        src='/svg/Kitchen.svg'
        height={36}
        width={36}
        alt='Dụng cụ nấu ăn'
      />
    ),
    label: 'Dụng cụ nấu ăn',
  },
  {
    image: (
      <Image
        src='/svg/Towel.svg'
        height={36}
        width={36}
        alt='Dịch vụ dọn phòng'
      />
    ),
    label: 'Dịch vụ dọn phòng',
  },
  {
    image: <Snowflake size={36} />,
    label: 'Điều hoà nhiệt độ',
  },
];

export default function HomePage() {
  return (
    <div className='space-y-10'>
      <section className='relative pb-8'>
        <DashboardHero />
        <div role='form' className='absolute bottom-0 left-0 z-10 w-full'>
          <div className='container relative mx-auto'>
            <BookingBar />
          </div>
        </div>
      </section>

      <section>
        <article className='container mx-auto py-10'>
          <h3 className='mb-2 text-2xl font-semibold sm:text-3xl'>Chi nhánh</h3>
          <Branch />
        </article>
      </section>

      <section className='bg-[#EADAB1]'>
        <div className='container mx-auto grid gap-6 space-y-4 py-16 md:grid-cols-2'>
          <div className='relative ml-20 hidden md:block'>
            <div className='absolute right-16 top-4 rotate-12 shadow-md'>
              <CloudinaryImage
                height={300}
                width={300}
                preview={false}
                className='w-60'
                publicId='/v1695547969/336052826_770827917480217_6731598094454537309_n_e1kppz.jpg'
              />
            </div>
            <div className='absolute left-10 top-28 shadow-lg'>
              <CloudinaryImage
                height={350}
                width={350}
                preview={false}
                className='w-72'
                publicId='/v1695548011/344560979_197126199844024_3219243640927516635_n_mksyju.jpg'
              />
            </div>
          </div>
          <article>
            <h3 className='mb-2 text-3xl font-semibold'>
              Tại sao lại chọn {siteConfig.name}?
            </h3>
            <p className='text-base'>
              Tại {siteConfig.name} bạn sẽ được tận hưởng tiện ích, trải nghiệm
              thú vị ngay từ khi bước vào.
            </p>
            <ul className='flex flex-wrap gap-3 pt-6'>
              {utilities.map((i, idx) => (
                <li
                  className='flex w-20 flex-col items-center gap-2 text-center'
                  key={`ul-${i.label}-${idx}`}
                >
                  <div className='flex aspect-square h-10 items-center justify-center'>
                    {i.image}
                  </div>
                  <span>{i.label}</span>
                </li>
              ))}
            </ul>
            <Button
              variant='outline'
              size='lg'
              className='border-foreground mt-6 h-14 rounded-full px-10 text-lg font-bold'
            >
              Đặt phòng ngay
            </Button>
          </article>
        </div>
      </section>

      <section>
        <article className='container mx-auto'>
          <h3 className='mb-2 text-2xl font-semibold'>Đánh giá từ người ở</h3>
          <Feedback />
        </article>
      </section>
    </div>
  );
}
