import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import '@/assets/scss/globals.scss';
import Header from '@/components/common/Header';
import { getLocale, getTranslations } from '@/utils/translations';
import { I18nClientProvider } from '@/components/common/I18nClientProvider';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const translations = await getTranslations(locale);

  return (
    <html lang={locale} className="h-full">
      <body
        suppressHydrationWarning={true}
        className={`${geist.className} antialiased bg-[#F9F8F4] h-full flex flex-col`}
      >
        <I18nClientProvider translations={translations}>
          <Header />
          <main className="flex-grow">{children}</main>
        </I18nClientProvider>
      </body>
    </html>
  );
}
