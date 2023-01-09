import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import SpennerPage from '../Pages/Shared/SpennerPage/SpennerPage';

const PrivateRouter = ({children}) => {
    const {user ,  loding} = useContext(AuthContext)
    const location = useLocation()
      
    if(loding){

           return <div><SpennerPage/> </div>
    }
   

       if(user){
         return children
       }

       return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRouter;