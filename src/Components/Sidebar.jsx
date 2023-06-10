import { Box} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import React from 'react'
import Switch from '@mui/material/Switch';


const Sidebar = ({mode,setMode}) => {
  return (
    <Box sx={{display:{xs:"none",sm:"block"}}} flex={1} padding={2}>
        <Box  sx={{position:"fixed"}}>
         <List>
          <ListItem disablePadding >
            <ListItemButton   sx={{"&:hover":{borderRadius:"50px"}}} component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon  sx={{position:"relative",right:"-24px",color:"blue"}} />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton  sx={{"&:hover":{borderRadius:"50px"}}} component="a" href='#home'>
              <ListItemIcon>
                <ArticleIcon color={'success'} sx={{position:"relative",right:"-24px"}} />
              </ListItemIcon>
              <ListItemText  primary="Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton  sx={{"&:hover":{borderRadius:"50px"}}} component="a" href='#home'>
              <ListItemIcon>
                <GroupsIcon  sx={{position:"relative",right:"-24px", color:"red"}} />
              </ListItemIcon>
              <ListItemText  primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton  sx={{"&:hover":{borderRadius:"50px"}}} component="a" href='#home'>
              <ListItemIcon>
                <ArticleIcon  sx={{position:"relative",right:"-24px",color:"purple"}} />
              </ListItemIcon>
              <ListItemText  primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton  sx={{"&:hover":{borderRadius:"50px"}}} component="a" href='#home'>
              <ListItemIcon>
                <Diversity2Icon color={'primary'} sx={{position:"relative",right:"-24px", color:"black"}} />
              </ListItemIcon>
              <ListItemText  primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton  sx={{"&:hover":{borderRadius:"50px"}}} component="a" href='#home'>
              <ListItemIcon>
                <SettingsSuggestIcon color={'primary'} sx={{position:"relative",right:"-24px",color:"rgba(17, 227, 42, 1)"}} />
              </ListItemIcon>
              <ListItemText  primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton  sx={{"&:hover":{borderRadius:"50px"}}} component="a" href='#home'>
              <ListItemIcon>
                <AccountCircleIcon color={'primary'} sx={{position:"relative",right:"-24px"}} />
              </ListItemIcon>
              <ListItemText  primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton  sx={{"&:hover":{borderRadius:"50px"}}} component="a" href='#home'>
              <ListItemIcon>
              <NightsStayIcon sx={{position:"relative",right:"-24px"}}/>
                            </ListItemIcon>
                            <Switch onClick={e=>setMode(mode==="light"?"dark":"light")} />
            </ListItemButton>
          </ListItem>
          </List>
    </Box>
    </Box>
  )
}

export default Sidebar
