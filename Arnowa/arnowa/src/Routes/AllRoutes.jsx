import {Routes,Route} from "react-router-dom"


import Home from "./Home"

import React from 'react'
import Login from "./Login"
import PrivateRoute from "../Components/PrivateRoute"
// import PrivateRoute from "../Components/PrivateRoute"
// import Navbar from "../Components/Navbar"

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
           
            <Route path="/" element={<Login/>}></Route>



        </Routes>
      
    </div>
  )
}
