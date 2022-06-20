import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import styled from 'styled-components'

import HeadFormbot from "./compo/form/HeadFormbot"
import HeadFormtop from "./compo/form/HeadFormtop"
import FooterForm from "./compo/form/FooterForm"
import ProductDetail from "./compo/page/ProductDetail"


import Main from "./compo/page/Main"
import Login from "./compo/page/Login"
import Join from "./compo/page/Join"
import Basket from "./compo/page/ShoppingBasket"



function App() {
  const navigate = useNavigate();


  return (
    <div className="App">
      <HeadFormAlign>
        <HeadFormtop/>
        <HeadFormbot/>
      </HeadFormAlign>
      <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
      <div>
        <FooterForm />
      </div>
    </div>
  );
}

const HeadFormAlign = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`


export default App;
