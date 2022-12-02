import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Styles from './_login.module.css'
import {auth} from "../../Firebase/Firebase"
// import {signInWithPhoneNumber,RecaptchaVerifier} from "@firebase/auth"
import { useState } from 'react'
import {toast} from "react-toastify"
// import {db} from "../../Firebase/Firebase"
// import {docs,collection} from "@firebase/firestore"
import { signInWithEmailAndPassword } from "@firebase/auth";

function Login() {
    let navigate=useNavigate()
    let [loading,setIsLoading]=useState(false)
    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")
    let [phone,setPhone]=useState("")

  

//     let handleChange=e=>{
//         setLoading(true)
// let {value,name}=e.target
//  setState({...state,[value]:name})
//     }

   
        let handleSubmit = async e => {
            e.preventDefault();
            try {
              setIsLoading(true);
              let userData = await signInWithEmailAndPassword(auth,email,password);
              console.log(userData);
              if (userData.user.emailVerified === true) {
                navigate("/register")
                // navigate("/");
                toast.success(`successfully ${email} logged in`);
              } else {
                toast.error("Email not yet Verified");
              }
            } catch (error) {
              toast.error(error.code);
            }
            setemail("");
            setpassword("");
            setIsLoading(false);
          };
    

let phoneHandleSubmit=e=>{

}
  return (
   <section id={Styles.login}>
    <article>
        <figure>
            <img  alt=""/>
        </figure>
        <form onSubmit={handleSubmit}>
            <div className="form-group"><label htmlFor="">Mobile Number / Email ID</label><input type="text" placeholder='Mobile Number / Email ID' value={email} name="email"  onChange={e => setemail(e.target.value)}/></div>
            <div className="form-group"><label htmlFor="">Password</label><input type="password" placeholder='Password' value={password} name="password" onChange={e => setpassword(e.target.value)}/></div>
            <div className="form-group"><aside className={Styles.checkbox}><input type="checkbox"/><label htmlFor="">Remember me for 30days</label><span><Link to="">Forget Password?</Link></span></aside></div>
            <div className="form-group" ><input type="checkbox"/><label htmlFor="">Login with OTP instead of password</label></div>
            <div className="form-group"><button>{loading===true?"...Loading":"Login"}</button></div>
        </form>
    </article>
   </section>
  )
}

export default Login
