import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({bookingProduct}) => {
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const {price,email,name, _id}= bookingProduct


    useEffect(() => {
     
        fetch(" https://server-side-215295.vercel.app/create-payment-intent", {
          method: "POST",
          headers: {
             "content-type": "application/json",
               
               authorization:`bearer ${localStorage.getItem('accessTokens')}`
            },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);


    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {

           toast.error(error.message)
        }

      
        setProcessing(true)

        const {paymentIntent, error:cardConfirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {

                 name:name,
                   email:email
                   
                },
              },
            },
          );    
          
          

         

          if(paymentIntent.status === "succeeded" ){
            const payment = {

                paymentIntent: paymentIntent.id,
                bookingId :_id,
                  email,
                  price
              }

              fetch(' https://server-side-215295.vercel.app/payments',{
                
                method:'POST',
                headers:{
                  
                   'content-type':'application/json',
                   authorization:`bearer ${localStorage.getItem('accessTokens')} `
                },

                body:JSON.stringify(payment)
           })
           .then(res => res.json())
           .then(data =>{

            if(data.acknowledged){
            
           toast.success('your payment Successfully')
          
            }
           })
           setProcessing(false)
          }   
          
          
    }
    return (
        <div>
     <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
                fontSize: '20px',
                color: '#D3C5C2',
                '::placeholder': {
                  color: '#111213',
                },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='mt-9 btn btn-sm font-bold btn-primary' type="submit" disabled=
      {!stripe || !clientSecret || processing  }>
        Pay
      </button>
    </form>
 
    </div>
  );
};
 
       
    

export default CheckoutForm;