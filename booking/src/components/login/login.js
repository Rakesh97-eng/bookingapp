import { useState } from "react";

const Login =()=>{

    const[formdata,setFormdata]=useState({
        email:"",
         password:""
    })

    const details = (e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }

    const submit = ()=>{
        console.log("formdata",formdata);
        sessionStorage.setItem("Email",formdata.email)
        sessionStorage.setItem("Password",formdata.password)
        setFormdata({email:"",password:""})
    }
    return(
        <>
        <label htmlFor="email">Enter your Email</label>
        <input name="email" value={formdata.email} onChange={(e)=>details(e)}></input>

        <label htmlFor="password">Password</label>
        <input name="password" value={formdata.password} onChange={(e)=>details(e)}></input>

        <button onClick={submit}>submit</button>
        </>
    )
}

export default Login;