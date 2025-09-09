import Carousel from '@/components/common/carousel/Carousel';
import styles from '@/app/page.module.scss';
import PrimaryButton from '@/components/common/buttons/PrimaryButton';
import { getI18n } from '@/utils/translations';

export default async function Home() {
  const t = await getI18n();

  const carouselImages = [
    'https://res.cloudinary.com/dik1cnvbo/image/upload/v1756732935/Gemini_Generated_Image_mma08xmma08xmma0_puboep.webp',
    'https://res.cloudinary.com/dik1cnvbo/image/upload/v1756732927/Gemini_Generated_Image_pvo2dwpvo2dwpvo2_wfmzsp.webp',
    'https://res.cloudinary.com/dik1cnvbo/image/upload/v1756732926/Gemini_Generated_Image_otziwgotziwgotzi_wbfv6s.webp',
    'https://res.cloudinary.com/dik1cnvbo/image/upload/v1756732926/Gemini_Generated_Image_6vyyig6vyyig6vyy_pqcxdi.webp',
  ];

  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageContainer}>
        <Carousel
          images={carouselImages}
          className={styles.carouselContainer}
          hideArrow={true}
        />
      </div>
      <div className={styles.contentContainer}>
        <div>
          <h1 className="text-3xl font-serif text-gray-800">
            {t('home_title')}
          </h1>
          <p className="text-gray-500 mt-4">{t('home_subtitle')}</p>
          <PrimaryButton>
            <p>{t('get_started')}</p>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
