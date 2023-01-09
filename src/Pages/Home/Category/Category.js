import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductBooking from '../ProductBooking/ProductBooking';
import CategoCard from './CategoCard';

const Category = () => {
    const secondhanProducts = useLoaderData()
    console.log(secondhanProducts)
 
    const [productAllData, setProductAllData] = useState(null)
    
    const cancalModal = () =>{

        setProductAllData(null)
}
      
    return (
       <div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {
                 secondhanProducts.map(secondhand =>
                  <CategoCard
                  key={secondhand._id}
                  secondhand={secondhand}
                  setProductAllData={setProductAllData}
                  > 
                 </CategoCard> )
              }
        </div>

              {   productAllData &&
                   <ProductBooking
                   productAllData = {productAllData}
                   cancalModal={cancalModal}

                   
                   >

                   </ProductBooking>
              }
       </div>

          
    );
};

export default Category;