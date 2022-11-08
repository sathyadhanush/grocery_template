import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Admin from './admin/Admin';
import Shop from './admin/Shop/Shop';
import Product from './admin/Products/Product';



function App() {

    return (
      <div className="App">
        
      <BrowserRouter>
    
      <Routes>
   
        <Route path="/" element={<Admin/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/product" element={<Product/>}/>
    
      </Routes>
      </BrowserRouter>
      </div>
    );
  }
  
  export default App;