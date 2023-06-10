import './App.css';
import React,{useState} from 'react';
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Rightbar from './Components/Rightbar';
import Add from './Components/Add';
import {Box, Stack, createTheme,ThemeProvider} from "@mui/material"
function App() {
  const[mode,setMode]=useState("dark");
const darkTheme = createTheme ({
  palette:{
    mode:mode
  }
})
  return (
 <React.Fragment>
 <ThemeProvider theme={darkTheme}>

 <Navbar />
<Box bgcolor={"background.default"} color={"text.primary"}>

<Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
<Sidebar setMode={setMode} mode ={mode}/>
<Feed/>
<Rightbar/>
</Stack>
<Add/>


</Box>

</ThemeProvider>


</React.Fragment>
    
  );
}

export default App;
