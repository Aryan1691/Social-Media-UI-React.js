import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { Avatar, Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CollectionsIcon from '@mui/icons-material/Collections';
import sg from "../Assets/image.png";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SendIcon from '@mui/icons-material/Send';
const Add = () => {
    const[open,updateOpen]=useState(false);
  return (
    <React.Fragment>
  <Tooltip onClick={()=>{updateOpen(true)}} title="Add" sx={{position:"fixed",bottom:20,left:{xs:"calc(50%-25px)",md:30}}}>
  <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
  </Tooltip>
  <Modal sx={{display:"flex",flexDirection:"row"}}
  open={open}
  onClose={()=>{updateOpen(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box bgcolor={"background.default"} color={"text.primary"} sx={{width:"400px",height:"300px" ,
  borderRadius:"20px",display:"flex",justifyContent:"center",
  margin:"auto",marginTop:"100px",padding:"15px"}}>
  <Typography variant="h5" marginRight="-10px">    Create Post</Typography>
 
<Avatar
sx={{marginTop:"35px",position:"relative",right:"65px"}}
src={sg}></Avatar>
        <TextField
        sx={{position:"absolute",bottom:"350px",  color:"black", width:"25%"}}
          id="standard-multiline-static"
          label="what's on your mind"
          multiline
          rows={2}
       
        
          variant="standard"
        />
<Stack direction="row"
sx={{position:"absolute",bottom:"300px"}} gap={1}>
    <EmojiEmotionsIcon/>
    <CollectionsIcon/>
    <PersonAddIcon/>
    <VideoLibraryIcon/>

</Stack>

<Button sx={{position:"absolute",bottom:"250px"}} endIcon={<SendIcon/>} variant='contained'>Submit</Button>

  </Box>
</Modal>


    </React.Fragment>
  
  )
}

export default Add