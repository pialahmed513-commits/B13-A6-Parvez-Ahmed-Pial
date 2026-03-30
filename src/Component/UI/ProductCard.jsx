import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div>
             <div className="card-body">

                            <div className='flex justify-between'>
                               <p className="text-3xl">{product.icon}</p>
                                <span className="badge badge-xs badge-warning">
                                    {product.tag}
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold">{product.name}</h2>

                            <p>{product.description}</p>

                            <p className="text-xl font-bold">
                                ${product.price}/{product.period}
                            </p>

                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                {
                                    product.features.map((feature, index) => (
                                        <li key={index}>
                                            ✔ {feature}
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className="mt-6">
                                <button className="btn w-full rounded-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                                    Buy Now
                                </button>
                            </div>

             </div>
        </div>
    );
};

export default ProductCard;