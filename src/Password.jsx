import React, { useState } from 'react'
import './Password.css'
const Password = () => {
    const [length,setLength]=useState(8);
    const [upper,setUpper]=useState(true);
    const [lower,setLower]=useState(true);
    const [number,setNumber]=useState(true);
    const [symbol,setSymbol]=useState(true);
    const [password,setPassword]=useState('');

    const generator= () =>{
        let charset='';
        if(upper) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(lower) charset+="abcdefghijklmnopqrstuvwxyz";
        if(number) charset+="1234567890";
        if(symbol) charset+="_-@#$*&!)(?/.;:|+=^~`";

        let generatedpassword='';
        for(let i=0;i<length;i++){
            const randomindex=Math.floor(Math.random()*charset.length);
            generatedpassword+=charset[randomindex];
        }
        setPassword(generatedpassword);
    }
    const clip = () =>{
        navigator.clipboard.writeText(password);
        alert("Password is copied ");
    }

    const handleEnter=(e)=>{
        if(e.key==='Enter'){
            generator();
        }
    }
     
  return (
    <div className='content'>
        <h3>STRONG PASSWORD GENERATOR</h3>
        <label htmlFor="input">Password Length:</label>
        <input type="number" id="input" value={length} onChange={(e)=>setLength(parseInt(e.target.value))} onKeyDown={handleEnter}/>
        <div className="upper">
            <input type="checkbox" id="up" checked={upper} onChange={(e)=>{setUpper(e.target.checked)}}/>
            <label htmlFor="up">Include Uppercase</label>
        </div>
        <div className="lower">
            <input type="checkbox" id="lo" checked={lower} onChange={(e)=>{setLower(e.target.checked)}}/>
            <label htmlFor="lo">Include Lowercase</label>
        </div>
        <div className="number">
            <input type="checkbox" id="num" checked={number} onChange={(e)=>{setNumber(e.target.checked)}}/>
            <label htmlFor="num">Include Number</label>
        </div>
        <div className="symbol">
            <input type="checkbox" id="sym" checked={symbol} onChange={(e)=>{setSymbol(e.target.checked)}}/>
            <label htmlFor="sym">Include Symbol</label>
        </div>
        <button className='generate' onClick={generator}> Generate Password</button>
        <div className='footer'>
           <input type="text" value={password} readOnly/>
            <button className='copy' onClick={clip}>Copy</button>
        </div>
    </div>
  )
}

export default Password
