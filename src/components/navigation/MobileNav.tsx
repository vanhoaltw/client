import UnstyledLink from '@/components/links/UnstyledLink';

import { siteConfig } from '@/constant/config';

import { MainNavItem } from '@/types/common';

interface MobileNavProps {
  items?: MainNavItem[];
}

const MobileNav = ({ items }: MobileNavProps) => {
  return (
    <div>
      <UnstyledLink
        aria-label='Home'
        href='/'
        className='hidden items-center space-x-2 lg:flex'
      >
        Logo
        <span className='hidden font-bold lg:inline-block'>
          {siteConfig.name}
        </span>
      </UnstyledLink>
    </div>
  );
};

export default MobileNav;
