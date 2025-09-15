'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PrimaryButton from '@/components/common/buttons/PrimaryButton';
import PrimaryInput from '@/components/common/inputs/PrimaryInput';
import Link from 'next/link';
import styles from '@/app/register/page.module.scss';
import { useI18n } from '@/components/common/I18nClientProvider';
import { sendOtpAction } from '@/app/actions/otpActions'; // Assuming a consolidated action

export default function RegisterForm() {
  const { t } = useI18n();
  const [serverMessage, setServerMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    email: z.email({ message: t('email_invalid_error') }),
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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerMessage('Sending verification email...');

    // Call the server action with the form data and the specific context
    const result = await sendOtpAction({ ...data, context: 'REGISTER' });

    setServerMessage(result.message);
    setIsSubmitting(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`mb-6 ${styles['fade-in']}`}
          style={{ animationDelay: '0.3s' }}
        >
          <PrimaryInput
            id="email"
            type="email"
            label={t('email')}
            placeholder={t('email_placeholder')}
            {...register('email')}
            error={errors.email?.message}
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
          <PrimaryButton type="submit" disabled={isSubmitting}>
            <p>{isSubmitting ? t('sending') : t('register')}</p>
          </PrimaryButton>
        </div>
      </form>

      {serverMessage && (
        <p
          className={`${styles.serverMessage} ${styles['fade-in']}`}
          style={{ animationDelay: '0.6s' }}
        >
          {serverMessage}
        </p>
      )}

      <p
        className={`${styles.signupText} ${styles['fade-in']}`}
        style={{ animationDelay: '0.7s' }}
      >
        {t('register_login_text')}{' '}
        <Link href="/login" className="underline">
          {t('login_link')}
        </Link>
      </p>
    </>
  );
}
