import React, { useState } from "react";
import Box from '@mui/material/Box';
import { URL } from '../../config/constant/apiConstant';
import { useHistory } from 'react-router-dom';
import './Login.css';
import { Button,TextInput, Pane,Table } from "evergreen-ui";


const SignIn = () => {
    const history = useHistory();
    const[phone_no,setPhone_no]=useState("")
  

  async function login()
  {
    if (phone_no === "") {
      alert("Phone Number must be filled out");
      return false;
    }
    let data={phone_no}
    console.warn(data)   
   let result=await fetch(URL+"/app/v1/cust/signin",{
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
        history.push('/loginotp')
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
          
    }}
  >
      <Pane>
      <Box component="form" onSubmit={handleSubmit}  
          noValidate sx={{ 
             marginTop: 15,
             marginLeft:39,
             width:500,
              flexDirection: 'column',
              alignItems:'center' ,
            
            }}>
          <Pane fontSize="200%">
        Customer Login
          </Pane>
          <Table.Row>
            <Table.TextCell>
              Phone Number
            </Table.TextCell>
            <Table.TextCell>
            <TextInput width={200}
           type="text" value={phone_no} onChange={(e)=>{setPhone_no(e.target.value)}}
            name="phone_no"
              margin="normal"
              id="phone number"
              label="Phone Number"
              placeholder="Enter Number...."
            />
          </Table.TextCell>
            </Table.Row>
            <Table.Row>
              <Table.TextCell marginLeft={180}>
              <Button
            onClick={login} 
            appearance="primary" intent="success">
              SEND OTP
            </Button>
              </Table.TextCell>
            </Table.Row>  
            </Box>
      </Pane>
</Box>
  );
}
export default SignIn;