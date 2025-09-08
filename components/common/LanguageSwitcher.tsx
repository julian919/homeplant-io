'use client';

import { useCommonStore } from '@/store/common';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { language, setLanguage } = useCommonStore();

  const handleChange = (newLang: 'en' | 'zh') => {
    setLanguage(newLang);
    router.refresh();
  };

  return (
    <select
      value={language}
      onChange={(e) => handleChange(e.target.value as 'en' | 'zh')}
      style={{ color: 'black' }} // Basic styling to make it visible
    >
      <option value="en">English</option>
      <option value="zh">中文</option>
    </select>
  );
}
