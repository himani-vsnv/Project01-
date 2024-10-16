import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router';

const Login = () => {

  const tokens = localStorage.getItem("token");
  const navigate = useNavigate()

  const handleLogOut=()=>{
    localStorage.remove("token")
    navigate("/login")
  }

  return (
    <Box>
      { tokens ? <LoginForm/>:
      <button onClick={handleLogOut}>Logout</button>
      }
    </Box>
  )
}

export default Login
