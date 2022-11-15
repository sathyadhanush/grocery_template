import React, { useState, useEffect } from 'react';
import { Url} from '../../constants/Global';
import {Table,TableBody,TableCell,TableHead,TableRow,TablePagination} from "@material-ui/core";
import { TableFooter } from '@mui/material';
import  Layout  from '../components/Layout';
import { Pane } from 'evergreen-ui';
import {Button} from 'evergreen-ui';

function Shop() {
  
  const[error,setError]=React.useState([]);
  const[isloaded,setIsLoaded]=React.useState([]);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - rows*rowsPerPage);
      useEffect(()=>{
        
        fetch(Url+"/app/v1/cust/shop/listbycust?page=0&limit=10",{
          method:'get',        
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'auth-token': localStorage.getItem('x-auth-token'),
            'x-app-key':localStorage.getItem('app-key')
          }
        })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              console.log(result.data[0]);
              setRows(result.data);
              
            },
          
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    if (!error) {
      return <div>Error:{error.result.data[0]}</div>;
    } else if (!isloaded) {
      return <div>Loading...</div>;
    } else {
    
      return (
       <Layout>
        <Button marginLeft={1250} position="absolute" appearance="primary" intent="success">
       <a href='/shop/addshop'> Add Shop</a>
      </Button>
        <Pane className='text-black'>Shop</Pane>
      
        <Pane>
         <Table>
           <TableHead>
             <TableRow>  
             <TableCell >Shop ID</TableCell>
             <TableCell >Shop Name</TableCell>   
             <TableCell >Phone Number</TableCell>  
             <TableCell >Email</TableCell>
             </TableRow>
           </TableHead>
           {rows
           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
           .map((row, index) => (
           <TableBody>
             <TableRow>
             <TableCell>{row.shop_id}</TableCell>
             <TableCell>{row.shop_name}</TableCell>
             <TableCell>{row.phone_no}</TableCell>
             <TableCell>{row.email_addr}</TableCell>  
        </TableRow>
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
             </TableBody>
           ))}
         </Table>
         <Table>
        <TableBody /> 
         <TableFooter>
          <TableRow>
      <TablePagination
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}         
        rowsPerPageOptions={[5,10]}
        labelRowsPerPage={<span>Rows:</span>}
        labelDisplayedRows={({ page }) => {
          return `Page: ${page}`;
        }}
        backIconButtonProps={{
          color: "primary"
        }}
        nextIconButtonProps={{ color: "primary" }}
        SelectProps={{
          inputProps: {
            "aria-label": "page number"
          }
        }}
        showFirstButton={true}
        showLastButton={true}
     
      />
    </TableRow>
  </TableFooter>
</Table>
         </Pane>
    </Layout>
      );
     }
  
    }
  export default Shop;
