import React, { useState,useEffect} from 'react'
import { Url} from '../../constants/Global';
import axios from "axios";
import  Layout  from '../components/Layout';
import {Table,Button,TextInput, Pane,Select} from "evergreen-ui";

function ShopPost(){
    const[customer_id,setCustomer_id]=useState("");
    const[shop_name,setShop_name]=useState("");
     const[email_addr,setEmail_addr]=useState("");
     const[phone_no,setPhone_no]=useState("");
     const [city_id,setCity_id]=useState([]);
     const [city,setCity] = useState([]);
     const [state_id,setState_id]=useState([]);
     const [state,setState]=useState([]);
     const[pin_code,setPin_code]=useState("");
     const [open,setOpen]=useState("");
    const [open1,setOpen1]=useState("");
   const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };
    function saveShop()
    {
        if (shop_name === "") {
            alert("Email must be filled out");
            return false;
          }
          if (email_addr === "") {
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
            alert("State must be filled out");
            return false;
          }
         
          if (pin_code === "") {
            alert("Pin code must be filled out");
            return false;
          }
          console.log(localStorage.getItem('edit_customer_id').toString())

          console.log(customer_id);
          console.warn(shop_name,email_addr,city_id,state_id,phone_no,pin_code);
          let data={shop_name,email_addr,city_id,state_id,phone_no,pin_code}
          fetch(Url+"/app/v1/cust/shop",{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
              'auth-token': localStorage.getItem('x-auth-token'),
              'x-app-key': localStorage.getItem('app-key')
            },
            body:JSON.stringify(data)  
          }).then((result)=>{
            //console.warn("result",result);
            result.json().then((resp)=>{
              console.warn("resp",resp)
             
              if(resp.success===true){
                alert("successfully added...");
            
                }else{
                  alert(JSON.stringify(resp.data));
                 }
            })
          })
        } 
       
    
        useEffect(() => {
          const items = JSON.parse(localStorage.getItem('edit_customer_id'));
          if (items) {
            setCustomer_id(items);
          }
        }, []);
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
      <Pane className='text-black'>Add Shop </Pane>
      <Table.Row >
      <Table.TextCell>
      Shop Name
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Shop Name" type="text" value={shop_name} onChange={(e)=>{setShop_name(e.target.value)}} name="shop_name"/>
          </Table.TextCell>
          <Table.TextCell>
          Email
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Email" type="text" value={email_addr} required={true} onChange={(e)=>{setEmail_addr(e.target.value)}} name="email_addr"/>
      </Table.TextCell>
      </Table.Row >
          <Table.Row >
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
      Phone Number
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Phone Number" type="text" value={phone_no} onChange={(e)=>{setPhone_no(e.target.value)}} name="phone_no"/>
      </Table.TextCell>
      <Table.TextCell>
      Pin code
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Pin code" type="text" value={pin_code} onChange={(e)=>{setPin_code(e.target.value)}} name="pin_code"/>
      </Table.TextCell>

      </Table.Row>
         <Table.Row>
         <Table.TextCell>      
         <Button marginLeft={700} position="absolute" appearance="primary" intent="success" onClick={saveShop}>
       <a href='/shop'> Add Shop</a>
      </Button>
      </Table.TextCell>
         </Table.Row>
      </Layout>
     
    );
  }
  export default ShopPost;