import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const shabnam = localFont({
  src: '../public/font/Shabnam.woff2',
});

export const metadata: Metadata = {
  title: 'فروشگاه',
  description: 'صفحه فروشگاه',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl">
      <body className={shabnam.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
