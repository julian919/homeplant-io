import { getI18n } from '@/utils/translations';
import styles from './page.module.scss';
import RegisterForm from '@/components/register/form';

export default async function RegisterPage() {
  const t = await getI18n();

  return (
    <div className="flex h-full">
      <div
        className={`hidden lg:block lg:flex-1 bg-cover bg-center ${styles.imageContainer} ${styles['fade-in']}`}
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dik1cnvbo/image/upload/v1756732926/Gemini_Generated_Image_otziwgotziwgotzi_wbfv6s.webp')`,
          animationDelay: '0.1s',
        }}
      />
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm">
          <h1
            className={`${styles.title} ${styles['fade-in']}`}
            style={{ animationDelay: '0.2s' }}
          >
            {t('create_account')}
          </h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
