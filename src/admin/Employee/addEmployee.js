import React, { useState,useEffect} from 'react'
import { Url} from '../../constants/Global';
import axios from "axios";
import  Layout  from '../components/Layout';
import {Table,Button,TextInput, Pane,Select} from "evergreen-ui";

function EmployeePost(){
    
    const [first_name,setfirst]=useState("");
    const [last_name,setlast]=useState("");
    const [email_addr,setEmail_addr]=useState("");
    const [phone_no ,setphone] = useState("");
    const [role_id ,setRole_id] = useState([]);
    const [roles ,setRoles] = useState([]);
    const [city_id,setCity_id]=useState([]);
    const [city,setCity] = useState([]);
    const [state_id,setState_id]=useState([]);
    const [state,setState]=useState([]);
    const [street_name ,setStreet_name] = useState([]);
    const [near_by_place ,setNear_by_place] = useState([]);
    const [pin_code ,setPin_code] = useState([]);
    const [open,setOpen]=useState("");
    const [open1,setOpen1]=useState("");
  
   const [opens,setOpens]=useState("");
    const handleCloses = () => {
      setOpens(false);
    };
  
    const handleOpens = () => {
      setOpens(true);
    };
    const handleClose1 = () => {
      setOpen1(false);
    };
  
    const handleOpen1 = () => {
      setOpen1(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
   
  
      function saveEmployee()
      {
  
  
        if (first_name === "") {
          alert("First Name must be filled out");
          return false;
        }
        if (last_name === "") {
          alert("Last Name must be filled out");
          return false;
        }
        if (email_addr === "") {
          alert("Email ID must be filled out");
          return false;
        }
        if (phone_no === "") {
          alert("Phone Number must be filled out");
          return false;
        }
        if (city === "") {
          alert("City must be filled out");
          return false;
        }
        if (state === "") {
          alert("State must be filled out");
          return false;
        }
        if (street_name === "") {
          alert("street name must be filled out");
          return false;
        }
        if (near_by_place === "") {
          alert("near by place must be filled out");
          return false;
        }
        if (pin_code === "") {
          alert("near by place must be filled out");
          return false;
        }
    
        console.warn(first_name,last_name,email_addr,phone_no,role_id,street_name,city_id,state_id,near_by_place,pin_code);
        let data={first_name,last_name,email_addr,phone_no,role_id,street_name,city_id,state_id,near_by_place,pin_code}
  
  
        fetch(Url+"/app/v1/cust/emp",{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'auth-token': localStorage.getItem('x-auth-token'),
            'x-app-key': localStorage.getItem('app-key')
          },
          body:JSON.stringify(data)  
        }).then((result)=>{
         
          result.json().then((resp)=>{
            console.warn("resp",resp)
           
            if(resp.success===true){
              alert("successfully Posteded...");
          
              }else{
                alert(JSON.stringify(resp.message));
               }
          })
        })
      } 
      useEffect(function(){
        axios
        .get(Url+"/app/v1/cust/role/list")
        .then((response) => setRoles(response.data.data))
        .then((error) => console.log(error));
       },[]);
       useEffect(function(){
        axios
        .get(Url+"/app/v1/city/list")
        .then((response) => setCity(response.data.data))
        .then((error) => console.log(error));
       },[]);
       useEffect(function(){
        axios
        .get(Url+"/app/v1/state/list")
        .then((response) => setState(response.data.data))
        .then((error) => console.log(error));
       },[]);

    return(
       
        <Layout>

      <Pane className='text-black'>Add Employee</Pane>
      <Table.Row >
      <Table.TextCell>
      First Name
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="First Name" type="text" value={first_name} required={true}  onChange={(e)=>{setfirst(e.target.value)}} name="first_name"/>
          </Table.TextCell>
          <Table.TextCell>
          Last Name
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Last Name" type="text" value={last_name} required={true} onChange={(e)=>{setlast(e.target.value)}} name="last_name"/>
      </Table.TextCell>
      </Table.Row >
      <Table.Row >
      <Table.TextCell>
      Email
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Email" type="text" value={email_addr} required={true} onChange={(e)=>{setEmail_addr(e.target.value)}} name="email_id"/>
          </Table.TextCell>
          <Table.TextCell>
          Phone Number
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Phone Number " type="text" value={phone_no} required={true} onChange={(e)=>{setphone(e.target.value)}} name="phone_no"/>
      </Table.TextCell>
      </Table.Row >
      <Table.Row >
      <Table.TextCell>
      Street Name
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Street Name " type="text" value={street_name} required={true} onChange={(e)=>{setStreet_name(e.target.value)}} name="street_name"/>
          </Table.TextCell>
          <Table.TextCell>
          Near By Place
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Near By Place" type="text" value={near_by_place} required={true} onChange={(e)=>{setNear_by_place(e.target.value)}} name="near_by_place"/>
      </Table.TextCell>
      </Table.Row >
      <Table.Row >
      <Table.TextCell>
      Pin code
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Pin code " type="text" value={pin_code} required={true} onChange={(e)=>{setPin_code(e.target.value)}} name="pin_code"/>
      </Table.TextCell>
      <Table.TextCell>
      State
      </Table.TextCell>
      <Table.TextCell>
      <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open1}
          onClose={handleClose1}
          onOpen={handleOpen1}
          value={state_id} 
          onChange={(e)=>{setState_id(e.target.value)}}
        >
              <option value="select">Select....</option>
          {state.map((state) =>(
                <option key={state.state_name} value={state.state_id}>
                    {state.state_name}
                </option>
            ))}
          
        </Select>
      </Table.TextCell>
      </Table.Row>
          <Table.Row >
          <Table.TextCell>
          Roles
      </Table.TextCell>
      <Table.TextCell>

      <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={opens}
          onClose={handleCloses}
          onOpen={handleOpens}
          value={role_id} 
          onChange={(e)=>{setRole_id(e.target.value)}}
        >
            <option value="select">Select....</option>
          {roles.map((role) =>(
                <option key={role.role_name} value={role.role_id}>
                    {role.role_name}
                    
                </option>
            ))}
          
        </Select>

      </Table.TextCell>
      
    
      <Table.TextCell>
      city
      </Table.TextCell>
      <Table.TextCell>
  
      <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={city_id} 
          onChange={(e)=>{setCity_id(e.target.value)}}
        >
             <option value="select">Select....</option>
          {city.map((citys) =>(
                <option key={citys.city_name} value={citys.city_id}>
                    {citys.city_name}
                </option>
            ))}
          
        </Select>

      </Table.TextCell>
      </Table.Row>
      
         
         <Button marginLeft={700} position="absolute" appearance="primary" intent="success" onClick={saveEmployee}>
       <a href='/employee'> Add Employee</a>
      </Button>
      </Layout>
     
    );
  }
  export default EmployeePost;