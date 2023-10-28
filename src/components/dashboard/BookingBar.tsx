'use client';

import { CalendarDays, MapPin, Minus, Plus, Users } from 'lucide-react';

import DateRangePicker from '@/components/forms/DateRangePicker';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const BookingBar = () => {
  const onSumbit = () => null;

  return (
    <form onSubmit={onSumbit}>
      <div className='mx-auto flex max-w-4xl items-center gap-3 rounded-full border bg-white px-4 py-3 shadow-sm'>
        <Select>
          <SelectTrigger className='ring-none line-clamp-1 w-28 shrink-0 border-none px-0 shadow-none outline-none'>
            <MapPin size={14} />
            <SelectValue placeholder='Vị trí' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value=''>Tất cả</SelectItem>
              <SelectLabel>Hồ Chí Minh</SelectLabel>
              <SelectItem value='bui-vien'>Bùi Viện</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className='h-6 border-r' />

        <fieldset className='flex flex-1 items-center justify-between gap-2'>
          <CalendarDays />
          <DateRangePicker />
        </fieldset>

        <div className='h-6 border-r' />

        <fieldset className='flex items-center'>
          <Users size={16} className='mr-2' />
          <Button size='icon' variant='ghost' className='h-6 w-6'>
            <Minus size={14} />
          </Button>
          <input defaultValue={1} className='w-6 text-center' />
          <Button size='icon' variant='ghost' className='h-6 w-6'>
            <Plus size={14} />
          </Button>
        </fieldset>

        <div className='h-6 border-r' />

        <div className='shrink-0'>
          <Button
            type='submit'
            size='sm'
            className='whitespace-nowrap rounded-full px-6'
          >
            Tìm phòng
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BookingBar;
