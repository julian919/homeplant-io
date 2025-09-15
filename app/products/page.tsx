import { getProducts, createProduct, deleteProduct } from './actions';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Products</h1>

      <h2 style={{ marginTop: '2rem' }}>Add Product</h2>
      <form action={createProduct} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '0.5rem' }}>
        <input type="text" name="name" placeholder="Product Name" required style={{ padding: '0.5rem' }} />
        <input type="number" name="price" placeholder="Price" required style={{ padding: '0.5rem' }} />
        <textarea name="description" placeholder="Description" style={{ padding: '0.5rem' }}></textarea>
        <button type="submit" style={{ padding: '0.5rem', cursor: 'pointer' }}>Add Product</button>
      </form>

      <h2 style={{ marginTop: '2rem' }}>Products List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product._id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>{product.name}</strong> - ${product.price}
              <p>{product.description}</p>
            </div>
            <form action={async () => {
              'use server'
              await deleteProduct(product._id)
            }}>
              <button type="submit" style={{ padding: '0.5rem', cursor: 'pointer', backgroundColor: '#ffdddd' }}>Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
