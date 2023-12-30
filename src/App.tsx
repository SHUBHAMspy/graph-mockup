import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './pages/profile/Profile';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
