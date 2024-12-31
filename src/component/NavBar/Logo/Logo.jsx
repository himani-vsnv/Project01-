/* eslint-disable jsx-a11y/alt-text */
import { Image } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>Flipkart</Typography>
    
      <Typography sx={{textAlign: "left",display:"flex" }}>
        Exlpore
        <span style={{ color: "yellow" }}>plus</span>
      
      <img
        style={{ width: "12px" , height:"12px"}}
        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
      />
    </Typography>
    </Box>
  );
};

export default Logo;
