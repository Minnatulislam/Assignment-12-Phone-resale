import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../CustomHook/useToken';

const Signup = () => {
    const {register, formState: { errors }, handleSubmit} = useForm()
    
      
    const {createUser,updateUserProfile, setLoding}=useContext(AuthContext)
       
    const [userEmail, setUserEmail] = useState('')
         const [token]=useToken(userEmail)
    
         const navigate = useNavigate()

         if(token){
           navigate('/')
         }
        

        
    const hanlarSinup = (data)=>{
           
        createUser(data.email, data.password)
        .then((result)=>{
             const user = result.user;
             toast.success('Create User Succussfully')
             
             const userProfile = {
              displayName:data.name

              
             }
             updateUserProfile(userProfile)

             console.log(user)

             
             
       // SignUp page Create Jwt Token

               setUserEmail(data.email)
        })
        .catch((error)=>{
          console.error(error)
        })
             
      const userInfo ={
          name:data.name,
          email:data.email,
          role : data.select,
          
        }
        
         fetch(' https://server-side-215295.vercel.app/users',{

          method: 'POST',
          headers:{
              'content-type':'application/json'
          },
        body:JSON.stringify(userInfo)
         })
         .then(res => res.json() )
         .then(data => {
             
            if(data.acknowledged){

                toast.success('user Info database Save')

            }
             
         })
      
      }

    return (
        <div className='h-[650px] flex justify-center items-center'>
        <div className='w-96 border border-indigo-600  p-7'>
              <h2 className='text-2xl text-center'> Sign up  page</h2>

         <form onSubmit={handleSubmit(hanlarSinup)}>
                       
              <div className="form-control w-full max-w-xs">
              <label className="label">
              <span className="label-text text-1xl">Name </span>
              </label>
              <input type="text"  {...register("name" , {required:"Plase name not valid" } )}   className="input input-bordered w-full max-w-xs" />
                { errors.name && <p className='text-red-600' >{errors.name.message} </p> }
               </div>


            <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text text-1xl">Email                     </span>
            </label>
            <input type="email" {...register("email" ,{required:"your not valid Email"} )} className="input input-bordered w-full max-w-xs" />
              
                {errors.email && <p className='text-red-600' > {errors.email.message} </p>}
            </div>



        <div className="form-control w-full ">
        <label className="label">
        <span className="label-password text-1xl">Password   </span>
        </label>
        <input type="password" {...register("password" , {required:"your password not valid", minLength:{value:6, message:"Pleas six digit give"  },
      
      } )} className="input input-bordered w-full max-w-xs" />
         {errors.password && <p className='text-red-600' > {errors.password.message} </p>}
        

         <div className="form-control w-full ">
              <label className="label">
              <span className="label-text text-1xl">Select</span>
              </label>
              <select type='text' {...register("select" ,{required:true} )} className="select select-bordered w-full max-w-xs">
              <option>buyer</option>
              <option>seller </option>
             
           </select>
              
          </div>
        </div>
        <p className='text-red-500'>  </p>
        <input type="submit" className='btn w-full border-none hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-indigo-500 text-white my-3' value="Sign up" />
        </form>
  
        <p className='mt-3 mb-5'> Already have an Accout <Link to='/login' className='text-green-500'> Login page</Link> </p>

  </div>  
  </div>
    );
};

export default Signup;