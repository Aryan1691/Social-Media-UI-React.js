import { Box ,Checkbox} from '@mui/material'
import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import sg from "../Assets/image.png";
import sg2 from "../Assets/image6.png";
import sg3 from "../Assets/image7.png";
import sg4 from "../Assets/image8.png";
import '../App.css';


const Feed = () => {
  return (
   <Box flex={3} padding={2}>
   <Card sx={{marginTop:"70px"}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red",color:"white" }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Madhav Prem"
        subheader="june 14, 2023"
      />
      <CardMedia
        component="img"
        height="550"
        image={sg2}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">

        A man can't find a way to reach his destination even after having so many advance Technology
        #DumbWaysToDie
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={  <FavoriteIcon />} checkedIcon={  <FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
   
       
      </CardActions>
    
    </Card>

    <Card sx={{marginTop:"40px"}}>
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue",color:"white" }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Aryan Khatik"
        subheader="january 14, 2023"
      />
      <CardMedia
        component="img"
        height="550"
        image={sg}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Beautiful Art of a fox generated by midjourney AI, AI has been really become advanced it can easily generate any images
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={  <FavoriteIcon />} checkedIcon={  <FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
   
       
      </CardActions>
     
    </Card>

   <Card  sx={{marginTop:"40px"}}>
   <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "black",color:"white" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Rithik Khatik"
        subheader="january 14, 2023"
      />
      <CardMedia
        component="img"
        height="650"
        image={sg3}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        A beautiful Sunset, a mountains filled with snow and a beautiful music playing,
        This is what i called a beautiful day.
#happyLife #mountains
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={  <FavoriteIcon />} checkedIcon={  <FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
   
       
      </CardActions>
   </Card>

   <Card  sx={{marginTop:"40px"}}>
   <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "orange",color:"white" }} aria-label="recipe">
            V
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Vinita Khatik"
        subheader="january 19, 2023"
      />
      <CardMedia
        component="img"
        height="650"
        image={sg4}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        I wish the world is as beautiful as it is show in the image.
        #RestoreWorld #DontGiveUp #china
                </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={  <FavoriteIcon />} checkedIcon={  <FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
   
       
      </CardActions>
   </Card>
   </Box>
  )
}

export default Feed