
import React from 'react';


const Advertised = ({productsItems}) => {
         
          
           const { img,ProductName, resalePrice,originalPrice,PostTime, location,year,phone,decrip} =productsItems
 
    return (
        <div>
            
          <div className='my-28'> 
          <h1 className='text-2xl text-indigo-600 text-center'>  Advertised  </h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
            <div className='mb-5 mt-3'>
        <div className="card card-compact h-[400px]  bg-red-100 flex justify-between  shadow-xl">
        <figure><img className='mt-3' src={img} alt="Shoes" /></figure>
     <div className="card-body">
      <div className='grid justify-items-start '>
      <p className='ml-7 font-bold'> Name : {ProductName}</p>
      <p className='ml-7 font-bold'> Location : {location} </p>
      <p className='ml-7 font-bold'>  Resale Price: {resalePrice}Tk </p>
      <p className='ml-7  font-bold'> Original Price : {originalPrice} </p>
      <p className='ml-7 font-bold'> Year : {year} </p>
      <p className='ml-7 font-bold'> PostTime : {PostTime? PostTime:'no time' } </p>
       </div>
     
      </div>
          <div className='flex mb-8 ml-3 '>
          <button className="btn btn-sm btn-primary"> Abilable </button>
         
          </div>
    </div>
  
 </div>
                 
            </div>
          
          
          </div>

        </div>
    );
};

export default Advertised;
