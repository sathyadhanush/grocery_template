import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Url} from './../constants/Global';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import './Login.css';
import { Button,TextInput,Checkbox } from "@orkaapps/components";


const theme = createTheme();



  const SignIn = () => {
    const navigate = useNavigate();
  
  const[phone_no,setPhone_no]=useState("")
  

  async function SaveUser()
  {
    if (phone_no === "") {
      alert("Phone Number must be filled out");
      return false;
    }
    let data={phone_no}
    console.warn(data)   
   let result=await fetch(Url+"/app/v1/cust/signin",{
      method:'post',
      body:JSON.stringify(data),  
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'auth-type':'otp'
      }
    })
      result=await result.json()
      console.log(JSON.stringify(result));
      console.log("test1");
      if(result.success===true){
        localStorage.setItem('phone_no',phone_no);
       
        console.log("test2");
        navigate('/loginotp')
        }else{
          alert(JSON.stringify(result.message));
         }
      
     

  } 
  const handleSubmit = (event) => {
    event.preventDefault();

   ;
  };

  return (
    <Box
    noValidate sx={{
      background: `url('https://media.istockphoto.com/photos/shopping-basket-with-fresh-food-grocery-supermarket-food-and-eats-picture-id1216828053?k=20&m=1216828053&s=612x612&w=0&h=mMGSO8bG8aN0gP4wyXC17WDIcf9zcqIxBd-WZto-yeg=')`,
      backgroundSize: 'cover',  
      marginTop: 2,
      height:700,
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center' ,
           boxShadow:10,
           marginRight: theme.spacing(2),
           marginLeft: theme.spacing(2),
    }}
  >
    <ThemeProvider theme={theme}>
       <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
          marginTop:53,
         marginLeft:49,
         fontSize:20,
        
        }}
        >
         
             </Grid>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
       
         
          <Box component="form" onSubmit={handleSubmit}  
          noValidate sx={{ 
             marginTop: 15,
             marginLeft:1,
             width:400,
              display: 'flex',
              flexDirection: 'column',
              alignItems:'center' ,
              boxShadow: 7,
            }}>
               <Avatar sx={{ m: 2, bgcolor: '#818688' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
        Customer Login
          </Typography>
            <TextInput
           type="text" value={phone_no} onChange={(e)=>{setPhone_no(e.target.value)}}
            name="phone_no"
              margin="normal"
              
              
              id="phone number"
              label="Phone Number"
             
              autoComplete="phone number"
              autoFocus
            />
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            onClick={SaveUser} 
           kind="primary">
              SEND OTP
            </Button>
           <br/>
          
            <br/>
            </Box>
       
        
      </Container>
      
      </Grid>
    </ThemeProvider>
</Box>
  );
}
export default SignIn;