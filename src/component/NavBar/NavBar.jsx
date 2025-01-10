import React from "react";
import AppBar from "@mui/material/AppBar";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import More from "./More/More";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const NavBar = () => {
  return (
    <>
      <AppBar
        sx={{
          position:"fixed",
          top:"0",
          left:"0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "56px",
          boxShadow:"none",
          width: "full",
          padding:  "4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
            width: "100%",
            gap: "30px",
            margin: "4px",
          }}
        >
          <Logo />
          <Search />
          <Link to="/login">
            <Button
              variant="contained" 
              sx={{color: "blue", backgroundColor: "white", width: "120px",height:"31px" }}
            >
            Login  
            </Button>
          </Link>
          <Link to="/becomeaseller"  style={{ textDecoration: "none" }}>
            <Typography variant="text" sx={{ color: "white",  }}  noWrap>
              Become A Seller
            </Typography>
          </Link>
          <Box><More /></Box>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" >
          <Link to="/cart"  style={{ textDecoration: 'none', display:"flex", flexDirection:"row",alignItems:"center"  }}>
            <Typography variant="text" sx={{ color: "white" }} >
              Cart
            </Typography>
            <IconButton size="small" sx={{ color: "white" }} >
                {<ShoppingCartIcon />}
              </IconButton>
          </Link>
          </Box>
          <Link to=""  style={{ textDecoration: 'none' }}>
            <Typography variant="text"  sx={{ color: "white" }}>
              SignUp
            </Typography>
          </Link>
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
