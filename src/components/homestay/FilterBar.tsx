'use client';

import { MapPin } from 'lucide-react';

import DateRangePicker from '@/components/forms/DateRangePicker';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FilterBar = () => {
  return (
    <form className='flex items-center gap-2'>
      <Select>
        <SelectTrigger id='location' className='w-32'>
          <MapPin size={14} />
          <SelectValue placeholder='Vị trí' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value=''>Tất cả</SelectItem>
            <SelectItem value='bui-vien'>Bùi Viện</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <DateRangePicker />

      <Select>
        <SelectTrigger id='location' className='w-32'>
          <MapPin size={14} />
          <SelectValue placeholder='Vị trí' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value=''>Tất cả</SelectItem>
            <SelectItem value='bui-vien'>Bùi Viện</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </form>
  );
};

export default FilterBar;
