import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from './_register.module.css'
import { Navigate } from 'react-router-dom'
import {auth} from "../../Firebase/Firebase"
import { storage } from "../../Firebase/Firebase";
import {createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth"
import { db } from "../../Firebase/Firebase";
import { addDoc, collection } from "@firebase/firestore";
import {
    getDownloadURL,
    ref as photoRef,
    uploadBytesResumable,
  } from "@firebase/storage";
import {toast} from "react-toastify"
function Register() {
    let [state,setState]=useState({
        full_name:"",
        email:"",
        country:"",
        mobile:"",
        password:"",
       
    })

    let [checked,isChecked]=useState([])
    let{full_name,country,mobile,password,email}=state
   let handleChange=e=>{
let {value,name}=e.target
setState({...state,[name]:value})
    }

    let handleCheckboxHandle = e => {
        let { value } = e.target;
        isChecked(oldCheckValues => {
          return [...oldCheckValues, value];
        });
      };

   let handleSubmit= async e=>{
        e.preventDefault();
        try {
             let user= async()=>{
                  //task completion
                // let DownloadUrl = await getDownloadURL(storageLocation);
                let payload = { ...state,checked };
                let collectionRef = collection(db, "userdata");
                await addDoc(collectionRef, payload);
                // setIsLoading(false);
                // setStatusBar(false);
                toast.success("successfully register...");
                window.location.assign("/login");
              }
              user()
          }
         catch (error) {
          toast.error(error.code);
        }
        //resetting form fields
        setState({
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
          isLoading: false,
        });
    }
  return (
   <section id={Styles.login}>
    <article>
        <figure>
            <img  alt=""/>
        </figure>
        <form onSubmit={handleSubmit}>
            <span className={Styles.heading}>
                <h1>Join Practo</h1>
                <h2>Are you a doctor?<span><Link>Register Here</Link></span></h2>
            </span>
            <div className="form-group"><label htmlFor="">Full Name</label><input type="text" placeholder='Full Name' value={full_name} name="full_name" onChange={handleChange}/></div>
            <div className="form-group"><label htmlFor="">Email</label><input type="text" placeholder='Enter Your Email' value={email} name="email" onChange={handleChange}/></div>
            <div class="form-group" >
           <main>
           <aside value={country} name="country" onChange={handleCheckboxHandle}> <select class="countryCode" id="country" name="country" ><option selected="" value="IN">+91(IND)</option><option value="SG">+65(SGP)</option><option value="PH">+63(PHL)</option><option value="MY">+60(MYS)</option><option value="ID">+62(IDN)</option><option value="BR">+55(BRA)</option><option value="MX">+52(MEX)</option><option value="AR">+54(ARG)</option><option value="CL">+56(CHL)</option><option value="VN">+84(VNM)</option><option value="AE">+971(UAE)</option><option value="KW">+965(KW)</option><option value="TZ">+255(TZA)</option><option value="BH">+973(BH)</option><option value="SA">+966(SA)</option><option value="US">+1(USA)</option></select></aside>
              <input class="form-control email-text " id="mobile" name="mobile" placeholder="Mobile Number" type="tel"  value={mobile} onChange={handleChange}/>
           </main>
            </div>
            <div className="form-group"><label htmlFor="">Password</label><input type="password" placeholder='Password' name="password" value={password} onChange={handleChange}/></div>
            <div className="form-group" value={checked} name="checked"><input type="checkbox" /><label htmlFor="">Receive relevant offers and promotional communication from Practo</label></div>
            <div className="form-group"><button>Register</button></div>
            <div></div>
        </form>
    </article>
   </section>
  )
}

export default Register;
