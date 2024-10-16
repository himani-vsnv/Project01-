import React from 'react';
import {Grid, Box, Typography, Button } from '@mui/material';





const LandingPage = () => {
  return (
   
    <Box sx={{ display:"flex",gap:"10px",justifyContent:"space-evenly" }}>
        <Box sx={{ display:"flex",flexDirection:"column",gap:"2px",                         justifyContent:"space-evenly"}}>
            <Box sx={{ height: '265px',width:'479px',background: "#CAF2FF",display:"flex" }} >
                <Box sx={{ display:"flex",flexDirection:"column",gap:"6px",justifyContent:"space-evenly",padding:"6px"}} >
                    <Typography  > <span style={{background:"#FCDF5B" }}>50% Discount</span></Typography>
                    <Typography variant="h5" style={{fontWeight:"bold"}}>iphone 14</Typography>
                    <Typography sx={{fontSize: "12px", color:"#6F6F6F"}}>Now Available on <br/> affordable price</Typography>
                    <Typography color ="#6F6F6F" >₹1,00,000 From <span style={{fontWeight:"bold",color:"#000000"}}>₹99,500*</span> </Typography>
                    <Button variant="contained" size="small" color="primary">Buy Now</Button>
                  </Box>
                 <Box  component = "img" src = ""/>
            </Box>
            <Box sx={{ height: '265px',width:'479px',background: "#E4D6FB" }}>
                <Box sx={{ display:"flex",flexDirection:"column",gap:"4px", justifyContent:"space-evenly"}}>
                    <Typography variant="h5" style = {{fontWeight:"bold"}}>Ultra HD 4K TVs</Typography>
                    <Typography style = {{fontWeight:"bold"}}>From <span style = {{color:"#680CFB"}}>₹5,000*</span> </Typography>
                    <Typography sx={{fontSize: "12px", color:"#6F6F6F"}}>Sony, Samsung, LG and <br/> more. Instant 10% Offer on <br/>CitiBank</Typography>
                </Box>
                 <Box component = "img" src = ""/>
            </Box>
          
        </Box>  
         
        <Box sx={{width:"782px", height:"538px" , background: "#FFE1E3"}}>
             <Box sx={{ display:"flex",flexDirection:"column",gap:"4px",         justifyContent:"space-evenly"}}>
                <Typography variant="h5" style={{fontWeight:"bold"}}>Lifelong Tribe 20T</Typography>
                <Typography sx={{fontSize: "12px", color:"#6F6F6F"}} >Matte Black And  Fluorescent yellow 20 T <br/> Road Cycle (Single Speed, Black)</Typography>
                <Typography color ="#6F6F6F">₹5,000 From <span style = {{fontWeight:"bold" ,color:"#000000"}}>₹2,000*</span></Typography>
                {/* <Button variant = "contained" size ="small"  color ="error">Buy Now</Button> */}
            </Box>
                 <Box component="img" src=""/>
        </Box>
        
        
    </Box>
   
  );
}

export default LandingPage;
