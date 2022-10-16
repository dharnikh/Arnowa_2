import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../Styles/Login.module.css"
import { useState } from "react";

const LoginButton = () => {
  const { loginWithRedirect,logout,user,isAuthenticated } = useAuth0();
  const[text,setText] = useState("Click on the Login Button")
  const handleChange = ()=>{
    if(text !== "Click on the Login Button"){
      setText("Logout Now")
    }
  }

  return(
    <>
    <h1>{text}  </h1>
    {isAuthenticated?    <button  className={styles.logout_btn} onClick={() => logout({ returnTo: window.location.origin })}>
  Log Out
</button>:<button className={styles.login_btn} onClick={() => loginWithRedirect()}>Log In</button>}
    
    
 
   
 
</>
  )
};

export default LoginButton;