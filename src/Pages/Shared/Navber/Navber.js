import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navber = () => {
   const {user,userLogout} = useContext(AuthContext)
     
    const handlarUserLogout=()=>{
        
      userLogout()
      .then(()=>{

      }) 
      .catch((error)=>{

        console.error(error)
      })
    }
    
    return (
        <div className="navbar text-fuchsia-500 bg-stone-800 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
           
            <li><Link to="/">Home</Link></li>
           <li><Link to='/blog' >Blog</Link></li>
           
          {
              user?.uid? <>
                <li><Link to='/deshboard' >Deshboard</Link></li>
                
                   <li> <Link to='/login' > <button onClick={handlarUserLogout}>LogOut</button> </Link> </li>            
               </>
                   :<li><Link to="/login">Login</Link></li>
          }
           
            </ul>
          </div>
         
          <Link to='/' className="btn btn-ghost normal-case text-xl "> PhoneResale </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0  ">
            
          <li><Link to="/">Home</Link></li>

        {user?.uid? <> <li> <Link to='/deshboard'> Deshboard </Link> </li>
         <button onClick={handlarUserLogout}>Sign out</button>
        </>  : <li><Link to="/login" >Login</Link></li>}

         <li><Link to='/blog'>Blog</Link></li>
          
          </ul>

        
        </div>
        
            <label htmlFor="deshboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            
          </label>
            
            

      </div>
    );
};

export default Navber;