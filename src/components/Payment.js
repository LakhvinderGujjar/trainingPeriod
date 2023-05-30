import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-router-dom";

function Payment (){
    function last(){
        window.location.href="thankyou"
    }
   
    
    return(
        <>
        <center className="grocery">

            <h1>₹ Payment Method ₹</h1>
            <div>
        <label >Card NO.</label>
        
        <input className="input1" type="Number"  placeholder="enter your card no."/><br/>
       </div>
       <div>
        <label >Expiry Date</label>
        <input className="input1" type="date" placeholder="enter Expiry Date"/><br/>
        </div>
        <div>
        <label >CVV</label>
        <input  className="input1" type="number" placeholder="enter your CVV"/><br/>
        </div>
       
     <Button onClick={last} >₹  Pay ₹</Button>
     <hr></hr>
     <Button onClick={last}>CASH ON DELIVERY</Button>
     
        

        </center>
        </>
    )

}

export default Payment