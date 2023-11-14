import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./assets/css/style.css";

import About from './pages/About';
import Resume from './pages/Resume';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <Header />
      {/* 본문 */}
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/about"} element={<About/>} />
        <Route path={"/resume"} element={<Resume/>} />
        <Route path={"/contact"} element={<Contact/>} />
      </Routes>
      {/* 꼬리말 */}
      <Footer />
    </div>
  );
}

export default App;
