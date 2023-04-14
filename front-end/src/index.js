/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route,Routes} from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";


import Register from './components/Register';

import Profile from './components/Profile';
import UserRoute from './privateRoute/UserRoute'
import Update from './components/Update';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "components/Login";

import { Provider } from 'react-redux'
import store from "store/store";
import AjoutArticle from "./components/AjoutArticle";
import ListProduit from "components/ListProduit";
import AdminRoute from "privateRoute/AdminRoute";
import Admin from "Pages/AdminDashBoard/Admin";
import User from "Pages/UserDashBoard/User";
import { Edit } from "components/Edit";
import Ordres from "components/Ordres";
import { CartProvider } from "CartContext";
import Cart from './Cart';

// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CartProvider>
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Index/>}  />
     
  

{/* 
      <Route
          path="about"
          element={
            shouldRedirect ? (
              <Navigate replace to="/home" />
            ) : (
              <About />
            )
          }
        /> */}
    </Routes>
{/* 

         
    <Routes>
      <Route path='/login/register' element ={<Register/>} />
      <Route path='/login' element ={<Login/>} />
      <Route path='/addProduct' element ={<AjoutArticle/>} />
      <Route path='/listProduct' element ={<ListProduit/>} />

      
      <Route element={<UserRoute/>} >
      
      <Route path='/account' element ={<Profile/>} />
      <Route path='/update/:id' element={<Update/>} />
      <Route path='/list' element={<List/>}/>
     
    </Route>
    </Routes> */}



    <Routes>
    <Route path='/addProduct' element ={<AjoutArticle/>} />
      <Route path='/listProduct' element ={<ListProduit/>} />
      <Route path='/login/register' element ={<Register/>} />
      <Route path='/cart' element ={<Cart/>} />

      <Route path='/login' element ={<Login/>} />
      <Route element={<UserRoute/>}>
        <Route path="/user" element={<User/>}/>
      <Route path='/account' element ={<Profile/>} />
    
          
      </Route>
      <Route element={<AdminRoute/>}> 
      <Route path="/admin" element={<Admin/>}/>
      <Route path='/update/:id' element={<Update/>} />
      <Route path='/list' element={<List/>}/>
      <Route path ='edit' element={<Edit/>}></Route>
      <Route path='/listOrdre' element={<Ordres/>}></Route>
      </Route>
   
    </Routes>
  </BrowserRouter>
  </Provider>
  </CartProvider>
);
