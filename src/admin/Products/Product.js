import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Url} from '../../constants/Global';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import { TableFooter } from '@mui/material';
import  Layout  from '../components/Layout';

const useStyles = makeStyles((theme) => ({
 
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
   
    marginLeft:900,
  },
}));

function Product() {
  
  
  const classes = useStyles();

  const[error,setError]=React.useState([]);
const [rows, setRows] = useState([]);
const [rowsPerPage, setRowsPerPage] = React.useState(5);
const [page, setPage] = React.useState(0);
const[isloaded,setIsLoaded]=React.useState([]);
  
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
      
      
      fetch(Url+"/app/v1/product/listbycust?page=0&limit=100",{
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
           
            console.log('test1');
           
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
        <Box component="main" > 
        
      
        <h1>Product</h1>
    <TableContainer component={Paper}>
       <div>
     
    </div>
      
        <div>
         <Table className={classes.table} aria-label="simple table">
           <TableHead>
             <TableRow>  
             <TableCell >Product Id</TableCell>
             <TableCell >Product Name</TableCell>   
             <TableCell >Category Code</TableCell>  
             <TableCell >MRP</TableCell>
             <TableCell >File Upload</TableCell>
           
            
             </TableRow>
           </TableHead>
           {rows
           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
           .map((row, index) => (
           <TableBody>
             <TableRow>
             <TableCell>{row.product_id}</TableCell>
             <TableCell>{row.product_name}</TableCell>
             <TableCell>{row.category_code}</TableCell>
             <TableCell>{row.mrp}</TableCell>
             
             
             
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
         </div>

    </TableContainer>
    </Box>
    </Layout>
      );
     }
  
    }
  export default Product;
