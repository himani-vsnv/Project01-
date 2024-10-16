import { Box, TextField,FormControl,FormLabel,Button, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const SignUp = () => {
    const initialValue = {email:"",password:""}
    const[signUpData, setSignUpData] = useState(initialValue)
    const navigata = useNavigate()

    console.log("signUpData",signUpData)
    const handleChange=(e)=>{
        setSignUpData({...signUpData,[e.target.name]:e.target.value})
    }

   
    const PostApiSignUp = async() => {
        const resp = await axios.post("http://192.168.1.62:5000/api/auth/signup",signUpData)
        .then((resp)=>{
            localStorage.setItem("token",JSON.stringify(resp.data.access_token))
            alert("SignUp Successful")
            console.log("SignUp sucessful",resp)
            navigata ("/login")
        })
        .catch((error)=>{
            console.log("SignUp failed",error)
        })
    }  

    const handleSubmit=(e)=>{
            e.preventDefault()
            PostApiSignUp()
    }

  return (
    <Box component="form"
    onSubmit={handleSubmit}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 2,
    }}>
        <Typography variant="h3">Sign Up</Typography>
        {/* <FormControl sx={{width: '30%'}}>
              <FormLabel>Name</FormLabel>
              <TextField
                type="name"
                name="name"
                placeholder="name"
                required
                fullWidth
                size="small"
                variant="outlined"
                value={signUpData.name}
                onChange={handleChange}
              />
        </FormControl> */}

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
                value={signUpData.email}
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
                value={signUpData.password}
                onChange={handleChange}
              />
        </FormControl>
        <Button sx={{width: '30%'}}
              type="submit"
              variant="contained"
            >
              Sign Up
        </Button>
    </Box>
  )
}

export default SignUp
  // localStorage.setItem("token",JSON.stringify(resp.data.access_token))