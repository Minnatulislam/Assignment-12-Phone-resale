import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {

    const {data:buyers = [] , refetch} = useQuery({

        queryKey:['buyers'],
        queryFn:async()=>{

            const res = await fetch(' https://server-side-215295.vercel.app/buyers',{

             
            })
            const data = await res.json()
            return data ;
        }
})


     const buyerDelete=id =>{

        fetch(` https://server-side-215295.vercel.app/buyers/${id}`,{
            method:'DELETE',
         })
         .then(res => res.json())
         .then(data => {
         
            if(data.acknowledged){

                 toast.success('delete Successfully')
                 refetch()
            }
             
         })
     }

  

    return (
        <div>
         <h1 className='text-2xl'> Buyer page </h1>
        <div className="overflow-x-auto">
        <table className="table w-full mt-4 ">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Verify</th>
        <th> Action </th>
      </tr>
    </thead>
    <tbody>
     
     { 
     buyers?.length  &&
           buyers?.map((buyer,i) =>  <tr key={buyer._id} >
            <th> {i+1} </th>
            <td>{buyer.name} </td>
            <td>{buyer.email}</td>
            <td> verify </td>
            <td className='text-white'> <button className=' btn  btn-xs btn-primary' onClick={()=>buyerDelete(buyer._id)} >  Delete </button> </td>
            <td> 
                    
            </td>
           
          </tr>)
     } 
    
     
    </tbody>
  </table>
  </div>
        </div>
    );
};

export default AllBuyer;