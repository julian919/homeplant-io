'use client';

import React, { createContext, useContext } from 'react';

// Define the shape of the translations and the context
type Translations = Record<string, string>;

interface I18nContextType {
  t: (key: keyof Translations) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// The provider component
export const I18nClientProvider = ({
  children,
  translations,
}: {
  children: React.ReactNode;
  translations: Translations;
}) => {
  const t = (key: keyof Translations): string => {
    return translations[key] || String(key);
  };

  return (
    <I18nContext.Provider value={{ t }}>
      {children}
    </I18nContext.Provider>
  );
};

// The hook to use the translations
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nClientProvider');
  }
  return context;
};
