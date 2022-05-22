import React from 'react';
// import logo from './logo.svg';
import Header from './Header';
import './App.css';
import HouseList from "../house/HouseList" ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HouseDetail from '../house/HouseDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="providing houses all over the world" />
        <Routes>
          <Route path='/' element={<HouseList/>}></Route>
          <Route path='/house/:id' element={<HouseDetail/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
