import dbConnect from '@/lib/mongodb';
import VerificationModel, {
  Verification as VerificationType,
} from '@/data/database/verification/verification.model';

// Type for creating a new verification document
type VerificationData = Omit<
  VerificationType,
  '_id' | 'createdAt' | 'updatedAt'
>;

/**
 * Creates and stores a new OTP verification document.
 * @param data The verification data (email, otp, context, expiresAt).
 * @returns The newly created verification object.
 */
export const create = async (data: VerificationData): Promise<VerificationType> => {
  await dbConnect();
  const newDoc = await VerificationModel.create(data);
  return newDoc?.toObject() as VerificationType;
};

type FindValidArgs = {
  email: string;
  otp: string;
  context: string;
};

/**
 * Finds a valid OTP for a given email, otp, and context.
 * A valid OTP must exist in the database and must not have expired.
 * @param args An object containing the email, otp, and context.
 * @returns The verification document if found and valid, otherwise null.
 */
export const findValid = async ({
  email,
  otp,
  context,
}: FindValidArgs): Promise<VerificationType | null> => {
  await dbConnect();
  const result = await VerificationModel.findOne({
    email,
    otp,
    context,
    expiresAt: { $gt: new Date() }, // Check that the OTP has not expired
  }).lean();

  return result as VerificationType | null;
};

type DeleteExistingArgs = {
  email: string;
  context: string;
};

/**
 * Deletes any existing OTPs for a specific email and context.
 * This is useful to call before creating a new OTP to ensure only one is valid at a time.
 * @param args An object containing the email and context.
 */
export const deleteExisting = async ({
  email,
  context,
}: DeleteExistingArgs): Promise<void> => {
  await dbConnect();
  await VerificationModel.deleteMany({ email, context });
};