import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Admin from './Admin';
import Product from './Product';
import AddProduct from './AddProduct';
import Layout from './components/Layout';
import SideNavbar from './components/SideNavbar';
function App() {

    return (
      <div className="App">
        
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Admin/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/AddProduct" element={<AddProduct/>} />
        <Route path="/Layout" element={<Layout/>} />
        <Route path="/SideNavbar" element={<SideNavbar/>} />
      </Routes>
      </BrowserRouter>
      </div>
    );
  }
  
  export default App;