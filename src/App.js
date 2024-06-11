import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetail from './pages/Product/ProductDetail';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import UserManagement from './pages/AdminSite/UserManagement';
import ProductManagement from './pages/AdminSite/ProductManagement';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:productId' element={<ProductDetail />} /> 
        <Route path='/men' element={<Category name='Nước hoa Nam' type='Nam' />} /> 
        <Route path='/women' element={<Category name='Nước hoa Nữ' type='Nữ' />} /> 
        <Route path='/unisex' element={<Category name='Nước hoa Unisex' type='Unisex' />} /> 
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/admin/user-management' element={<UserManagement />} /> 
        <Route path='/admin/product-management' element={<ProductManagement />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
