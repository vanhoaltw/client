import FilterBar from '@/components/homestay/FilterBar';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Homestay = () => {
  return (
    <div className='container mx-auto py-10'>
      <FilterBar />

      <div className='mt-4 flex items-center justify-between'>
        <h3 className='font-semibold'>0 Lựa Chọn Phòng </h3>

        <fieldset className='flex items-center gap-2'>
          <label>Sắp xếp theo</label>
          <Select>
            <SelectTrigger id='sort' className='w-32'>
              <SelectValue placeholder='Vị trí' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value=''>Tất cả</SelectItem>
                <SelectItem value='bui-vien'>Bùi Viện</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </fieldset>
      </div>
    </div>
  );
};

export default Homestay;
