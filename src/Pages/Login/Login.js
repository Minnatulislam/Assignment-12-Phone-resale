import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../CustomHook/useToken';

const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm()

        const [loginUser, setLoginUser]=useState('')

       const [token]=useToken(loginUser)
        const location = useLocation()
        const navigate = useNavigate()
    
        const from = location.state?.from?.pathname || '/'
            
        if(token){
          navigate(from, {replace:true});
        }
      const {userLogin ,userGoogleLogin} = useContext(AuthContext)
      const handlarLogin = (data)=>{

        userLogin(data.email, data.password)
        .then((result)=> {
           const user = result.user;
           console.log(user)
           toast.success('User Login Succussfully')

           // Loin page Create Jwt Token

           setLoginUser(data.email)
          
        })
         .catch((error)=>{
            console.error(error)
         })
      }


      const handlarGoogleLoing = () =>{

        userGoogleLogin()
        .then(result => {
          const user = result.user;
          console.log(user)
            // Google page Create Jwt Token
          setLoginUser(user?.email)
          if (user) {
            const userInfo = {
                name: user?.displayName,
                email: user?.email,
                role: 'buyer'
            };
            fetch(' https://server-side-215295.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        // setCreateUserEmail(user?.email);
                        toast.success('Account Create successfull with save user')
                        navigate(from, {replace:true});
                    
                      } else {
                        // setCreateUserEmail(user?.email);
                        toast.error(data.message)
                        navigate(from, {replace:true});
                    }
                })
                .catch(err => {
                    console.error(err.message);
                })

        }

        })
        .catch(error =>{
              console.error(error)
        })
      }
      
    return (
        <div className='h-[600px]   flex justify-center items-center'>
                 <div className='w-96 border-2  p-10'>
                 <h2 className='text-2xl text-center'> Login Page </h2>

     <form  onSubmit={handleSubmit(handlarLogin)}>

   <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text text-2xl">Email</span>
  </label>
     <input type="text"
      {...register("email", {required:"Plase your vaild email"}

      )} 
      className="input input-bordered w-full max-w-xs" />
      {/* {errors.mail && <p role="alert">{errors.mail?.message}</p>} */}

      {errors.email && <p role="alert" className='text-red-500'>{errors.email.message}  </p>}
   </div>


   <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-password text-2xl">Password</span>
  </label>
     <input type="password" {...register("password", {required:"Not Password vidation",
    //  maxLength:{value: 1, message:"pleas six digit"}
    })} 

     className="input input-bordered w-full max-w-xs" />
     {errors.password && <p role="alert" className="text-red-600"> {errors.password.message} </p>}
     <label className="label mt-3">

  </label>
         <p className='text-red-600' >  </p>
   </div>
      <input type="submit" className='btn  w-full border-none hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-indigo-500 text-white mt-3' value="Login" />
    </form>

          <p className='mt-3 mb-4'> Now go to  <Link to='/signup' className='text-green-500' > Create New Accout</Link> </p>
    
          
            <button onClick={handlarGoogleLoing}  className='btn btn-outline btn-primary w-full'><FaGoogle className='mr-3' />    CONTINUE WITH GOOGLE</button>
        </div>  
        </div>
    );
};

export default Login;