import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Login(){
   
    return(
        <>
        
           <center className="grocery">
            
        <h1>LOGIN</h1>
        <div>   <div>
        <label >USERNAME</label>
        
        <input   type="text"  placeholder="enter username"/><br/>
       </div>
       <div>
        <label >PASSWORD</label>
        <input type="password" placeholder="enter password"/><br/>
        </div> </div>
       
        </center>
        
        </>
    )

}
export default Login;