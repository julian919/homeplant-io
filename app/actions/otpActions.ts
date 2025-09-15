'use server';

import { generateAndSendOtp } from '@/services/verification/otp.service';
import {
  SendOtpPayload,
  SendOtpPayloadSchema,
  VerifyOtpPayload,
  VerifyOtpPayloadSchema,
} from '@/data/types/otp';
import { FormState } from '@/data/types/form';
import z from 'zod';

/**
 * A single, reusable Server Action to send an OTP for different scenarios.
 * @param data An object containing the user's email and the verification context.
 * @returns A FormState object with a success or error message.
 */
const sendOtpAction = async (data: SendOtpPayload): Promise<FormState> => {
  const validatedFields = SendOtpPayloadSchema.safeParse(data);

  if (!validatedFields.success) {
    const errors = z.flattenError(validatedFields.error).fieldErrors;

    return {
      status: 'error',
      message: 'Invalid input. Please check the fields.',
      errors: errors,
    };
  }

  const { email, context } = validatedFields.data;
  const result = await generateAndSendOtp(data);

  if (result.success) {
    return {
      status: 'success',
      message: result.message,
    };
  } else {
    return {
      status: 'error',
      message: result.message,
    };
  }
};

const verifyOtpAction = async (
  data: VerifyOtpPayload
): Promise<FormState> => {
  const validatedFields = VerifyOtpPayloadSchema.safeParse(data);

  if (!validatedFields.success) {
    const errors = z.flattenError(validatedFields.error).fieldErrors;

    return {
      status: 'error',
      message: 'Invalid otp. Please check the fields.',
      errors: errors,
    };
  }
};

export { sendOtpAction };
