import React from 'react';

const Text = () => {
    return (
        <div className='flex justify-center items-center gap-40 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-auto h-[240px]'>
            <div>
                <h1 className='text-[50px] text-white'>50K+</h1>
                <p className='text-white'>Active Users</p>
            </div>
            <div>
                <h1 className='text-[50px] text-white'>200+</h1>
                <p className='text-white'>Premium Tools</p>
            </div>
            <div>
                <h1 className='text-[50px] text-white'>4.9</h1>
                <p className='text-white'>Rating</p>
            </div>
        </div>
    );
};

export default Text;