import { X } from 'lucide-react';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

import SiteFooter from '@/components/navigation/SiteFooter';
import SiteHeader from '@/components/navigation/SiteHeader';
import { Button } from '@/components/ui/button';

import ModalAuth from '@/app/(main)/components/ModalAuth';
import RootProvider from '@/app/provider';
import { siteConfig } from '@/constant/config';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // icons: {
  //   icon: '/favicon/favicon.ico',
  //   shortcut: '/favicon/favicon-16x16.png',
  //   apple: '/favicon/apple-touch-icon.png',
  // },
  // manifest: `/favicon/site.webmanifest`,
  // openGraph: {
  //   url: siteConfig.url,
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   siteName: siteConfig.title,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   type: 'website',
  //   locale: 'en_US',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='vi' className={`${montserrat.variable}`}>
      <body>
        <RootProvider>
          <div className='flex min-h-screen flex-col'>
            <SiteHeader />
            <main className='flex-1'>{children}</main>
            <SiteFooter />
            <ModalAuth />
          </div>
          <ToastContainer
            position='top-right'
            autoClose={4000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover={false}
            theme='light'
            toastClassName='text-foreground'
            closeButton={
              <Button
                variant='link'
                size='icon'
                className='text-foreground h-8 w-8'
              >
                <X size={14} />
              </Button>
            }
          />
        </RootProvider>
      </body>
    </html>
  );
}
