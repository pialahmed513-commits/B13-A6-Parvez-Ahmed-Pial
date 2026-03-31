import React from 'react';

const Cti = () => {
    return (
        <div className='w-full py-20 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>
            
            <div className='flex flex-col justify-center items-center text-center max-w-3xl mx-auto'>
                <h1 className='text-3xl md:text-4xl font-bold'>
                    Ready to Transform Your Workflow?
                </h1>

                <p className='mt-4'>
                    Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.
                </p>

                <div className='flex gap-4 mt-6'>
                    <button className='bg-white text-black px-5 py-2 rounded-xl font-semibold'>
                        Explore Products
                    </button>

                    <button className='border border-white px-5 py-2 rounded-xl font-semibold'>
                        View Pricing
                    </button>
                </div>

                <p className='mt-6 text-sm'>
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>

        </div>
    );
};

export default Cti;