import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './admin/Login';
import Loginotp from './admin/Loginotp';
import Admin from './admin/Admin';
import Shop from './admin/Shop/Shop';
import Product from './admin/Products/Product';
import AddProduct from './admin/Products/addProduct';
import FileUpload  from './admin/Products/Fileupload';
import ImageViewer from './admin/Products/ImageViewer'


function App() {

    return (
      <div className="App">
        
      <BrowserRouter>
    
      <Routes>
         <Route path="/" element={<Login/>} />
        <Route path="/loginotp" element={<Loginotp/>} />
        <Route path="/Customer" element={<Admin/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/Fileupload" element={<FileUpload/>}/>
        <Route path="/ImageViewer" element={<ImageViewer/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    );
  }
  
  export default App;