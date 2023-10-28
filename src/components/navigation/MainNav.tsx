'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import UnstyledLink from '@/components/links/UnstyledLink';
import UserDropdown from '@/components/navigation/UserDropdown';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { siteConfig } from '@/constant/config';

import { MainNavItem } from '@/types/common';

interface MainNavProps {
  items: MainNavItem[];
}

const MainNav = ({ items }: MainNavProps) => {
  const pathname = usePathname();
  return (
    <div className='hidden w-full items-center justify-between gap-6 lg:flex'>
      <UnstyledLink
        aria-label='Home'
        href='/'
        className='hidden items-center space-x-2 lg:flex '
      >
        <Image
          src='/favicon.ico'
          height={30}
          width={30}
          alt={siteConfig.name}
        />
        <span className='hidden text-lg lg:inline-block'>
          {siteConfig.name}
        </span>
      </UnstyledLink>

      <NavigationMenu>
        <NavigationMenuList>
          {items.map((nav) => {
            const active = pathname.split('/')?.[1] === nav.href.substring(1);
            return (
              <NavigationMenuItem key={nav.title}>
                <Link href={nav.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      active && 'text-primary',
                      navigationMenuTriggerStyle(),
                      'h-auto'
                    )}
                  >
                    {nav.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className='flex items-center justify-end gap-2'>
        <Link href='/homestay'>
          <Button className='gap-2 rounded-full px-6 text-sm font-normal'>
            <Search size={16} /> Tìm phòng
          </Button>
        </Link>
        <UserDropdown />
      </div>
    </div>
  );
};

export default MainNav;
