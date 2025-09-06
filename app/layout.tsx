import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import '@/assets/scss/globals.scss';

import Header from '@/components/common/Header';

const geist = Geist({
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Homeplant IO',
  description: 'Your personal guide to home plant care.',
  manifest: '/manifest.ts',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Homeplant IO',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/icon-192x192.png', sizes: '192x192' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geist.className} antialiased bg-[#F9F8F4] min-h-screen`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
