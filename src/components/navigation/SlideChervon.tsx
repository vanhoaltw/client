import { ChevronLeft, ChevronRight } from 'lucide-react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

interface Props {
  direction?: 'left' | 'right';
  className?: string;
  size?: number;
}

const SlideChervon = forwardRef<HTMLButtonElement, Props>(
  ({ direction = 'right', className, size = 26 }, ref) => {
    const Icon = direction === 'right' ? ChevronRight : ChevronLeft;
    return (
      <Button
        size='icon'
        ref={ref}
        className={cn(
          'absolute top-1/2 z-10 h-12 w-12 -translate-y-1/2 bg-black/40 hover:bg-black/60',
          { 'right-2': direction === 'right', 'left-2': direction !== 'right' },
          className
        )}
      >
        <Icon size={size} />
      </Button>
    );
  }
);

export default SlideChervon;
