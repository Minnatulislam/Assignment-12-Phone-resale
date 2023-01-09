
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
  
    const {user,loding}=useContext(AuthContext)
  
  
    const url = ` https://server-side-215295.vercel.app/bookings?email=${user?.email}`

    const {data:bookings = [] ,refetch } = useQuery({
  
         queryKey :['bookings', user?.email],
         queryFn: async ()=> {
          const res = await fetch(url ,{
            headers:{
              authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
          });
          const data = await res.json() ;
          return  data ;
         
       
         }

       
     })
  
    
       
    return (
        <div className=''>

     <h1 className='text-3xl mt-3'> My Orders </h1>
    <div className="overflow-x-auto">
     <table className="table w-full mt-4 ">
  
    <thead>
      <tr>
        <th></th>
        <th>image</th>
        <th>Title</th>
        <th>price</th>
        <th> Action  </th>
      </tr>
    </thead>
    <tbody>
     
     {  bookings?.length > 0 &&
           bookings?.map((booking,i) =>  <tr key={booking._id} >
            <th> {i+1} </th>
            <td>
            <div className="avatar">
            <div className="w-24 rounded-full">
             <img src={booking.img} alt='' />
           </div>
           </div>
           </td>
            <td>{booking.productName}</td>
            <td> ${booking.price} </td>
            <td> 
            
              {booking.price && !booking.paid && <Link to={`/deshboard/payments/${booking._id}`}> <button className='btn btn-sm btn-primary'> pay</button>  </Link> } 
              {booking.price && booking.paid && <Link> <button className='btn btn-xs text-green-500'>paid</button>  </Link> } 

               </td>
           
          </tr>)
     }
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;