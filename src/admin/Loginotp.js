import React, { useState,useEffect } from "react";
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
import './Login.css'
import Grid from '@mui/material/Grid';
import { Button,TextInput,Checkbox } from "@orkaapps/components";


const theme = createTheme();

  const Signotp = () => {
    const navigate = useNavigate();
  
  const[phone_no,setPhone_no]=useState("");
  const [otp, setOtp] = useState([]);


  async function SaveUser()
  {
    if (phone_no === "") {
      alert("otp must be filled out");
      return false;
    }
    let data={phone_no}
    console.warn(data)   
   let result=await fetch(Url+"/app/v1/cust/signin/otp",{
      method:'post',
      body:JSON.stringify(data),  
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
         'auth-otp':otp
         
      }
    })
      result=await result.json()

      console.log(JSON.stringify(result.data));
      if(result.success===true){
      const myJSON = JSON.stringify(result.data);
      console.log(JSON.stringify(result.data));
      let obj = JSON.parse(myJSON);
      localStorage.setItem('x-auth-token', obj.token);
   
      localStorage.setItem('app-key', obj.app_key);
      console.log(JSON.stringify( obj.token))
      navigate('/customer')
      }else{
        alert(JSON.stringify(result.message));
      }
      
  } 

 
useEffect(() => {
  const items = JSON.parse(localStorage.getItem('phone_no'));
  if (items) {
    setPhone_no(items);
  }
}, []);


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box
    noValidate sx={{
      background: `url('https://thumbs.dreamstime.com/z/food-supplies-period-quarantine-blue-background-set-grocery-items-canned-food-vegetables-pasta-food-supplies-181959811.jpg')`,
      backgroundSize: 'cover',  
      marginTop: 2,
      height:700,
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center' ,
           boxShadow:12,
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
          marginTop:18,
         marginLeft:50,
         fontSize:30,
        
        }}
        >
     </Grid>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
       
         
          <Box component="form" onSubmit={handleSubmit}  
          noValidate sx={{ 
             marginTop: 15,
              display: 'flex',
              flexDirection: 'column',
              alignItems:'center' ,
              boxShadow: 7,
              
            }}>
               <Avatar sx={{ m: 2, bgcolor: '#818688' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            OTP
          </Typography>
            <TextInput
           type="text" value={otp} onChange={(e)=>{setOtp(e.target.value)}}
            name="otp"
              margin="normal"
                           
              id="otp"
              label="OTP"
             
              autoComplete="otp"
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            onClick={SaveUser} 
             kind="primary"
            >
              Login
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
export default Signotp;