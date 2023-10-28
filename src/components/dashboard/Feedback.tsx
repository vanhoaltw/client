// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @next/next/no-img-element */

'use client';

import { StarFilledIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import SlideChervon from '@/components/navigation/SlideChervon';
import { Button } from '@/components/ui/button';

const feedbacks = [
  {
    avatar:
      'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3&im_w=240',
    name: 'Truong Nhat',
    created: new Date(7, 2023),
    content:
      'It was a great cozy house right next to Bui Vien Street. The alley is a bit small so have to walk around 50m to get to catch a Grab Car, but enough for a Grab Bike to pick you up at door. The decoration is superb, everything is clean & comfortable. The host is quick to respond. Great value.',
    from: 'airbnb',
  },
  {
    avatar:
      'https://a0.muscache.com/im/pictures/user/6ba6092d-57b8-4910-9d8a-4fffc3f5b936.jpg?im_w=240',
    name: 'Cole',
    created: new Date(5, 2023),
    content:
      'The apartment’s lovely and well situated, and Mika’s a terrific host!',
    from: 'airbnb',
  },
  {
    avatar:
      'https://a0.muscache.com/im/pictures/user/e80c360b-a44a-480f-aff5-3b3afe309cb9.jpg?im_w=240',
    name: 'Ryan',
    created: new Date(4, 2023),
    content: 'such a nice place, u get what u pay for',
    from: 'airbnb',
  },
  {
    avatar:
      'https://a0.muscache.com/im/pictures/user/3343b7a9-e47f-4afb-bbef-12ca2790c94f.jpg?im_w=240',
    name: 'Vikram',
    created: new Date(4, 2023),
    content:
      'Overall: would recommend if it’s your first time in Saigon and want to be near the Bui Vien / backpackers street.Good: \n+location: a few minutes walk to the bui vien/ backpackers street and main tourist attractions like Thai bình market and Ben Thanh market \n+host: very responsive and helpful host. Gave me a nice coffee set when I had to miss my first night due to a late flight (couldn’t refund) \n+the apt: really nice, clean, and cozy apartment. Nice kitchen with condiments. Washing machine on the roof terrace. Small balcony you can stand and drink coffee on. \n\nBe aware of:\n+my apt was on the 3rd floor which required going up a very small tight spiral staircase. May be difficult for anyone with limited mobility to manage.\n+noise: you will hear some music from bui vien till 2 in the morning. If you’re a light sleeper, bring earplugs or noise canceling headphones. I had no issue with the noise personally.\nThank you Hanna for the nice intro to Saigon!',
    from: 'airbnb',
  },
  {
    avatar:
      'https://a0.muscache.com/im/pictures/user/1d65508b-2ec9-41a6-a97d-f1b2a0be40ae.jpg?im_w=240',
    name: '진영',
    created: new Date(3, 2023),
    content:
      '베트남에서는 에어비앤비 처음 이용해봤는데요! 결론부터 말씀드리자면 좋았습니다. 첫번째로 호스트 Mika, Maoki 두 분다 너무 친절했고 응답도 5G로 해주셨습니다. 체크인 설명을 너무 친절하게 해줘서 하루를 아주 기분 좋게 시작할 수 있었고 방쓰는 동안에도 딱히 불편함은 없었습니다. 발코니 🥰 는 사랑입니다. 코지 하우스 그 잡채랄까요.. 그래도 객관적으로 참고하시라고 적어보는 사항은 ! 부이비엔 근처라 야간에 조금 시끄러울 수 있습니다. 건물 계단이 좁아 조심히 다니셔야 하겠습니다. 건물로 가는 동안 좁은 골목길을 이용하기 때문에 살짝 불편하거나 어색하게 느끼실 수 있으나 적응하니 정말 편리한 골목이었다는 생각이 들었습니다! 잘 머물렀어요 ✨',
    from: 'airbnb',
  },
  {
    avatar:
      'https://a0.muscache.com/im/pictures/user/981d1be0-678e-4f58-b53d-f1fedde063a4.jpg?im_w=240',
    name: 'Swann',
    created: new Date(3, 2023),
    content:
      'I enjoyed my stay at this place. It’s a very comfy apartment located next to Bui Vien street.\nIt’s quite near most things in D1.\nI also discovered the Little Hanoi Egg Coffee, I highly recommend it.',
    from: 'airbnb',
  },
];

const ReadMore = ({ content }: { content: string }) => {
  const [isMore, setIsMore] = useState(false);

  const showTruncate = content?.trim?.()?.length > 100;

  return (
    <div className='min-w-0 overflow-hidden text-ellipsis break-words'>
      {isMore || !showTruncate ? content : `${content.substring(0, 100)}... `}{' '}
      {showTruncate && (
        <Button
          onClick={() => setIsMore((pre) => !pre)}
          variant='link'
          className='px-0'
        >
          {isMore ? 'Ẩn bớt' : 'Hiện thêm'}
        </Button>
      )}
    </div>
  );
};

const Feedback = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className='my-6'>
      <div className='flex gap-2'>
        <SlideChervon
          size={16}
          ref={navigationPrevRef}
          direction='left'
          className='relative left-0 top-0 h-8 w-8 rounded-full'
        />
        <SlideChervon
          size={16}
          ref={navigationNextRef}
          className='relative left-0 top-0 h-8 w-8 rounded-full '
        />
      </div>
      <Swiper
        lazyPreloadPrevNext={1}
        className='overflow-visible'
        pagination={{ clickable: true }}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper: SwiperClass) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {feedbacks.map((i, idx) => (
          <SwiperSlide key={`hero-${i}-${idx}`}>
            <div className='cursor-pointer rounded-xl border p-4 shadow-sm'>
              <div className='flex items-center gap-3'>
                <img
                  src={i.avatar}
                  alt={i.name}
                  height={40}
                  width={40}
                  loading='lazy'
                  className='aspect-square shrink-0 rounded-full'
                />
                <dl>
                  <dd className='text-base font-bold'>{i.name}</dd>
                  <dd className='text-foreground/60'>
                    {format(i.created, 'dd/MM/yyyy')}
                  </dd>
                </dl>
              </div>

              <div className='mt-2 flex gap-0.5'>
                {[...Array(5).keys()].map((k) => (
                  <StarFilledIcon key={k} className='text-yellow-300' />
                ))}
              </div>
              <div className='text-foreground/60 mt-1 min-w-0 break-words'>
                <ReadMore content={i.content} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
