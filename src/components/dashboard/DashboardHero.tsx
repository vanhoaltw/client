'use client';

import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import CloudinaryImage from '@/components/images/CloudinaryImage';
import SlideChervon from '@/components/navigation/SlideChervon';

const imgs = [
  '/v1654260580/samples/landscapes/architecture-signs.jpg',
  '/v1654260580/samples/landscapes/architecture-signs.jpg',
];

const DashboardHero = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <Swiper
      spaceBetween={50}
      lazyPreloadPrevNext={1}
      loop
      className='group max-h-[600px] overflow-hidden'
      modules={[Navigation]}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onInit={(swiper: SwiperClass) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        swiper.params.navigation.nextEl = navigationNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {imgs.map((i, idx) => (
        <SwiperSlide key={`hero-${i}-${idx}`}>
          <CloudinaryImage
            publicId={i}
            width={2400}
            height={800}
            preview={false}
          />
        </SwiperSlide>
      ))}

      <SlideChervon
        ref={navigationNextRef}
        className='opacity-0 transition-opacity group-hover:opacity-100'
      />
      <SlideChervon
        ref={navigationPrevRef}
        direction='left'
        className='opacity-0 transition-opacity group-hover:opacity-100'
      />
    </Swiper>
  );
};

export default DashboardHero;
