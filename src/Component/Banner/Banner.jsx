import React from 'react';
import Bannerimg from '../../assets/banner.png'
import { FcVideoFile } from 'react-icons/fc';

const Banner = () => {
    return (
        <div className='flex justify-center items-center mt-20 gap-10 mx-auto h-[700px]'>

            <div className=''>
                <h1 className='text-[72px] font-semibold'>Supercharge Your <br />Digital Workflow</h1>
                <p className='text-[18px]'>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today <br />Explore Products</p>
             

             <div className='mt-5 flex gap-5'>
                <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl'>Explore Products</button>
                <button className='btn rounded-2xl'><FcVideoFile /> Watch Demo</button>
             </div>
               
            </div>

            <div>
                <img src={Bannerimg} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;