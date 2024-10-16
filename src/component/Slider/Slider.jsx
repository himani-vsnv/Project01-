import { Container, IconButton,Box } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import data from './data.json'

const SliderPage = () => {
    
    const [activeIndex,setActiveIndex] = useState(0)
    let ref = useRef(null);
    console.log('data',data)
    
    // useEffect(()=>{
    //   const resp =  axios.get("https://picsum.photos/v2/list?page=1&limit=15")
    //     .then((resp) => setImages(resp.data))
    // },[])

    const handleNext = () => {

        setActiveIndex((previousValue)=>{
            if(previousValue == data.length-1){
                   
                   return 0;
                }
                else{
                    return previousValue +1;
                }
        })
        // if(activeIndex > data.lenght-1){
        //     setActiveIndex(1)  
        // }
        // else{
        //     setActiveIndex(activeIndex +1)
        // }
    }
    const handleprev = () => {
        if(activeIndex == 0){
            setActiveIndex(data.lenght-1)  
        }
        else{
            setActiveIndex(activeIndex -1)
        }
    }

    useEffect(() => {
      ref.current =  setInterval(handleNext,100000)
      return (()=>{
        clearInterval(ref.current)
      })
    },[])

    // console.log('activeIndex',activeIndex)
  return (
    <Container   sx={{display:"flex", justifyContent:'center', alignItems:"center", width:"100%", position:"relative",marginTop:"30px"}}>
        <Box sx={{display:"flex", justifyContent:'center', alignItems:"center",height:'300px' ,width:"1530px" }} onMouseEnter = {() => clearInterval(ref.current)} onMouseLeave={() => ref.current =  setInterval(handleNext,100000)}>
       
       <Box sx={{position:'absolute' , top:"40%",left:"10px"}}>
           <IconButton sx={{backgroundColor:"white"}} size="large"><ArrowLeftIcon onClick={handleNext}/></IconButton>
       </Box>             
           <Box><img  style={{height:'280px' ,width:"1530px"}} src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cc633426b89ad841.png?q=20'/></Box>           
       <Box sx={{position:'absolute' , top:"40%",right:"2px"}}>
           <IconButton  sx={{backgroundColor:"white"}} size="large"> <ArrowRightIcon onClick={handleprev}/></IconButton>
       </Box>
  
        </Box>
    </Container>
  )
}

export default SliderPage


 //{data[activeIndex].download_url}  --> image 