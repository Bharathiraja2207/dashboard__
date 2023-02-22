import React from 'react';
import PageviewIcon from '@mui/icons-material/Pageview';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';



export function Horizontalbar() {
  return (
    <div className='parrent1'>
     <AppBar position="static" color="">
      <div className='search'>
        <div>
          <input type="text" placeholder="Search.." name="search" />
          <IconButton aria-label="search" size="small"><PageviewIcon color='Primary'  sx={{ flexGrow: 1}}/></IconButton>
        </div>
        <div className='notification'>
          <div>
          <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      </div>

      <div>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      
      </div>
      <hr />
      <div className='avatar'>
       
        <IconButton
          size="small"
          aria-label="avatar"
          spacing={2} ><span className='avatar name'><lable>Douglas mc Ghee </lable>  </span> <Avatar size="small" src="/broken-image.jpg" />

          </IconButton>
      </div>
     
        </div>
      </div>
      </AppBar>
    </div>
  );
}
