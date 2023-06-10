import React, { useState } from 'react'
import { AppBar, Toolbar, Box, styled, Typography, InputBase, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import CycloneIcon from '@mui/icons-material/Cyclone';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import SG from "../Assets/image.png"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between"
 
    })
    const Search =styled("div")(({theme})=>({
        display:"flex",
        gap:"20px",
    
    }));
    const Icons =styled(Box)(({theme})=>({
        backgroundColor:"white",
        padding:"3px",
        borderRadius:"10px",
        alignItems: "center",
        width:"40%",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
          },
    }))

const Navbar = () => {
    const[open,setOpen]=useState(false);
  return (
    <Box  >
 <AppBar  position="fixed">
    <StyledToolBar >

    <Typography sx={{display:{xs:"none",sm:"block"}}} variant="h6">
    <CycloneIcon sx={{display:{xs:"absolute",sm:"none"}}}/>
    Talkster
    </Typography>
    <Icons>
    <InputBase sx={{color:"Black",padding:"5px"}} placeholder='Enter Something'/>
    </Icons>
<Search>    
<Badge badgeContent={4}  color="error">
      <MailIcon sx={{cursor:"pointer"}} color="white" />
    </Badge>

    <Badge badgeContent={4} color="error">
      <Notifications sx={{cursor:"pointer"}}color="white" />
    </Badge>
    <Avatar onClick={(e)=>setOpen(true)} sx={{width:"30px",height:"30px",cursor:"pointer"}} alt="Remy Sharp" src={SG} />
    </Search> 

    </StyledToolBar>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>{setOpen(false)}}
       
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
   </AppBar>
   

    </Box>
  
  )
}

export default Navbar
