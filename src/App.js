import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import './index.css';
/* Router */

import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';  
import Home from './Components/Home/home';
import Team from './Components/Team/team';
import Regeln from './Components/Regeln/regeln';
import FAQ from './Components/FAQ/faq';
import News from './Components/News/news';

import NotFound from './Components/404Notfound/notfound';
import Overlay from './Components/Overlay/overlay';

/* Router */

function App() {

  return (
    <div>
      <Router basename="/">
        <Header />
      
          <Routes> 
            <Route path="/404error" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/regeln" element={<Regeln />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Navigate to="/404error" replace />} />
          </Routes>
          <Overlay />
          <Footer />

      </Router>
    </div>
  );
}

export default App;