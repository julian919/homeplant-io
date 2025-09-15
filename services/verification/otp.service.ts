import {
  create,
  deleteExisting,
  findValid,
} from '@/data/database/verification/verification.repository';
import { SendOtpPayload, VerifyOtpPayload } from '@/data/types/otp';
import { brevoClient } from '@/lib/brevo';
import * as brevo from '@getbrevo/brevo';

/**
 * This is the core, reusable function for sending an OTP.
 * It is not a Server Action and can be called from anywhere on the server.
 *
 * @param email The recipient's email address.
 * @param context The purpose of the OTP (e.g., 'LOGIN', 'REGISTER').
 * @returns An object indicating success or failure.
 */
export const generateAndSendOtp = async (data: SendOtpPayload) => {
  const { email, context } = data;
  // Basic email validation
  if (!email || !email.includes('@')) {
    return { success: false, message: 'Invalid email address provided.' };
  }

  try {
    // 1. Delete any old OTPs for this user/context to ensure only one is valid.
    await deleteExisting(data);

    // 2. Generate a 6-digit OTP and its expiration time (10 minutes from now).
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // 3. Save the new OTP to your database via the repository.
    await create({
      email,
      otp,
      context,
      expiresAt,
    });

    // 4. Send the email via Brevo
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.to = [{ email: email }];
    sendSmtpEmail.templateId = 1; // IMPORTANT: Make sure template #1 exists in your Brevo account
    sendSmtpEmail.params = { otp_code: otp }; // IMPORTANT: Make sure your template uses the 'otp_code' parameter

    await brevoClient.sendTransacEmail(sendSmtpEmail);

    return { success: true, message: 'OTP has been sent.' };
  } catch (error) {
    console.error(`Failed to send OTP for context '${context}':`, error);
    return { success: false, message: 'An internal error occurred.' };
  }
};

export const verifyOtp = async (data: VerifyOtpPayload) => {
  try {
    const verification = await findValid(data);

    if (!verification) {
      return { success: false, message: 'OTP Incorrect.' };
    }

    return {
      success: true,
      message: 'OTP successfully verified',
    };
  } catch (error) {
    console.error(`Failed to verify OTP for ${data}:`, error);
    return { success: false, message: 'An internal error occurred.' };
  }
};
