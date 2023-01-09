import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorCheck = () => {
    const error = useRouteError();
    return (
        <div>

       <div className="card w-96 mx-auto mt-32  bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
      <div className='flex justify-center items-center h-full'>
            
              <h1 className='text-7xl text-red-500'>404</h1>
              
            </div>
            <p>{error.statusText || error.message} </p>
  </div>
  </div>
</div>
    );
};

export default ErrorCheck;