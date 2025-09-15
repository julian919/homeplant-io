import mongoose, { Document } from 'mongoose';
import { VerificationContext } from '@/data/enums/verification';

// The plain object type for use across the app
export type Verification = {
  _id: string;
  email: string;
  otp: string;
  context: VerificationContext; // Use the specific type here
  expiresAt: Date;
};

// Mongoose document interface
interface VerificationDocument extends Document {
  email: string;
  otp: string;
  context: VerificationContext; // And here
  expiresAt: Date;
}

const VerificationSchema = new mongoose.Schema<VerificationDocument>({
  email: {
    type: String,
    required: [true, 'Please provide an email address.'],
  },
  otp: {
    type: String,
    required: [true, 'Please provide the OTP.'],
  },
  context: {
    type: String,
    required: [true, 'Please provide the verification context.'],
    enum: Object.values(VerificationContext), // Use Object.values for Mongoose enum validation
  },
  expiresAt: {
    type: Date,
    required: [true, 'Please provide an expiration time.'],
    index: { expires: '10m' },
  },
});

const VerificationModel =
  (mongoose.models.Verification as mongoose.Model<VerificationDocument>) ||
  mongoose.model<VerificationDocument>('Verification', VerificationSchema);

export default VerificationModel;
