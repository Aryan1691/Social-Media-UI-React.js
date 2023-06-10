import React from 'react'
import { Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import sg2 from "../Assets/image2.png";
import sg3 from "../Assets/image3.png";
import sg4 from "../Assets/image4.png";
import sg5  from "../Assets/image5.png";


const Rightbar = () => {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
      
      ];
  return (
   <Box sx={{display:{xs:"none",sm:"block"}}} flex={2} padding={2}>
   <Box position="fixed">
   <Typography variant='h6' sx={{marginTop:"50px"}}>
        Online friends
    </Typography>
    <AvatarGroup max={5} sx={{position:"fixed",marginTop:"1rem"}}>
      <Avatar alt="Remy Sharp" sx={{width:"50px"}} src={sg2} />
      <Avatar alt="Travis Howard"  sx={{width:"50px"}} src={sg3}/>
      <Avatar alt="Cindy Baker"  sx={{width:"50px"}} src={sg5} />
      <Avatar alt="Agnes Walker"  sx={{width:"50px"}} src={sg4} />
      <Avatar alt="Trevor Henderson"  sx={{width:"50px"}} src="/static/images/avatar/5.jpg" />
      <Avatar alt="Trevor Henderson"  sx={{width:"50px"}} src="/static/images/avatar/5.jpg" />

    </AvatarGroup>
    <Typography variant='h6'sx={{marginTop:"80px"}} >
    Latest Conversation
    </Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <ListItem alignItems="flex-start" sx={{border:"1px solid",boxShadow:"10px 10px",width:"100%"}}>
        <ListItemAvatar>
          <Avatar sx={{backgroundColor:"Blue"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" sx={{border:"1px solid",boxShadow:"10px 10px",width:"100%",marginTop:"15px"}}>
        <ListItemAvatar>
          <Avatar sx={{backgroundColor:"Red"}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" sx={{border:"1px solid",boxShadow:"10px 10px",width:"100%",marginTop:"15px"}}>
        <ListItemAvatar>
          <Avatar sx={{backgroundColor:"Green"}} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    <Typography variant='h6' sx={{marginTop:"80px"}}>
    Latest Post
    </Typography>
    <ImageList cols={3}  rowHeight={150}  >
    {itemData.map((item) => (
        <ImageListItem sx={{width:"140px"}}key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
      
    </ImageList>
   
   </Box>

   </Box>
  )
  
}

export default Rightbar
