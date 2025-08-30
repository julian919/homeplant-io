import { useEffect, useState } from 'react';
import { useCommonStore } from '@/store/common';

export function useTranslations() {
  const { language } = useCommonStore();
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const t = await import(`@/i18n/${language}.json`);
      setTranslations(t.default);
    };
    loadTranslations();
  }, [language]);

  return translations;
}
