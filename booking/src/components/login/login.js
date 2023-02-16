import { useContext, useState } from "react";
import axios from "axios";
import "./login.css"
import { Authcontext } from "../../cotext/authcontext";

const Login =()=>{

    const[formdata,setFormdata]=useState({
        email: "",
        name:"",
         password:""
    })
    const {dispatch} = useContext(Authcontext)

    const details = (e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }

    const submit = (e) => {
        // e.preventDefault();
        dispatch({type:"Login_start"})

        try {
            axios.post('/auth/login', formdata).then((res) => {
                console.log("ress", res);
                if (res.data.name === formdata.name) {
                    dispatch({ type: "Login_sucess", payload: res.data.name })
                     window.location.href="/"
                }
            });
        }
    catch(err){
        dispatch({type:"Login_error",payload:err.res.data})
    }
        
        // console.log("formdata",formdata);
        // sessionStorage.setItem("Email",formdata.email)
        // sessionStorage.setItem("Password",formdata.password)
        // setFormdata({email:"",password:""})
    }
    return(
        <>
            <div className="loginc">
        <label htmlFor="name">Enter your Name</label>
        <input name="name" value={formdata.name} onChange={(e)=>details(e)}></input>
        <label htmlFor="email">Enter your Email</label>
        <input name="email" value={formdata.email} onChange={(e)=>details(e)}></input>
        <label htmlFor="password">Password</label>
        <input name="password" value={formdata.password} onChange={(e)=>details(e)}></input>

        <button onClick={submit}>submit</button>
                </div>

        </>
    )
}

export default Login;