/* eslint-disable jsx-a11y/alt-text */
import { Container, IconButton,Box } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React ,{ useEffect, useRef, useState } from 'react'
import data from './data.json'

const SliderPage = () => {
    
    const [activeIndex,setActiveIndex] = useState(0)
    let ref = useRef(null);
    console.log('data',data)
    
    useEffect(() => {
        ref.current = setInterval(handleNext, 3000);
        return () => {
          clearInterval(ref.current); 
        };
      }, []);

    const handleNext = () => {
        setActiveIndex((previousValue) =>
          previousValue === data.length - 1 ? 0 : previousValue + 1
        );
      };
      
      const handlePrev = () => {
        setActiveIndex((previousValue) =>
          previousValue === 0 ? data.length - 1 : previousValue - 1
        );
      };

    useEffect(() => {
      ref.current =  setInterval(handleNext,3000)
      return (()=>{
        clearInterval(ref.current)
      })
    },[])

    // console.log('activeIndex',activeIndex)
  return (
    <Container   sx={{display:"flex", justifyContent:'center', alignItems:"center", width:"100%", position:"relative",marginTop:"30px"}}>
        <Box sx={{display:"flex", justifyContent:'center', alignItems:"center",height:'300px' ,width:"1530px" }} onMouseEnter={() => clearInterval(ref.current)} // Pause auto-scroll
  onMouseLeave={() => (ref.current = setInterval(handleNext, 3000))}>
       
       <Box sx={{position:'absolute' , top:"40%",left:"10px"}}>
           <IconButton sx={{backgroundColor:"white"}} size="large"><ArrowLeftIcon onClick={handleNext}/></IconButton>
       </Box>             
           <Box><img  style={{height:'280px' ,width:"100%", }}
            src={data[activeIndex]?.download_url} 
            />
            </Box>           
       <Box sx={{position:'absolute' , top:"40%",right:"2px"}}>
           <IconButton  sx={{backgroundColor:"white"}} size="large"> <ArrowRightIcon onClick={handlePrev}/></IconButton>
       </Box>
  
        </Box>
    </Container>
  )
}

export default SliderPage
