import 'server-only';
import { cookies } from 'next/headers';
import { cache } from 'react';

const dictionaries = {
  en: () => import('@/i18n/en.json').then((module) => module.default),
  zh: () => import('@/i18n/zh.json').then((module) => module.default),
};

export const getLocale = cache(async (): Promise<'en' | 'zh'> => {
  const cookieStore = cookies();
  return ((await cookieStore).get('locale')?.value ?? 'en') as 'en' | 'zh';
});

export const getTranslations = cache(async (locale: 'en' | 'zh') =>
  dictionaries[locale]()
);

export const getI18n = async () => {
  const locale = await getLocale();
  const translations = await getTranslations(locale);
  return (key: keyof typeof translations): string =>
    translations[key] ?? String(key);
};
