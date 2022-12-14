import React, { useState,useEffect} from 'react'
import { Url} from '../../constants/Global';
import axios from "axios";
import  Layout  from '../components/Layout';
import {Table,Button,TextInput, Pane,Select} from "evergreen-ui";
import  Fileupload  from './Fileupload';

function ProductPost(){
  const[product_name,setProduct_name]=useState("");
   const[description,setDescription]=useState("");
   const[category_id,setCategory_id]=useState([]);
   const[category_code,setCategory_code]=useState([]);
   const[uom_id,setUom_id]=useState([]);
   const[uom_code,setUom_code]=useState([]);
   const[mrp,setMrp]=useState("");
   const[purchase_price,setPurchase_price]=useState("");
   const[expiry_date,setExpiry_date]=useState("");
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
    function saveProduct()
    {

      if (product_name === "") {
        alert("product name must be filled out");
        return false;
      }
      if (description === "") {
        alert("Description must be filled out");
        return false;
      }
      if (category_id === "") {
        alert("category must be filled out");
        return false;
      }
      if (uom_id === "") {
        alert("UOM must be filled out");
        return false;
      }
      if (purchase_price === "") {
        alert("purchase price must be filled out");
        return false;
      }
      if (mrp === "") {
        alert("MRP must be filled out");
        return false;
      }
      if (expiry_date === "") {
        alert("Expiry code must be filled out");
        return false;
      }

      

      console.warn(product_name,description,category_id,uom_id,mrp,purchase_price,expiry_date);
      let data={product_name,description,category_id,uom_id,mrp,purchase_price,expiry_date}
      fetch(Url+"/app/v1/product",{
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
              alert(JSON.stringify(resp.data));
             }
        })
      })
    } 
    useEffect(function(){
      axios
      .get(Url+"/app/v1/product/category/list?page=0&limit=10")
      .then((response) => setCategory_code(response.data.data))
      .then((error) => console.log(error));
     },[]);
     useEffect(function(){
      axios
      .get(Url+"/app/v1/product/uom/list?page=0&limit=10")
      .then((response) => setUom_code(response.data.data))
      .then((error) => console.log(error));
     },[]);


    return(
       
        <Layout>
      <Pane className='text-black'>Add Product </Pane>
      <Table.Row >
      <Table.TextCell>
      Product Name
      </Table.TextCell>
      <Table.TextCell>
          <TextInput label="Product Name" type="text" value={product_name} onChange={(e)=>{setProduct_name(e.target.value)}} name="product_name"/>
          </Table.TextCell>
          <Table.TextCell>
          Description
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Description" type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} name="Description"/>
      </Table.TextCell>
      </Table.Row >
          <Table.Row >
          <Table.TextCell>
          Category
      </Table.TextCell>
      <Table.TextCell>

        <Select
          width="60%"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category_id} 
          onChange={(e)=>{setCategory_id(e.target.value)}}
        >
          <option value="select">Select....</option>
          {category_code.map((categorys) =>(
                <option key={categorys.category_code} value={categorys.category_id}>
                    {categorys.category_code}
                </option>
            ))}
          
        </Select>

      </Table.TextCell>
      
    
      <Table.TextCell>
      UOM
      </Table.TextCell>
      <Table.TextCell>
  
        <Select
           width="60%"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open1}
          onClose={handleClose1}
          onOpen={handleOpen1}
          value={uom_id} 
          onChange={(e)=>{setUom_id(e.target.value)}}
        >
          <option value="select">Select....</option>
          {uom_code.map((uoms) =>(
                <option key={uoms.uom_code} value={uoms.uom_id}>
                    {uoms.uom_code}
                </option>
            ))}
          
        </Select>

      </Table.TextCell>
      </Table.Row>
      <Table.Row >
      <Table.TextCell>
      MRP
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="MRP" type="text" value={mrp} onChange={(e)=>{setMrp(e.target.value)}} name="MRP"/>
      </Table.TextCell>
      <Table.TextCell>
      Purchase Price
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Purchase Price" type="text" value={purchase_price} onChange={(e)=>{setPurchase_price(e.target.value)}} name="Purchase Price"/>
      </Table.TextCell>

      </Table.Row>
     
      <Table.Row height="20%">
      <Table.TextCell>
      Expiry Date
      </Table.TextCell>
      <Table.TextCell>
      <TextInput label="Expiry Date" type="text" value={expiry_date} onChange={(e)=>{setExpiry_date(e.target.value)}} name="expiry_date"/>
      </Table.TextCell>
      <Table.TextCell>
      File Upload
      </Table.TextCell>
      <Table.TextCell>
      <Fileupload/>
      </Table.TextCell>
      </Table.Row>
         

          
      <Table.Row>
        <Table.TextCell>
        <Button marginLeft={700} position="absolute" appearance="primary" intent="success" onClick={saveProduct}>
       <a href='/product'> Add Product</a>
      </Button>
        </Table.TextCell>
        </Table.Row>
         
         
      
      </Layout>
     
    );
  }
  export default ProductPost;