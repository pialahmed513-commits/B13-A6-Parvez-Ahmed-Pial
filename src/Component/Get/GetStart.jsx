import React from 'react';
import getman from '../../assets/user.png';
import product from '../../assets/package.png';
import rocket from '../../assets/rocket.png';

const GetStart = () => {
    return (
        <div className="py-12 px-4">
       
            <div className='flex flex-col justify-center items-center mb-10 text-center'>
                <h1 className='text-3xl md:text-4xl font-bold '>Get Started in 3 Steps</h1>
                <p className=' mt-2'>Start using premium digital tools in minutes, not hours.</p>
            </div>

      
            <div className='flex flex-wrap justify-center gap-8'>
                
        
                <div className='flex flex-col justify-center items-center p-6 h-[320px] w-full max-w-[350px] bg-white rounded-xl shadow-2xl text-center '>
                    <img src={getman} alt="User" className="w-16 h-16 mb-4 object-contain" />
                    <h2 className='text-2xl font-bold'>Create Account</h2>
                    <p className='text-gray-500 mt-3'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

           
                <div className='flex flex-col justify-center items-center p-6 h-[320px] w-full max-w-[350px] bg-white rounded-xl shadow-2xl text-center'>
                    <img src={product} alt="Package" className="w-16 h-16 mb-4 object-contain" />
                    <h2 className='text-2xl font-bold'>Choose Products</h2>
                    <p className='text-gray-500 mt-3'>Browse our catalog and select the tools that fit your needs.</p>
                </div>

           
                <div className='flex flex-col justify-center items-center p-6 h-[320px] w-full max-w-[350px] bg-white rounded-xl shadow-2xl text-center'>
                    <img src={rocket} alt="Rocket" className="w-16 h-16 mb-4 object-contain" />
                    <h2 className='text-2xl font-bold'>Start Creating</h2>
                    <p className='text-gray-500 mt-3'>Download and start using your premium tools immediately.</p>
                </div>

            </div>
        </div>
    );
};

export default GetStart;