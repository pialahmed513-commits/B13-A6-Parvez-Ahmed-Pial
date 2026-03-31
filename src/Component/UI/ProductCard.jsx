import { MdOutlineDone } from "react-icons/md";
const ProductCard = ({ product, handleAddToCart, cart }) => {
    const isInCart = cart.some(item => item.id === product.id);

    return (
        <div className="card bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-100 rounded-[32px] overflow-hidden group">
            <div className="card-body p-8">
                <div className='flex justify-between items-start mb-4'>
                    <div className="text-5xl bg-gray-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-blue-50 transition-colors">
                        {product.icon}
                    </div>
                    <span className={`badge ${product.tagType} font-bold p-3 uppercase text-[10px] tracking-widest`}>
                        {product.tag}
                    </span>
                </div>

                <h2 className="text-2xl font-black text-gray-800">{product.name}</h2>
                <p className="text-gray-500 text-sm mt-2 h-12 leading-relaxed">{product.description}</p>
                
                <div className="mt-6">
                    <span className="text-4xl font-black text-[#4F39F6]">${product.price}</span>
                    <span className="text-gray-400 font-medium"> / {product.period}</span>
                </div>

                <div className="divider my-6 opacity-30"></div>
                
                <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                            <span className="text-green-500 text-lg"><MdOutlineDone /></span> {feature}
                        </li>
                    ))}
                </ul>

                <button 
                    onClick={() => handleAddToCart(product)}
                    className={`btn w-full rounded-2xl border-none text-white text-lg h-14 ${isInCart ? 'btn-disabled bg-gray-300' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 shadow-lg shadow-indigo-200'}`}
                >
                    {isInCart ? 'Added to Cart' : 'Buy Now'}
                </button>
            </div>
        </div>
    );
};
export default ProductCard;