import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './admin/Login';
import Loginotp from './admin/Loginotp';
import Admin from './admin/Admin';
import Employee from './admin/Employee/Employee';
import AddEmployee from './admin/Employee/addEmployee';
import Shop from './admin/Shop/Shop';
import AddShop from './admin/Shop/addShop';
import Product from './admin/Products/Product';
import AddProduct from './admin/Products/addProduct';
import User from './admin/Users/User';
import AddUser from './admin/Users/addUser';
import FileUpload  from './admin/Products/Fileupload';
import ImageViewer from './admin/Products/ImageViewer';


function App() {

    return (
      <div className="App">
        
      <BrowserRouter>
    
      <Routes>
         <Route path="/" element={<Login/>} />
        <Route path="/loginotp" element={<Loginotp/>} />
        <Route path="/Customer" element={<Admin/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/addemployee" element={<AddEmployee/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/addshop" element={<AddShop/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/Fileupload" element={<FileUpload/>}/>
        <Route path="/ImageViewer" element={<ImageViewer/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    );
  }
  
  export default App;