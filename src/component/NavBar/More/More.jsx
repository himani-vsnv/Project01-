import React, { useState } from 'react';
import { Button, Menu, MenuItem, IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import BarChartIcon from '@mui/icons-material/BarChart';
import GetAppIcon from '@mui/icons-material/GetApp';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
     
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onMouseEnter={handleMouseEnter}
        sx={{ color: 'white', textTransform: 'none' }}
      >
       <Typography> More</Typography>
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={isMenuOpen && Boolean(anchorEl)} 
        onClose={handleMouseLeave}
        MenuListProps={{
          onMouseEnter: () => setIsMenuOpen(true),
          onMouseLeave: handleMouseLeave, 
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
       
        <MenuItem>
          <IconButton size="small" sx={{ mr: 1 }}>
            <NotificationsIcon />
          </IconButton>
          <Typography>Notification Preferences</Typography>
        </MenuItem>
        <MenuItem>
          <IconButton size="small" sx={{ mr: 1 }}>
            <HeadsetMicIcon />
          </IconButton>
          <Typography>24x7 Customer Care</Typography>
        </MenuItem>
        <MenuItem>
          <IconButton size="small" sx={{ mr: 1 }}>
            <BarChartIcon />
          </IconButton>
          <Typography>Advertise</Typography>
        </MenuItem>
        <MenuItem>
          <IconButton size="small" sx={{ mr: 1 }}>
            <GetAppIcon />
          </IconButton>
          <Typography>Download App</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropdownMenu;