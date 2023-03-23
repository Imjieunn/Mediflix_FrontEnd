import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceUserManage from "./pages/ServiceUserManage";
import ContentsManage from "./pages/ContentsManage";
import PartnerMange from "./pages/PartnerMange";
import Dashboard from './components/Dashboard';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Dashboard} />
        <Route path="/members" Component={ServiceUserManage} />
        <Route path="/cashes" Component={ContentsManage} />
        <Route path="/partner" Component={PartnerMange} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;