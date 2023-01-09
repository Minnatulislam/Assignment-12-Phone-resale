import { createBrowserRouter } from "react-router-dom";
import DeshboardLayout from "../Layout/DeshboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Deshboard/AddProduct/AddProduct";
import AllBuyer from "../Pages/Deshboard/AllBuyer/AllBuyer";
import AllSeller from "../Pages/Deshboard/AllSeller/AllSeller";

import MyOrders from "../Pages/Deshboard/MyOrders/MyOrders";
import MyProduct from "../Pages/Deshboard/MyProduct/MyProduct";
import Payments from "../Pages/Deshboard/Payments/Payments";
import ReportedItem from "../Pages/Deshboard/ReportedItem/ReportedItem";
import Category from "../Pages/Home/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorCheck from "../Pages/Shared/ErrorCheck/ErrorCheck";
import Signup from "../Pages/Signup/Signup";



export const router = createBrowserRouter([
     {path:'/', element: <Main></Main>, 
     errorElement:<ErrorCheck></ErrorCheck>, 
     children:[ 
        {path:'/', element:<Home></Home> },
        {path:'/home/:id', element:<Home></Home> ,
        loader:({params})=> fetch(` https://server-side-215295.vercel.app/sellerProducts/${params.id}`)
      },
          
        {path:'/login', element:<Login></Login>},
        {path:'/signup', element:<Signup></Signup>},

        {path:'/category/:id', element:<Category></Category>  ,
        loader:({params})=> fetch(` https://server-side-215295.vercel.app/categories/${params.id}`)
     
      },

       

        {path:'/blog',element:<Blog></Blog>}

     ] },

     {path:'/deshboard', element: <DeshboardLayout></DeshboardLayout>, children:[

     {path:'/deshboard/myOrders', element: <MyOrders> </MyOrders>  },
     {path:'/deshboard/addProduct', element:<AddProduct></AddProduct>     },
     {path:'/deshboard/myProduct', element: <MyProduct></MyProduct>   },
     {path:'/deshboard/allSeller', element:  <AllSeller></AllSeller>   },
     {path:'/deshboard/allBuyer', element:   <AllBuyer></AllBuyer>   },
     {path:'/deshboard/reportedItem', element:  <ReportedItem></ReportedItem>   },
     
      
     {path:'/deshboard/payments/:id', element:  <Payments></Payments>  ,
     
     loader:({params})=> fetch(` https://server-side-215295.vercel.app/bookings/${params.id}`)  
    }
    ] }
])