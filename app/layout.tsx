import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import './globals.css';
import Header from '@/components/shared/header';
import { cn } from '@/lib/utils';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Next Pizza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen', nunito.variable)}>
        <Header className='px-[5%]' />
        {children}
      </body>
    </html>
  );
}
