import React from "react";
import Sidebar from "./Sidebar";
import MyImage from "./image.png";

const Main = () => {
    return (

    <div>

  <div className="article">
    <p className="mycontainer">
  <h2> Class Components In React</h2>
   <p> React lets us define components as classes or functions. To define a React component class,
       We have to  <span>create a class</span> and <span>extend React.Component class</span>. Lets  create an Class  Component .
      
 
   
             <img src={MyImage} height="150" width="250" alt="Class Component" />
             <p><span >render()</span> is the only method to be implemented in a class component</p>
             <p>Now your React application has a component called ExampleComponent, which returns a div  element.
                  To use this component in your application, use similar syntax as normal HTML </p>
                 <span > <u>Display the  component in the "root" element:</u></span>
                 <p>const root = ReactDOM.createRoot(document.getElementById('root'));</p>
                             <p> root.render(<comonentName/>);</p>
   </p>
   
</p>
  </div>
    <Sidebar />
    </div>
    )
};

export default Main;
    
        
        
      
      
   
    

 
 
  
     
   




   