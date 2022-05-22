import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import './App.css';
import HouseList from "../house/HouseList" ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="providing houses all over the world" />
        <Routes>
          <Route path='/' element={<HouseList/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
