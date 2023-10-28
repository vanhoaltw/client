import { format } from 'date-fns';
import { Minus } from 'lucide-react';
import { useState } from 'react';

import { useIsMobile } from '@/hooks/use-is-mobile';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const formatString = 'dd/MM/yyyy';

const formatDate = (date: Date): string => format(date, formatString);

interface DateRange {
  from: Date;
  to?: Date;
}

export interface DateRangePickerProps {
  onChange?: (values: { range: DateRange; rangeCompare?: DateRange }) => void;
  initialDateFrom?: Date;
  initialDateTo?: Date;
  align?: 'start' | 'center' | 'end';
}

const DateRangePicker = ({
  initialDateFrom,
  initialDateTo,
  align,
  onChange,
}: DateRangePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const [range, setRange] = useState<DateRange>({
    from: initialDateFrom ? new Date(initialDateFrom) : new Date(),
    to:
      initialDateTo || initialDateFrom
        ? new Date(initialDateTo || initialDateFrom || '')
        : new Date(),
  });

  const resetValues = (): void => {
    setRange({
      from: initialDateFrom ? new Date(initialDateFrom) : new Date(),
      to:
        initialDateTo || initialDateFrom
          ? new Date(initialDateTo || initialDateFrom || '')
          : new Date(),
    });
  };

  return (
    <Popover
      modal={true}
      open={isOpen}
      onOpenChange={(open: boolean) => {
        if (!open) {
          resetValues();
        }
        setIsOpen(open);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          size='lg'
          variant='ghost'
          className='w-full px-0 hover:bg-transparent'
        >
          <div className='flex w-full items-center justify-between gap-2 py-1 text-center'>
            <div className='flex-1'>Từ {formatDate(range.from)}</div>

            <Minus size={14} />

            <div className='flex-1'>
              Đến {formatDate(range?.to || range.from)}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} className='w-auto'>
        <Calendar
          mode='range'
          fromDate={new Date()}
          onSelect={(value: { from?: Date; to?: Date } | undefined) => {
            if (value?.from != null) {
              setRange({ from: value.from, to: value?.to });
            }
          }}
          selected={range}
          numberOfMonths={isMobile ? 1 : 2}
          defaultMonth={
            new Date(
              new Date().setMonth(new Date().getMonth() - (isMobile ? 0 : 1))
            )
          }
        />
        <div className='flex justify-end gap-2'>
          <Button variant='outline' onClick={resetValues}>
            Xoá bỏ
          </Button>
          <Button
            onClick={() => {
              setIsOpen(false);
              onChange?.({ range });
            }}
          >
            Xác nhận
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateRangePicker;
