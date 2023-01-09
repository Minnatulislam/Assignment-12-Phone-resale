import React from 'react';

const CategoCard = ({secondhand,setProductAllData}) => {
   
   
         const { img, productName,sellerName, resalePrice,originalPrice,PostTime, location,years} = secondhand


    return (
        <div className='mb-5 mt-3'>
         <div className="card card-compact h-[400px]  bg-base-200 flex justify-between  shadow-xl">
         <figure><img className='mt-9  w-full' src={img} alt="phone" /></figure>
      <div className="card-body">
       <div className='grid justify-items-start '>
       <p className='ml-7 font-bold'> SellerName: {sellerName}</p>
       <p className='ml-7 font-bold'> ProductName : {productName}</p>
       <p className='ml-7 font-bold'> Location : {location} </p>
       <p className='ml-7 font-bold'>  Resale Price: ${resalePrice} </p>
       <p className='ml-7  font-bold'> Original Price : ${originalPrice} </p>
       <p className='ml-7 font-bold'> Years : {years} </p>
       <p className='ml-7 font-bold'> PostTime : {PostTime? PostTime:'no time' } </p>
      
       
       </div>
      
     </div>
     <div className="card-actions justify-end mb-5 mr-3">
  

     <label
     htmlFor="booking-modal"
        onClick={()=>setProductAllData(secondhand)}
       
        className="btn btn-success btn-sm ">Booking Now
        </label>
     </div>
  </div>

</div>
    
    );
};

export default CategoCard;


    
// ads