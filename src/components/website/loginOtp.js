import React, { useState,useEffect } from "react";
import Box from '@mui/material/Box';
import { URL } from '../../config/constant/apiConstant';
import { useHistory } from 'react-router-dom';
import './Login.css'
import { Button,TextInput,Pane,Table } from "evergreen-ui";
import {storeLocal} from "../../helpers/projectHelper";
import {USER_DATA} from "../../config/constant/projectConstant";
import {ADMIN} from "../../config/constant/routePathConstant";
  const Signotp = () => {
    const history = useHistory();
  
  const[phone_no,setPhone_no]=useState("");
  const [otp, setOtp] = useState([]);
  useEffect(() => {
    console.log('otp component');
  },[])

  async function SaveUser()
  {
    if (phone_no === "") {
      alert("otp must be filled out");
      return false;
    }
    let data={phone_no}
    console.warn(data)   
   let result=await fetch(URL+"/app/v1/cust/signin/otp",{
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
      localStorage.setItem('user_type',"admin")
      localStorage.setItem('app-key', obj.app_key);
      
      let userObj= {
        user_type : 'admin'
      }
      storeLocal(userObj,USER_DATA)
      history.push(ADMIN)
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
       
    }}
  >
      <Pane >
          <Box component="form" onSubmit={handleSubmit}  
          noValidate sx={{ 
            marginTop: 15,
            marginLeft:39,
            width:500,
             flexDirection: 'column',
             alignItems:'center' ,
              
            }}>
     
    
   
          <Pane fontSize="200%">
            OTP
          </Pane>

         <Table.Row>
         <Table.TextCell>
              OTP
            </Table.TextCell>
            <Table.TextCell>
            <TextInput  width={200}
           type="text" value={otp} onChange={(e)=>{setOtp(e.target.value)}}
            name="otp"
              margin="normal"
              id="otp"
              label="otp"
              placeholder="Enter the OTP"
            />
          </Table.TextCell>
            </Table.Row>
            <Table.Row>
              <Table.TextCell>
              <Button marginLeft={180}
            onClick={SaveUser} 
            appearance="primary" intent="success">
              Login
            </Button>
              </Table.TextCell>
            </Table.Row>  
            
         
              
            </Box>
       
        
      </Pane>
      
   
   
  </Box>
  );
}
export default Signotp;