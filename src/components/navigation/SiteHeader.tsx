import React from 'react';

import MainNav from '@/components/navigation/MainNav';

import { siteConfig } from '@/constant/config';

const SiteHeader = () => {
  return (
    <header className='shadow-sm'>
      <nav className='container mx-auto flex h-16 items-center'>
        <MainNav items={siteConfig.mainNav} />
      </nav>
    </header>
  );
};

export default SiteHeader;
