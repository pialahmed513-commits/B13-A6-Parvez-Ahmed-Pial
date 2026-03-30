import React from 'react';
import ProductCard from '../UI/ProductCard';


const Products = ({products}) => {
    console.log('product',products);


     return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto'>
            {products.map((product) => {
                return (
                    <ProductCard product ={product}></ProductCard>
                )
            })}
        </div>
    );
};

export default Products;