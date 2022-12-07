import React, { useState, useEffect } from "react";
import { URL } from '../../config/constant/apiConstant';


import {useDispatch} from "react-redux";
import { getProductApi } from "../../api/productApi";
import { SiteTable } from "../../custom/basic/table";

function Product() {
  const dispatch = useDispatch();
  const limit =10;
  const skip = 0;

  useEffect(() => {
      dispatch(getProductApi({limit,skip}))
  },[])

  const columns = [
    {title: 'Product Id', field: 'product_id'},
    {title: 'Product name', field: 'product_name'},
    {title: 'Category code', field: 'category_code'},
    {title: 'MRP', field: 'mrp'},
    {title: 'File upload', field: 'upload'},
];
const postList = [
  {product_id:1,product_name:'Apple',category_code:"123",mrp:120,upload:true}
]
  const handleAdd = () => {

  }
  const handleSearch = () => {

  }
  const handlePageChange = () => {

  }
  const handleRemove = () =>{

  }

  return (
    <div>
         <SiteTable loading={false} onTagClick={handleRemove}  search addButtonText={'Create Product'} onPageChange={handlePageChange} limit={limit} searchKey={'post_title'} onSearch={handleSearch} searchLoading={false} onAdd={handleAdd}    columns={columns} data={postList}/>
    </div>
  )
}


export default Product;
