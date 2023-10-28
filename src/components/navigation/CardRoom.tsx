/* eslint-disable @next/next/no-img-element */
import { Bath, BedDouble, MapPin, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const CardRoom = () => {
  return (
    <Card className='transform-gpu cursor-pointer overflow-hidden transition-transform hover:scale-105 active:scale-100'>
      <figure className='aspect-video'>
        <img
          src='https://a0.muscache.com/im/pictures/miso/Hosting-813409850074088962/original/74753c5a-204d-4d66-81bd-d5c58b1af099.jpeg?im_w=1200'
          alt=''
          width='100%'
          height='auto'
          loading='lazy'
        />
      </figure>
      <CardHeader>
        <CardTitle>Maoki House Center of HCMC</CardTitle>
        <CardDescription className='text-xs'>
          <MapPin className='mb-1 inline-block' size={14} /> 24 Lê Thánh Tôn, P.
          Bến Nghé, Q.1, HCM
        </CardDescription>
        <div className='text-muted-foreground mt-2 flex flex-wrap items-center gap-1.5 text-xs'>
          <span className='inline-flex items-center gap-1'>
            <Users size={14} /> 3 khách
          </span>

          <span>•</span>
          <span className='inline-flex items-center gap-1'>
            <BedDouble size={14} /> 1 giường
          </span>

          <span>•</span>
          <span className='inline-flex items-center gap-1'>
            <Bath size={14} /> 1 phòng tắm
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex items-center justify-between gap-4'>
          <p>
            Giá phòng: <strong>1,900,000đ</strong>
          </p>
          <Button variant='outline' className='shrink-0'>
            Xem phòng
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardRoom;
