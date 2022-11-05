import {Table,Button,Heading,TextInput,FilePicker} from "evergreen-ui"
import Layout from './components/Layout';

function AddProduct() {
    
    return ( 
        <Layout>
            <Heading marginLeft={250} size={900} is="h1">Add Product</Heading>
    <Table.Row marginLeft={250} height="auto" paddingY={10} >
    <Heading marginLeft={20} size={500} is="h1">Details</Heading>
    <Table.TextCell  paddingY={40}>
    <Heading marginLeft={50} size={250} is="h6">Product Name:<TextInput marginLeft={45} name="text-input-name" placeholder="Enter Name..." /></Heading> <br />
    <Heading marginLeft={50} size={250} is="h6">Category:<TextInput marginLeft={75} name="text-input-name" placeholder="Enter Category..." /></Heading><br />
    </Table.TextCell>
    <Table.TextCell>
    <Heading marginLeft={50} size={250} is="h6">Phone Number:<TextInput marginLeft={40} name="text-input-number" placeholder="Enter Number..." /></Heading> 
    </Table.TextCell>
</Table.Row  >
<Table.Row marginLeft={250} height="auto" paddingY={10}>
<Heading marginLeft={20} size={500} is="h1">Rate</Heading>
    <Table.TextCell paddingY={40}>
    <Heading marginLeft={65} size={250} is="h6">MRP:<TextInput marginLeft={95} name="text-input-mrp" placeholder="Enter MRP..." /></Heading> <br />
    </Table.TextCell>
    <Table.TextCell>
    <Heading marginLeft={60} size={250} is="h6">File Picker:<FilePicker multiple width={250} onChange={(files) => console.log(files)} placeholder="Select the file here!" /></Heading> 
    </Table.TextCell>
</Table.Row ><br/>
<Button marginLeft={1000} position="absolute" appearance="primary" intent="success">
        Add Product
      </Button>  <Button marginLeft={1130}>Cancel</Button>
        </Layout> 
    );
}

export default AddProduct;