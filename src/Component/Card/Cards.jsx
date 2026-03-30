import React, { use, useState } from 'react';
import Products from '../Products/Products';


const Cards = ({cardPromice}) => {
    console.log(cardPromice);
    const products = use(cardPromice)
    // console.log(products);
    // console.log(products);

    const [selectedType,setselectedType] = useState("Products");
    console.log(selectedType,"Products");
    return (
        <div>

         <div className='flex justify-center p-10 gap-5 '>
                    <button
                    onClick={()=>setselectedType("Products")}
                    className={`btn ${selectedType === "Products" ?"bg-gradient-to-r from-[#4F39F6] to-[#9514FA]":""}  rounded-xl`}>Products</button>


                      <button
                    onClick={()=>setselectedType("cart")}
                      className={`btn ${selectedType === "cart" ?"bg-gradient-to-r from-[#4F39F6] to-[#9514FA]":""}  rounded-xl`}>Cart(0)</button>
         </div>


            <Products products ={products}></Products>
        </div>

        
    );
};

export default Cards;