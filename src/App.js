
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import './App.css';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      
        <div className='max-w-[1200px]  mx-auto'>
        <RouterProvider router={router} > 
 
     </RouterProvider>
     <Toaster/>
        </div>
    </div>
  );
}

export default App;


//npm i react-router-dom react-hot-toast react-hook-form
//npm i  react-day-picker date-fns firebase daisyui  
