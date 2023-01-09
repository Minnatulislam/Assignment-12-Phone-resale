import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

      const { img,productName,sellerName, resalePrice,originalPrice,postTime, location,years}= product
    return (
        <div className='mb-5 mt-7'>
        <div className="card card-compact h-[400px]  bg-red-100 flex justify-between  shadow-xl">
        <figure><img className='mt-9' src={img} alt="Shoes" /></figure>
     <div className="card-body">
      <div className='grid justify-items-start '>
      <p className='ml-7 font-bold'> Seller Name : {sellerName}</p>
      <p className='ml-7 font-bold'> Product Name : {productName}</p>
      <p className='ml-7 font-bold'> Location : {location} </p>
      <p className='ml-7 font-bold'>  Resale Price: $ {resalePrice} </p>
      <p className='ml-7  font-bold'> Original Price : $ {originalPrice} </p>
      <p className='ml-7 font-bold'> Youre : {years} </p>
      <p className='ml-7 font-bold'> PostTime : {postTime? postTime:'no time' } </p>
       </div>
     
      </div>
          <div className='flex mb-8 ml-3 '>
          <button className="btn btn-sm btn-primary "> <Link to={`/home/${product}`} >  Advertise</Link> </button>
         
          </div>
    </div>
  
 </div>

    );
};

export default ProductCard;