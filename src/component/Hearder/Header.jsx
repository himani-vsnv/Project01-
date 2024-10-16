import React from 'react';
import { Grid, Container, Box } from '@mui/material';

// Array of categories with real image paths from the public folder
 const HeaderItem=[
    {
      label: "Top Offers",
      imageUrl: "	https://rukminim1.flixcart.com/fk-p-flap/96/96/image/698ba0cebe456aaf.jpg?q=100"
    },
    {
      label: "Mobiles & Tablets",
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/44e10b16e649b691.jpg?q=100"
    },
    {
      label: "TVs & Appliances",
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/717b5077a5e25324.jpg?q=100"
    },
    {
      label: "Electronics",
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/4da1d0d19350cc84.jpg?q=100"
    },
    {
      label: "Fashion",
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/9d4e9c605fc1d2d3.jpg?q=100"
    },
    {
      label: "Beauty",
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/a5e656672d0548dd.jpg?q=100"
    },
    {
      label: "Home & Kitchen",
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/5b813b64a3179898.jpg?q=100"
    },
    {
      label: "Furniture",
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/7a5e96c10ada8a56.jpg?q=100"
    },
    {
      label: "Travel",
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/57fe1ffe54569c41.jpg?q=100"
    },
    {
      label: "Grocery",
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/25f400c36bc3487d.jpg?q=100"
    }
  ]



const Header = () => {
  return (
    <>
    <Box style={{ height: "127px", margin: "70px 0 0 0", backgroundColor: "white", display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
      <Box style={{ height: "100%", backgroundColor: "white", display: 'flex', gap: "4px", justifyContent: 'center', overflow: 'hidden',    width:"1300px" }}>
        {HeaderItem.map((item, index) => (
          <Box key={index} style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', gap: "2px", flex: "1 0 auto", maxWidth: "150px" }}>
            <Box style={{ height: "74px", padding: "4px", minWidth: "90px", justifyContent: 'center', display: 'flex' }}>
              <img style={{ height: "74px", width: "64px" }} src={item.imageUrl} alt={item.label} />
            </Box>
            <Box style={{ padding: "4px", textAlign: "center", justifyContent: 'center', display: 'flex', minWidth: "fit-content" }}>
              <span style={{ fontSize: "16px" }}>{item.label}</span>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </>
  );
};

export default Header;

