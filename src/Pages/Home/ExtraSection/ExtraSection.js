import React from 'react';

const ExtraSection = () => {
    return (
        <div>
        <div className="hero my-7">
        <div className="hero-content  flex-col lg:flex-row">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaLSOJHeyrmPL0d6mjjJEpFcXiXNncAtjSxSL04iMpn-NZfx36JFv0gPtE3oyZRQVSUk&usqp=CAU" alt='' className=" lg:w-1/2 md:w-full h-80 rounded-lg shadow-2xl" />
       <div className='lg:w-1/2 md:w-full'>
         <h1 className="text-3xl font-bold text-white mb-4">Resale Value of Your Phones</h1>
         <p className="font-semi-bold text-white text-justify">Here are a few effective tips that can lead to a positive buying experience for you with less likelihood of a second hand or refurbished purchase gone horribly ...
.</p>
         <button className="btn bg-orange-500 text-black text-semi-bold mt-9">About us</button>
       </div>
     </div>
   </div>
           </div>
    );
};

export default ExtraSection;