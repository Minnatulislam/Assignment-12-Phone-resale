import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaTwitter, FaYoutube,  } from 'react-icons/fa';


const Footer = () => {
    return (
      
     
      <div className=" p-10 bg-black  text-white container ">

    
     <footer className="footer pb-5" >
     <span className='pt-2 gap-5  my-3 d-flex flex-lg-row   justify-center align-center text-emerald-700 ' > 
                    
                    <FaGoogle className='me-2 fs-3  '  />
                     <FaYoutube className='me-2 fs-3 '/>
                     <FaTwitter className=' fs-4 ' />
                    </span>
 
  <div>
    <span className="footer-title">Categories</span> 
    < Link className="link link-hover">Apple</Link> 
    <Link className="link link-hover">Nokia</Link> 
    <Link className="link link-hover"> Symphony </Link> 
 
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover"> Texlay </Link> 
    <Link className="link link-hover"> Maxlery </Link> 
    <Link className="link link-hover"> apple</Link> 
    
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div>

</footer>

<div className='text-center pt-5 pb-5'>
                <p>Copyright © 2022 - All right reserved by ABC Market Industries Ltd</p>
            </div>
        </div>
       
    );
};

export default Footer;