import navimg from '../../assets/shopping-cart.png'

const Navber = ({ cartCount }) => {
    return (
        <div className="navbar bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100 py-3 md:py-0">
            <div className="container mx-auto px-4 md:px-10">
             
                <div className="flex flex-wrap items-center justify-between w-full gap-y-4">
                    
              
                    <div className="flex-none">
                        <a className="text-xl md:text-2xl text-[#4F39F6] font-bold cursor-pointer">
                            Digi Tolls
                        </a>
                    </div>
                    
                   
                    <div className="order-3 md:order-2 w-full md:w-auto">
                        <ul className='flex justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 font-medium text-gray-600 text-sm md:text-base'>
                            <li className="cursor-pointer">Products</li>
                            <li className="cursor-pointer">Features</li>
                            <li className="cursor-pointer">Pricing</li>
                            <li className="cursor-pointer">FAQ</li>
                        </ul>
                    </div>

                  
                    <div className="order-2 md:order-3 flex gap-3 md:gap-4 items-center border-l-0 md:border-l md:pl-6 border-gray-200">
                        <div className="relative cursor-pointer group shrink-0">
                            <img 
                                src={navimg} 
                                alt="cart" 
                                className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-105 transition-transform" 
                            />
                            <span className="badge badge-secondary badge-xs sm:badge-sm absolute -top-1 sm:-top-2 -right-1 sm:-right-2 font-bold ring-2 ring-white">
                                {cartCount}
                            </span>
                        </div>
                        <button className='btn btn-primary btn-sm md:btn-md rounded-lg md:rounded-xl text-xs md:text-base px-3 md:px-6 whitespace-nowrap'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;