import React from 'react';
import { Link } from 'react-router-dom';

const CategoriCard = ({product}) => {
      const {img,name,category,_id}=product
      
    return (
        <div className=' '>
         <div className="card card-compact h-[400px]  bg-orange-300 justify-between shadow-xl">
         <figure><img src={img} className=' w-full rounded ' alt="phone" /></figure>
      <div className="card-body">
    <h2 className="card-title"> Title : {name} </h2>
    <p> </p>
    <div className="card-actions justify-end">
    <Link className="btn btn-outline w-full"  to={`/category/${_id}`} ><button className='text-xl' > {category} </button> </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoriCard;