import React, { useState } from "react";
import { useEffect } from "react";



function ThankYou (){
    const[counter,setCounter] = useState(30);
    
   
    useEffect(() => {
         setTimeout(() => setCounter(counter - 1),6000 );
      }, [counter]);
     
return(
<center className="grocery">
    <img src="https://inventionland.com/wp/wp-content/uploads/2015/09/National_Thank_You_Day-1.png" alt="react-image"/>
   <h3>YOUR ORDER WILL BE DELIEVERED IN {counter} MINUTES...</h3>
    </center>
)
}
export default ThankYou