import dbConnect from '@/utils/mongodb';
import ProductModel, { Product as ProductType } from '@/data/database/product/product.model';

// A type for the product data when creating/updating
// This is useful for ensuring type safety when passing data to the repository
type ProductData = Omit<ProductType, '_id'>;

async function create(data: ProductData): Promise<ProductType> {
  await dbConnect();
  // The `create` method returns a full Mongoose document
  const newDoc = await ProductModel.create(data);
  // We convert it to a plain object to be consistent with other methods
  return newDoc.toObject() as ProductType;
}

async function getAll(): Promise<ProductType[]> {
  await dbConnect();
  // Using .lean() returns plain JavaScript objects, not Mongoose documents.
  // This is faster and further decouples the repository from the ORM.
  const results = await ProductModel.find({}).lean();
  return results.map((doc) => doc.toObject()) as ProductType[];
}

async function update(
  id: string,
  data: Partial<ProductData>
): Promise<ProductType | null> {
  await dbConnect();
  const updatedDoc = await ProductModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  return updatedDoc?.toObject() as ProductType;
}

async function remove(id: string): Promise<ProductType | null> {
  await dbConnect();
  const deletedDoc = await ProductModel.findByIdAndDelete(id).lean();

  return deletedDoc?.toObject() as ProductType;
}

// We export an object containing all our repository methods
export const ProductRepository = {
  create,
  getAll,
  update,
  remove,
};
