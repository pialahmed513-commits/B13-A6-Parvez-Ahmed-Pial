import React from 'react';
import Bannerimg from '../../assets/banner.png'
import { FcVideoFile } from 'react-icons/fc';

const Banner = () => {
    return (
      
        <div className='flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-20 gap-10 mx-auto px-5 lg:h-[700px] container'>

            <div className='text-center lg:text-left'>
           
                <h1 className='text-4xl md:text-6xl lg:text-[72px] font-semibold leading-tight'>
                    Supercharge Your <br className='hidden lg:block' /> Digital Workflow
                </h1>
                <p className='text-sm md:text-base lg:text-[18px] mt-5'>
                    Access premium AI tools, design assets, templates, and productivity <br className='hidden lg:block' /> 
                    software—all in one place. Start creating faster today
                </p>

                <div className='mt-8 flex justify-center lg:justify-start gap-5'>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white border-none'>
                        Explore Products
                    </button>
                    <button className='btn rounded-2xl'>
                        <FcVideoFile /> Watch Demo
                    </button>
                </div>
            </div>

          
            <div className='w-[500px] max-w-sm mb-10 md:max-w-md lg:max-w-none flex justify-center m'>
                <img src={Bannerimg} alt="Banner" className='w-full h-auto object-contain' />
            </div>
            
        </div>
    );
};

export default Banner;