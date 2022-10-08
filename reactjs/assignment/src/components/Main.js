import React from "react";
import Sidebar from "./Sidebar";
import MyImage from "./image.png";
import MyImage2 from "./image1.png";

const Main = () => {
    return (

    <div>

  <div className="article">
    <p className="mycontainer">
      <h2>Types Of Components in React</h2>
      <p>A Component is one of the core building blocks of React. 
        In other words, we can say that every application you will develop in React
         will be made up of pieces called components. Components make the task of building UIs much easier.
          You can see a UI broken down into multiple individual pieces called components and work on them 
          independently and merge them all in a parent component which will be your final UI. 
        </p>
 <p><span>In React, we mainly have two types of components:</span> </p>
 <p><span>Functional Components: </span>Functional components are simply javascript functions. We can create a 
  functional component in React by writing a javascript function. These functions may or may not receive 
  data as parameters.Below example shows a valid Functional component in React:
   </p>
   <p> <img src={MyImage2} height="150" width="250" alt="Class Component" /></p>
 

  <p><span>Class Components:</span> The class components are a little more complex 
    than the functional components. The functional components are not aware of the other
     components in your program whereas the class components can work with each other. We can pass data
      from one class component to other class components. We can use JavaScript ES6 classes to create class-based
       components in React. Below example shows a valid class-based component in React: 
 </p>
 <p> <img src={MyImage} height="150" width="250" alt="Class Component" />
   </p>
 </p>
   </div>
    <Sidebar />
   </div>
    )
};

export default Main;
    
        
        
      
      
   
    

 
 
  
     
   




   