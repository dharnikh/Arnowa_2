import React from 'react'
// import styles from "../Styles/Home.module.css"
// import msg from "../Components/msg"
import Todo from '../Components/Todo'
import { useAuth0 } from "@auth0/auth0-react";
export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
 
      <div>
        <h1>Welcome:-{user.name}</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    
      <Todo/>

    </div>
  )
}
