import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';



const AllSeller = () => {

    
       const {data:sellers = [] , refetch} = useQuery({

                 queryKey:['users'],
                 queryFn:async()=>{

                     const res = await fetch(' https://server-side-215295.vercel.app/users')
                     const data = await res.json()
                     return data ;
                 }
       })

         
       const handlarDelete = id =>{
           
               fetch(` https://server-side-215295.vercel.app/sellers/${id}`,{
                  method:'DELETE',
               })
               .then(res => res.json())
               .then(data => {
               
                  if(data.acknowledged){

                       toast.success('delete duyer Successfully')
                       refetch()
                  }
                   
               })
               
       }


       const handdlar = (id)=>{

              const agrree = window.confirm('are you sure ai email veify korben')
             
              console.log(agrree)
       }
      
    return (
        <div>
            <h1 className='text-2xl mt-2'> All Seller  </h1>
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
     
     {   sellers &&
           sellers.map((seller,i) =>  <tr key={seller._id} >
            <th> {i+1} </th>
            <td>{seller.name} </td>
            <td>{seller.email}</td>
            <td>  Verify </td>
          
            <td className='text-white'> <button className=' btn  btn-xs btn-primary' onClick={()=>handlarDelete(seller._id)} >  Delete </button> </td>
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

export default AllSeller;