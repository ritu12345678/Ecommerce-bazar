
import React from 'react'

import HomePage from './Page/HomePage'
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductView from './Component/ProductView';
import ProductDetail from './Component/ProductDetail';
import NotFoundPage from './Component/NotFoundPage';
import Filter from './Page/Filter';
import FilterPanel from './Component/FilterPanel';
import My_Cart from './Component/My_Cart';
import SellerForm from './Component/SellerForm';
import SellerOnlineForm from './Component/SellerOnlineForm';
import Profile from './Component/Profile';
import ChangePassword from './Component/ChangePassword';
import MyAccount from './Component/MyAccount';
import EditProfile from './Component/EditProfile';
import Checkout from './Component/Checkout';
import Wishlist from './Component/Wishlist';

const App = () => {
  return <>

    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/product-listing-pages/:Title" element={<ProductView />} />
      <Route path="/product-filter-page/:cat_name/:cat_id" element={<Filter />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/my-cart/" element={<My_Cart />} />
      <Route path="/sellerRegistration" element={<SellerForm />} />
      <Route path="//sellerproduct" element={<SellerOnlineForm />} />


      <Route path="profile" element={<Profile />} />
      <Route path="password" element={<ChangePassword />} />
      <Route path="/edit" element={<EditProfile />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile/wishList" element={<Wishlist />} />



      <Route path="*" element={NotFoundPage} />
    </Routes>

  </>
}

export default App