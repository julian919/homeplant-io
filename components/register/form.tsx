'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PrimaryButton from '@/components/common/buttons/PrimaryButton';
import PrimaryInput from '@/components/common/inputs/PrimaryInput';
import Link from 'next/link';
import styles from '@/app/register/page.module.scss';
import { useI18n } from '@/components/common/I18nClientProvider';

export default function RegisterForm() {
  const { t } = useI18n();

  const formSchema = z.object({
    username: z.string().min(3, { message: t('username_min_length_error') }),
    password: z.string().min(8, { message: t('password_min_length_error') }),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log('Registration data:', data);
    // TODO: Implement actual registration logic (e.g., API call)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`mb-6 ${styles['fade-in']}`}
          style={{ animationDelay: '0.3s' }}
        >
          <PrimaryInput
            id="username"
            type="text"
            label={t('username')}
            placeholder={t('username_placeholder')}
            {...register('username')}
            error={errors.username?.message}
          />
        </div>
        <div
          className={`mb-6 ${styles['fade-in']}`}
          style={{ animationDelay: '0.4s' }}
        >
          <PrimaryInput
            id="password"
            type="password"
            label={t('password')}
            placeholder={t('password_placeholder')}
            {...register('password')}
            error={errors.password?.message}
          />
        </div>
        <div
          className={`mt-8 ${styles['fade-in']}`}
          style={{ animationDelay: '0.5s' }}
        >
          <PrimaryButton type="submit">
            <p>{t('register')}</p>
          </PrimaryButton>
        </div>
      </form>
      <p
        className={`${styles.signupText} ${styles['fade-in']}`}
        style={{ animationDelay: '0.6s' }}
      >
        {t('register_login_text')}{' '}
        <Link href="/login" className="underline">
          {t('login_link')}
        </Link>
      </p>
    </>
  );
}