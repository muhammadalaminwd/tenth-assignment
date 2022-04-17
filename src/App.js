import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/checkout' element={
        <RequireAuth>
        <Checkout></Checkout>
        </RequireAuth>
      }></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
