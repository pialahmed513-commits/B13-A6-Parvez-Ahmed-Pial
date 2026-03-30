import ProductCard from '../UI/ProductCard';

const Products = ({ products, handleAddToCart, cart }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    handleAddToCart={handleAddToCart} 
                    cart={cart}
                />
            ))}
        </div>
    );
};
export default Products;