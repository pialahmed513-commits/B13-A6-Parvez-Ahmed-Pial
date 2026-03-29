import React from 'react';
import navimg from '../../assets/shopping-cart.png'
const Navber = () => {
    return (
        <div>
 <div className="navbar bg-base-100 shadow-sm flex justify-between">
  <div className="">
    <a className="text-2xl text-[#4F39F6] font-semibold pl-10">Digi Tolls</a>
  </div>
  <ul className='flex gap-7'>
    <li>Products</li>
    <li>Features</li>
    <li>Pricing</li>
    <li>Testimonials</li>
    <li>FAQ</li>
  </ul>

  
 

  <div className='flex gap-3 pr-5'>

    <img src={navimg} alt="" />
    <ul>
    <li className='font-bold mt-1'>Login</li>
    </ul>
    <div className=''> 
          <button className='btn btn-primary'>Get Started</button>
    </div>
  </div>
  

  
</div>
        </div>
    );
};

export default Navber;