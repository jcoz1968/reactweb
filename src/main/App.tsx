import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import './App.css';
import HouseList from "../house/HouseList" ;

function App() {
  return (
    <div className="container">
      <Header subtitle="providing houses all over the world" />
      <HouseList />
    </div>
  );
}

export default App;
