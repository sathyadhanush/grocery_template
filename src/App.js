import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Login from './admin/Login';
// import Loginotp from './admin/Loginotp';
// import Admin from './admin/components/Layout';
// import Employee from './admin/Employee/Employee';
// import AddEmployee from './admin/Employee/addEmployee';
// import Shop from './admin/Shop/Shop';
// import AddShop from './admin/Shop/addShop';
// import Product from './admin/Products/Product';
// import AddProduct from './admin/Products/addProduct';
// import User from './admin/Users/User';
// import FileUpload  from './admin/Products/Fileupload';
// import ImageViewer from './admin/Products/ImageViewer';

import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './components';
function App() {

    return (
      <div className="App">
         <Provider store={store}>
            <AppContainer />
         </Provider>
      {/* <BrowserRouter>
    
      <Routes> */}
         {/* <Route path="/" element={<Login/>} />
        <Route path="/loginotp" element={<Loginotp/>} />
        <Route path="/Customer" element={<Admin/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/employee/addemployee" element={<AddEmployee/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/addshop" element={<AddShop/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/addproduct" element={<AddProduct/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/Fileupload" element={<FileUpload/>}/>
        <Route path="/ImageViewer" element={<ImageViewer/>}/> */}


      {/* </Routes>
      </BrowserRouter> */}
      </div>
    );
  }
  
  export default App;