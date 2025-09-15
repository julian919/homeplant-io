import mongoose, { Document } from 'mongoose';

// This is the plain object type that should be used across the app
export type Product = {
  _id: string;
  name: string;
  price: number;
  description?: string;
}

// This is the Mongoose document interface, for internal use by Mongoose
interface ProductDocument extends Document {
  name: string;
  price: number;
  description?: string;
}

const ProductSchema = new mongoose.Schema<ProductDocument>({
  name: {
    type: String,
    required: [true, 'Please provide a name for this product.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for this product.'],
  },
  description: {
    type: String,
  },
});

const ProductModel = mongoose.models.Product as mongoose.Model<ProductDocument> || mongoose.model<ProductDocument>('Product', ProductSchema);

export default ProductModel;
