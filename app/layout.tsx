import '@/styles/globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavMenu from '@/components/nav-menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Meetups',
  description: 'Organize a Next.js meetup or find one near you!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
