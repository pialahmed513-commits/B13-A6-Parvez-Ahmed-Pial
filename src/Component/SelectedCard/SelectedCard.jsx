const SelectedCard = ({ cart, handleRemove, handleCheckout }) => {
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="max-w-3xl mx-auto py-10 animate-fade-in">
            <h2 className="text-3xl font-black mb-10 text-center text-gray-800 ">Your Shopping Cart</h2>
            
            {cart.length === 0 ? (
                <div className="text-center py-24 bg-gray-50 rounded-[40px] border-4  border-gray-200">
                    <p className="text-3xl font-bold text-gray-300 italic mb-4">Cart is empty! </p>
                    <p className="text-gray-400">Add some tools to power up your workflow.</p>
                </div>
            ) : (
                <div className="space-y-6">
                 
                    <div className="flex flex-col gap-5">
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center justify-between p-6 bg-white shadow-lg rounded-3xl border border-gray-50 hover:border-blue-100 transition-all">
                                <div className="flex items-center gap-6">
                                    <span className="text-5xl bg-gray-100 p-3 rounded-2xl">{item.icon}</span>
                                    <div>
                                        <h4 className="font-extrabold text-xl text-gray-800">{item.name}</h4>
                                        <p className="text-[#4F39F6] font-black text-lg">${item.price}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleRemove(item.id)} 
                                    className="btn btn-circle btn-outline btn-error btn-sm hover:bg-error hover:text-white"
                                    title="Remove Item"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                   
                    <div className="bg-white p-10 rounded-[40px] shadow-2xl  mt-12">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="text-center md:text-left">
                                <p className="text-gray-500 ">Total Products: {cart.length}</p>
                                <h3 className="text-5xl font-black text-gray-900">Total: <span className="text-[#4F39F6]">${totalAmount}</span></h3>
                            </div>
                            <button 
                                onClick={handleCheckout} 
                                className="btn btn-lg px-12 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-2xl"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default SelectedCard;