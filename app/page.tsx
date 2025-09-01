'use client';
import Image from "next/image";
import styles from './page.module.scss';
import PrimaryButton from '@/components/common/buttons/PrimaryButton';
import { useTranslations } from '@/hooks/use-translations';

export default function Home() {
  const t = useTranslations();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/plant.jpg"
          alt={t('home.plant_alt')}
          width={1440}
          height={400}
          style={{objectFit: 'cover', width: '100%', height: '100%'}}
        />
      </div>
      <div className={styles.contentContainer}>
        <div>
            <h1 className="text-3xl font-serif text-gray-800">{t('home.title')}</h1>
            <p className="text-gray-500 mt-4">{t('home.subtitle')}</p>
            <PrimaryButton>
            {t('home.cta')}
            </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

