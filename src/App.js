import React from "react"
import { Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import './App.css'; // Import the CSS file

const App = () => {
 
  return(
    <div className="App">
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>

    </Routes>
    </div>
  )

};
export default App;
