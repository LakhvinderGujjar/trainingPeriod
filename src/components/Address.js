import { margin } from "@mui/system";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

 function Address(){
    
    const pay =()=>{
    
        window.location.href="payment"
    }
    var citiesByState = {
        punjab: ["patiala","ludhiana","balachaur","hosiarpur"],
        Maharashtra: ["Mumbai","Pune","Nagpur"],
        haryana: ["sirsa","hisar","fetahbad","jind"]
        }
return(
    
    
    <center className="grocery">
        
        <h1>Enter delievery address</h1>
        <div>
        <label >House no.</label>
        
        <input className="input1" name="house" type="text"  placeholder="enter your house no."/><br/>
       
       <div>
        <label >street name</label>
        <input className="input1" type="text" placeholder="enter your street name"/><br/>
        </div>
        <div>
        <label >Locality</label>
        <input  className="input1" type="text" placeholder="enter your Locality"/><br/>
        </div>
        <div>
       
        
    
    
        </div>
        <Button onClick={()=>pay()}>₹ Make Payment ₹</Button>
        </div>
    </center>
)

 } 
 export default Address