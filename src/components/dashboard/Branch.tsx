'use client';

import { useState } from 'react';

import CardRoom from '@/components/navigation/CardRoom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const branchs = [
  { label: 'Tất cả', value: '' },
  { label: 'Bùi viện', value: 'bui-vien' },
];

const Branch = () => {
  const [state, setState] = useState(branchs[0].value);

  return (
    <div>
      <Tabs
        onValueChange={setState}
        defaultValue={state}
        value={state}
        className='border-b'
      >
        <TabsList className='h-fit bg-transparent p-0'>
          {branchs.map((b) => (
            <TabsTrigger key={b.value} value={b.value}>
              {b.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <ul className='mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <CardRoom />
        <CardRoom />
        <CardRoom />
      </ul>
    </div>
  );
};

export default Branch;
