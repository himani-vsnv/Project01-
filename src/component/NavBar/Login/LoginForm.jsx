import { Box, TextField,FormControl,FormLabel,Button,Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const LoginForm = () => {
    const initialValue = {email:"",password:""}
    const navigate = useNavigate()
    const[userData, setUserData] = useState(initialValue)
    
    const handleChange=(e)=>{
          setUserData({...userData,[e.target.name]:e.target.value})
    }
    
    const PostApiLogIn = async() => {
      const resp = await axios.post("http://192.168.1.62:5000/api/auth/login",userData)
      .then((resp)=>{
          localStorage.setItem("token",JSON.stringify(resp.data.access_token))
          alert("Login Successful")
          console.log("Login sucessful",resp)
          navigate ("/becomeaseller")
      })
      .catch((error)=>{
          console.log("Login failed",error)
      })
  }  


    const handleSubmit=(e)=>{
            e.preventDefault()
            PostApiLogIn()
          
    }

    console.log("userData",userData)
    

  return (
    <Box component="form"
    onSubmit={handleSubmit}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 2,
    }}>
        <Typography variant="h3">Log In</Typography>
     
        <FormControl sx={{width: '30%'}}>
              <FormLabel>Email</FormLabel>
              <TextField
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                fullWidth
                size="small"
                variant="outlined"
                value={userData.email}
                onChange={handleChange}
              />
        </FormControl>
        
        <FormControl sx={{width: '30%'}}>
              <FormLabel>Password</FormLabel>
              <TextField
                type="password"
                name="password"
                placeholder="password"
                required
                fullWidth
                size="small"
                variant="outlined"
                value={userData.password}
                onChange={handleChange}
              />
        </FormControl>
        <Button sx={{width: '30%'}}
              type="submit"
              variant="contained"
            >
              Log in
        </Button>
    </Box>
  )
}

export default LoginForm
