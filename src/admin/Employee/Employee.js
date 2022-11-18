import React, { useState, useEffect } from 'react';
import { Url} from '../../constants/Global';
import {Table,TableBody,TableCell,TableHead,TableRow,TablePagination} from "@material-ui/core";
import { TableFooter } from '@mui/material';
import  Layout  from '../components/Layout';
import { Pane } from 'evergreen-ui';
import {Button} from 'evergreen-ui';

function Employee() {
  

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
      rowsPerPage - Math.min(rowsPerPage, rows.length - rows * rowsPerPage);
    useEffect(() => {
  
  
      fetch(Url + "/app/v1/cust/emp/listbycust?page=0&limit=10", {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('x-auth-token'),
          'x-app-key':localStorage.getItem('app-key')
        }
      })
        .then(res => res.json())
        .then(
          (result) => {
        
            console.log(result.data);
            setRows(result.data);
            if(result.success===true){
              console.log("customer employee");
          
              }else{
                alert(JSON.stringify(result.message));
               }
          },
       
        )
    }, [])
   
  
      return (
       <Layout>
        <Button marginLeft={1250} position="absolute" appearance="primary" intent="success">
       <a href='/employee/addemployee'> Add Employee</a>
      </Button>
        <Pane className='text-black'>Employee</Pane>
      
        <Pane>
         <Table>
           <TableHead>
             <TableRow>  
             <TableCell >Employee id</TableCell>
             <TableCell >First Name</TableCell>   
             <TableCell >Last Name</TableCell>  
             <TableCell >Email</TableCell>
             <TableCell >Phone Number</TableCell>
             <TableCell >Edit</TableCell>
             <TableCell >Delete</TableCell>
             </TableRow>
           </TableHead>
           {rows
           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
           .map((row, index) => (
           <TableBody>
             <TableRow>
             <TableCell>{row.emp_id}</TableCell>
             <TableCell>{row.first_name}</TableCell>
             <TableCell>{row.last_name}</TableCell>
             <TableCell>{row.email_addr}</TableCell> 
             <TableCell>{row.phone_no}</TableCell>
             <TableCell><Button ><a href="/employee/addemployee?id=1">Edit</a></Button></TableCell>
             <TableCell><Button ><a href="/">Delete</a></Button></TableCell>
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
  
    
  export default Employee;
