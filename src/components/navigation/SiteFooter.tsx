import { LocateIcon, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

import UnstyledLink from '@/components/links/UnstyledLink';

import { siteConfig } from '@/constant/config';

const SiteFooter = () => {
  return (
    <footer className='bg-primary text-primary-foreground min-h-min py-16'>
      <div className='container mx-auto flex flex-wrap justify-between gap-10 sm:flex-nowrap'>
        <section className='flex-1 shrink-0 space-y-3 whitespace-nowrap'>
          <Image
            src='/favicon.ico'
            alt={siteConfig.name}
            height={60}
            width={60}
          />
          <p>
            © {new Date().getFullYear()} {siteConfig.title}
          </p>
        </section>

        <section className='grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3'>
          <dl className='flex flex-col gap-2'>
            <dt className='mb-2 text-lg font-semibold text-yellow-500'>
              Danh mục
            </dt>
            {siteConfig.mainNav.map((nav) => (
              <dd key={nav.href}>
                <UnstyledLink className='hover:text-yellow-500' href={nav.href}>
                  {nav.title}
                </UnstyledLink>
              </dd>
            ))}
          </dl>

          <dl className='flex flex-col gap-2'>
            <dt className='mb-2 text-lg font-semibold text-yellow-500'>
              Hỗ trợ
            </dt>
            {siteConfig.supportNav.map((nav) => (
              <dd key={nav.href}>
                <UnstyledLink className='hover:text-yellow-500' href={nav.href}>
                  {nav.title}
                </UnstyledLink>
              </dd>
            ))}
          </dl>

          <dl className='flex flex-col gap-2'>
            <dt className='mb-2 text-lg font-semibold text-yellow-500'>
              Liên hệ
            </dt>
            <dd className='flex items-center gap-2'>
              <Mail size={16} className='shrink-0' />
              <UnstyledLink href='gmail://'>maoki@gmail.com</UnstyledLink>
            </dd>
            <dd className='flex items-center gap-2'>
              <Phone size={16} className='shrink-0' />
              <UnstyledLink href='tel://'>+84 778699653</UnstyledLink>
            </dd>
            <dd className='flex gap-2'>
              <LocateIcon size={16} className='mt-1 shrink-0' />
              107/2 Điện Biên Phủ, phường 17, Quận Bình Thạnh, Thành phố Hồ Chí
              Minh, Việt Nam
            </dd>
          </dl>
        </section>
      </div>
    </footer>
  );
};

export default SiteFooter;
