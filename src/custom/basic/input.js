import {Input} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
export const TSearch = ({loading=false,onChange=null,onSearch=null})=>{
    const [value,setValue]=useState();
    const handleChange = ({target:{value}})=>{
        onChange?.(value)
        setValue(value)
    }
    return (
        <Input action={{
            icon: 'search',
            loading,
            onClick:()=>onSearch(value)}} size={"small"}  onChange={handleChange} value={value} placeholder='Search...' />
    )
}