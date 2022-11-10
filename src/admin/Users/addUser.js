import React, { useState,useEffect} from 'react'
import { Url} from '../../constants/Global';
import  Layout  from '../components/Layout';
import {Table,Button,TextInput, Pane} from "evergreen-ui";

function UserPost(){
     
  const [customer_id,setCustomer_id]=useState("");
  const[email_id,setEmail_id]=useState("");
  const[phone_no,setPhone_no]=useState("");
  const[city,setCity]=useState("");
  const[shop_name,setShop_name]=useState("");
  const[state,setState]=useState("");
  const[pin_code,setPin_code]=useState("");

   function saveUser()
   {

     if (email_id === "") {
       alert("Email must be filled out");
       return false;
     }
     if (phone_no === "") {
       alert("Phone number must be filled out");
       return false;
     }
     if (city === "") {
       alert("City must be filled out");
       return false;
     }
     if (state === "") {
       alert("state must be filled out");
       return false;
     }
     if (pin_code === "") {
       alert("Pin code must be filled out");
       return false;
     }

     

     console.log(localStorage.getItem('edit_customer_id').toString())

     console.log(customer_id);
     console.warn(customer_id,email_id,shop_name,phone_no,city,state,pin_code);
     let data={customer_id,email_id,shop_name,phone_no,city,state,pin_code}
     fetch(Url+"/v1/customer_shop/ins_m",{
       method:'POST',
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json',
         'auth-token': localStorage.getItem('x-auth-token')
       },
       body:JSON.stringify(data)  
     }).then((result)=>{
       //console.warn("result",result);
       result.json().then((resp)=>{
         console.warn("resp",resp)
         alert("successfully added...");
       })
     })
   } 
  

   useEffect(() => {
     const items = JSON.parse(localStorage.getItem('edit_customer_id'));
     if (items) {
       setCustomer_id(items);
     }
   }, []);
    
    
    return(
        <Layout>
      <Pane className='text-black'>Add User</Pane>
      <Table.Row >
      <Table.TextCell>
      customer id
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="customer id" type="text" value={customer_id} onChange={(e)=>{setCustomer_id(e.target.value)}} name="Customer id"/>
          </Table.TextCell>
          <Table.TextCell>
          Email
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Email" type="text" value={email_id} onChange={(e)=>{setEmail_id(e.target.value)}} name="email_id"/>
      </Table.TextCell>
      </Table.Row >
      <Table.Row >
      <Table.TextCell>
      Phone Number
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Phone Number" type="text" value={phone_no} onChange={(e)=>{setPhone_no(e.target.value)}} name="phone_no"/>
      </Table.TextCell>
      <Table.TextCell>
      Pin code
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Pin code" type="text" value={pin_code} onChange={(e)=>{setPin_code(e.target.value)}} name="phone_no"/>
      </Table.TextCell>

      </Table.Row>
      <Table.Row >
      <Table.TextCell>
      City
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="City" type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} name="city"/>
      </Table.TextCell>
      <Table.TextCell>
      Shop Name
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Shop Name" type="text" value={shop_name} onChange={(e)=>{setShop_name(e.target.value)}} name="shop_name"/>
      </Table.TextCell>

      </Table.Row>
      <Table.Row>
        <Table.TextCell>
        State
        </Table.TextCell>
        <Table.TextCell>
        <TextInput label="State" type="text" value={state} onChange={(e)=>{setState(e.target.value)}} name="state"/>
        </Table.TextCell>
        <Table.TextCell></Table.TextCell>
        <Table.TextCell></Table.TextCell>
      </Table.Row>
         <Table.Row>
         <Table.TextCell>      
         <Button marginLeft={700} position="absolute" appearance="primary" intent="success" onClick={saveUser}>
       <a href='/user'> Add User</a>
      </Button>
      </Table.TextCell>
         </Table.Row>
      </Layout>
     
    );
  }
  export default UserPost;