import { z } from 'zod';
import { VerificationContext } from '@/data/enums/verification';

export const SendOtpPayloadSchema = z.object({
  email: z.email({ message: 'Please enter a valid email address.' }),
  context: z.nativeEnum(VerificationContext),
});

export type SendOtpPayload = z.infer<typeof SendOtpPayloadSchema>;

export const VerifyOtpPayloadSchema = z.object({
  email: z.email({ message: 'Please enter a valid email address.' }),
  context: z.nativeEnum(VerificationContext),
  otp: z.string().regex(/^\d{6}$/, { message: 'OTP must be a 6-digit number.' }),
});

export type VerifyOtpPayload = z.infer<typeof VerifyOtpPayloadSchema>;