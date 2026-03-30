import navimg from '../../assets/shopping-cart.png'

const Navber = ({ cartCount }) => {
    return (
        <div className="navbar bg-white sticky top-0 z-50 shadow-sm flex justify-between container mx-auto px-5 md:px-10">
            <div>
                <a className="text-2xl text-[#4F39F6] font-bold cursor-pointer">Digi Tolls</a>
            </div>
            
            <ul className='hidden md:flex gap-8 font-medium text-gray-600'>
                <li className="hover:text-[#4F39F6] cursor-pointer">Products</li>
                <li className="hover:text-[#4F39F6] cursor-pointer">Features</li>
                <li className="hover:text-[#4F39F6] cursor-pointer">Pricing</li>
                <li className="hover:text-[#4F39F6] cursor-pointer">FAQ</li>
            </ul>

            <div className='flex gap-4 items-center border-l pl-6'>
                <div className="relative cursor-pointer">
                    <img src={navimg} alt="cart" className="w-8 h-8" />
                    <span className="badge badge-secondary badge-sm absolute -top-2 -right-2 font-bold ring-2 ring-white">
                        {cartCount}
                    </span>
                </div>
                <button className='btn btn-primary btn-sm md:btn-md rounded-xl'>Get Started</button>
            </div>
        </div>
    );
};
export default Navber;