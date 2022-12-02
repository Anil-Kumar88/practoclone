import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


// import Login from './Auth/login/Login'
// import Register from "./Auth/Register/Register"

import LabtestMainComp from './Labtest1/LabtestMainComp/LabtestMainComp'
const App = () => {
  return (
    <Router>
        {/* <Navbar/> */}
        <Routes>
            {/* <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/> */}
          <Route path='/' element={<LabtestMainComp/>}/>
        </Routes>
    </Router>
    // <h1>hello</h1>
  )
}

export default App
