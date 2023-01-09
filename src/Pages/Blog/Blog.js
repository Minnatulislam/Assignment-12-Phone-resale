import React from 'react';

const Blog = () => {
    return (
        
    <div className='m-5'>
      <div className="card card-side bg-orange-200 w-full shadow-xl">
      <div className="card-body">
      <div className=' grid justify-items-start'>
      <h2 className=" font-bold mt-2 text-xl text-justify "> 1 . What are the different ways to manage a state in a React application?</h2>
      <h2 className="text-2xl grid justify-start  ">Not only are there are a lot of different kinds of state,
       but there often dozens of ways of managing each kind. In modern React, we build our applications with functional components. Components are themselves 
       JavaScript functions, independent and reusable bits of code.The purpose of building the application with components is to have a modular architecture, with a clear 
       separation of concerns. This makes code easier to understand.</h2>
      </div>
   </div>
  </div>

 
  <div className="card card-side bg-orange-200 mt-5 w-full shadow-xl">
      <div className="card-body">
      <div className=' grid justify-items-start'>
      <h2 className=" font-bold mt-2 text-xl text-justify "> 2 . How does prototypical inheritance work?</h2>
      <h2 className=" text-2xl grid justify-start ">Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object
     can inherit the properties and methods of another object. .</h2>
      </div>
   </div>
  </div>



  <div className="card card-side bg-orange-200 mt-5 w-full shadow-xl">
      <div className="card-body">
      <div className=' grid justify-items-start'>
      <h2 className=" font-bold mt-2 text-xl text-justify "> 3 . What is a unit test? Why should we write unit tests?</h2>
      <h2 className=" text-2xl grid justify-start "> Unit testing is a software development process in which the smallest testable parts of an application, 
      called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate 
      written code to test and determine if it works as intended. .</h2>
      </div>
   </div>
  </div>


  <div className="card card-side bg-orange-200 mt-5 w-full shadow-xl">
      <div className="card-body">
      <div className=' grid justify-items-start'>
      <h2 className=" font-bold mt-2 text-xl text-justify "> 4 .  React vs. Angular vs. Vue?</h2>
      <h2 className=" text-2xl grid justify-start "> There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.
         They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.
         Each framework is component-based and allows the rapid creation of UI features.</h2>
      </div>
   </div>
  </div>


</div>
    );
};

export default Blog;