import PrimaryButton from '@/components/common/buttons/PrimaryButton';
import PrimaryInput from '@/components/common/inputs/PrimaryInput';
import styles from './page.module.scss';
import { getI18n } from '@/utils/translations';

export default async function LoginPage() {
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
            {t('login')}
          </h1>
          <div
            className={`mb-6 ${styles['fade-in']}`}
            style={{ animationDelay: '0.3s' }}
          >
            <PrimaryInput
              id="email"
              name="email"
              type="email"
              label={t('email')}
              placeholder={t('email')}
            />
          </div>
          <div
            className={`mb-6 ${styles['fade-in']}`}
            style={{ animationDelay: '0.4s' }}
          >
            <PrimaryInput
              id="password"
              name="password"
              type="password"
              label={t('password')}
              placeholder={t('password')}
            />
          </div>
          <div
            className={`mt-8 ${styles['fade-in']}`}
            style={{ animationDelay: '0.5s' }}
          >
            <PrimaryButton>
              <p>{t('login')}</p>
            </PrimaryButton>
          </div>
          <p
            className={`${styles.signupText} ${styles['fade-in']}`}
            style={{ animationDelay: '0.6s' }}
          >
            {t('login_signup_text')} <a href="/signup">{t('signup_link')}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
