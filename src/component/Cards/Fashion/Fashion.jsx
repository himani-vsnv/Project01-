import { Card, CardContent, Typography,CardMedia,Box} from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  hoverScale: {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});
const FashionCard = () => {
 const itemDtetails =[{name:"White shirt",subTitle:"shop now", image:"https://rukminim2.flixcart.com/image/240/240/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=80"},
                        {name:"Laximi sareer",subTitle:"shop now", image:"https://rukminim2.flixcart.com/image/240/240/xif0q/sari/k/d/c/free-md-wb-sat6010-6-anand-sarees-no-blouse-original-imagyfgdqzssqzxp.jpeg?q=80"},
                        {name:"White shirt",subTitle:"From 499*", image:"https://rukminim2.flixcart.com/image/240/240/xif0q/jacket/c/o/b/l-1-no-mt4-jkt-hood-windc-gone-white-red-strip-motrex-original-imah3xvheuhqkgsx.jpeg?q=80"},
                       {name:"Shree sareer",subTitle:"From 1499*", image:"https://rukminim2.flixcart.com/image/240/240/xif0q/sari/k/d/c/free-md-wb-sat6010-6-anand-sarees-no-blouse-original-imagyfgdqzssqzxp.jpeg?q=80"},
                       {name:"white jecket",subTitle:"From 499*", image:"https://rukminim2.flixcart.com/image/240/240/xif0q/jacket/c/o/b/l-1-no-mt4-jkt-hood-windc-gone-white-red-strip-motrex-original-imah3xvheuhqkgsx.jpeg?q=80"},
                      {name:"White shirt",subTitle:"shop now", image:"https://rukminim2.flixcart.com/image/240/240/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=80"},

                       
  ]
  
  const classes = useStyles();
  return (
    <Box  style={{margin:"30px 0 0 0", backgroundColor:"white",display:'flex',justifyContent:'center', flexDirection:'column'}}>
        <Box sx={{display:'flex' }}>
          <Typography  variant="h5" mb={4} mt={4} ml={4} mr={4}>
         Fashion
          </Typography>
        </Box>
    <Box   direction="row" display='flex' gap='4px' flexWrap='wrap' justifyContent="center" alignItems="center"  >
      {itemDtetails.map((item)=>{
        return(
          <Card sx={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 250,  
            height: 300, 
            mb: 2
          }}
          key={item.name} mb={1}>
            <Box 
              sx={{ display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 250, 
                width: 186, 
                overflow: "hidden",
                marginTop:"2px"
              }}
            >
              <img 
              className={classes.hoverScale}
                src={item.image} 
                alt={item.name} 
                style={{
                  height: "186px", 
                  width: "186px%", 
                  objectFit: "cover" ,
                 
                }} 
              />
            </Box>
            
            <CardContent >
                <Typography variant="subtitle1" textAlign="center" sx= {{minWidth:"fit-content"}} noWrap >
                {item.name}
                </Typography>
                <Typography variant="subtitle2" color="primary" style={{fontWeight:'bold'}} textAlign="center" sx= {{minWidth:"fit-content"}}  >{item.subTitle}</Typography>
                </CardContent>
        </Card>
        )
      }
      )}
      
    </Box> 
    </Box>
  )
}

export default FashionCard