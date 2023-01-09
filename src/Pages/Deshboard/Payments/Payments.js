import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payments = () => {
   
     const bookingProduct = useLoaderData()
       
           const {productName,price,location}=bookingProduct
         
                              
          const stripePromise = loadStripe(process.env.REACT_APP_StripePublibleKey);

          
    return (
        <div className='  mt-20 h-[400px] ' >
                      <div className=' bg-slate-300 p-20' >
                      <h1 className='text-3xl mb-7 text-green-500'>  Payment page </h1>
                      <h1 className='text-2xl mb-3'> Product Name : {productName} </h1>
                      <p> <strong>${price}</strong> {location} </p>


                      <div className='w-96 mt-7 bg-slate-600 h-36 p-5 text-white'>
                       <Elements stripe={stripePromise}>

                      <CheckoutForm
                         bookingProduct={bookingProduct}
                      />

                 </Elements>
                  </div>

                      </div>

                    
        </div>
    );
};

export default Payments;