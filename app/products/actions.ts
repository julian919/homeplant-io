'use server';

import { ProductRepository } from '@/data/database/product/product.repository';
import { revalidatePath } from 'next/cache';

// CREATE
export async function createProduct(formData: FormData) {
  const newProduct = {
    name: String(formData.get('name') || ''),
    price: Number(formData.get('price') || 0),
    description: String(formData.get('description') || ''),
  };

  await ProductRepository.create(newProduct);
  revalidatePath('/products');
}

// READ (This would typically be done directly in a Server Component page)
export async function getProducts() {
  // Because the repository uses .lean(), the result is already a plain object.
  return ProductRepository.getAll();
}

// UPDATE
export async function updateProduct(id: string, formData: FormData) {
  const updatedProduct = {
    name: String(formData.get('name') || ''),
    price: Number(formData.get('price') || 0),
    description: String(formData.get('description') || ''),
  };

  await ProductRepository.update(id, updatedProduct);
  revalidatePath('/products');
}

// DELETE
export async function deleteProduct(id: string) {
  await ProductRepository.remove(id);
  revalidatePath('/products');
}
