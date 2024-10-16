import React from 'react'
import NavBar from '../NavBar/NavBar'
import BecomeASell from '../NavBar/BecomeSeller/BecomeASell';
import Cart from '../NavBar/Cart/Cart';
import Login from '../NavBar/Login/Login';
import { Route, Routes } from 'react-router';
import SignUp from '../NavBar/Login/SignUp/SignUp';
import ProtectedRouting from '../Protected/ProtectedRout';



const AllRoute = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      
      <Route path="/becomeaseller" element={<ProtectedRouting><BecomeASell/></ProtectedRouting>}/>
      <Route path="/cart" element={<ProtectedRouting><Cart/></ProtectedRouting>}/>
      
    </Routes>
    </>
  )
}

export default AllRoute
