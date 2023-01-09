import { useEffect, useState } from "react";

const useSeller = (email)=>{

    const [isSeller ,setIsSeller]=useState(false);
    const [sellerLoading, setSellerLoading]=useState(true)
   
   useEffect(()=>{

        if(email){

           fetch(` https://server-side-215295.vercel.app/users/seller/${email}`)
           .then(res => res.json())
           .then(data => {
                
            setIsSeller(data.isSeller)
               setSellerLoading(false)
                  
           })
        }
 },[email])
   
 return [isSeller,sellerLoading]

}

export default useSeller;

