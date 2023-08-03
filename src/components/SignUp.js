import React,{useState} from 'react';
// import { json } from 'react-router-dom';

const SignUp =()=>{
    // const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    // const [password,setPassword]=useState("");
    const collectdata=async()=>{
        console.warn(email,mobile);
        let result = await fetch('http://localhost:3000/signUp',{
            method:'post',
            body:JSON.stringify({email,mobile}),
            headers:{
                'content-type':'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
    } 


    return(
        <div className='signup-inputs'>
            <h1>Register</h1>
            {/* <input  className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name'/> */}
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'/> 
            <input className="inputBox" type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Mobile'/> 
            {/* <input className="inputBox" type = "password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/> */}
            <button onClick={collectdata} className='button' type='button'>SignUp</button>
        </div>
    )
}

export default SignUp;