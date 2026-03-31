import React from 'react';

const Text = () => {
    return (
      
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-full min-h-[240px] py-10'>
            <div className="text-center">
                <h1 className='text-4xl md:text-[50px] text-white font-bold'>50K+</h1>
                <p className='text-white opacity-80'>Active Users</p>
            </div>
            <div className="text-center">
                <h1 className='text-4xl md:text-[50px] text-white font-bold'>200+</h1>
                <p className='text-white opacity-80'>Premium Tools</p>
            </div>
            <div className="text-center">
                <h1 className='text-4xl md:text-[50px] text-white font-bold'>4.9</h1>
                <p className='text-white opacity-80'>Rating</p>
            </div>
        </div>
    );
};

export default Text;