import PrimaryButton from '@/components/common/buttons/PrimaryButton';
import styles from './page.module.scss';
import { getI18n } from '@/utils/translations';

export default async function LoginPage() {
  const t = await getI18n();

  return (
    <div className="flex h-screen">
      <div
        className={`hidden lg:block lg:flex-1 bg-cover bg-center ${styles.imageContainer} ${styles['fade-in']}`}
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dik1cnvbo/image/upload/v1756732926/Gemini_Generated_Image_otziwgotziwgotzi_wbfv6s.webp')`,
          animationDelay: '0.2s',
        }}
      />
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm">
          <h1
            className={`${styles.title} ${styles['fade-in']}`}
            style={{ animationDelay: '0.4s' }}
          >
            {t('login')}
          </h1>
          <div
            className={`mb-6 ${styles['fade-in']}`}
            style={{ animationDelay: '0.6s' }}
          >
            <label htmlFor="email" className={styles.label}>
              {t('email')}
            </label>
            <input type="email" id="email" className={styles.input} />
          </div>
          <div
            className={`mb-6 ${styles['fade-in']}`}
            style={{ animationDelay: '0.8s' }}
          >
            <label htmlFor="password" className={styles.label}>
              {t('password')}
            </label>
            <input type="password" id="password" className={styles.input} />
          </div>
          <div
            className={`mt-8 ${styles['fade-in']}`}
            style={{ animationDelay: '1.0s' }}
          >
            <PrimaryButton>
              <p>{t('login')}</p>
            </PrimaryButton>
          </div>
          <p
            className={`${styles.signupText} ${styles['fade-in']}`}
            style={{ animationDelay: '1.2s' }}
          >
            {t('login_signup_text')} <a href="/signup">{t('signup_link')}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
