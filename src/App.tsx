import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import { Navbar } from './components/navbar';
import { Login } from './pages/login';
import { Main } from './pages/main';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Main/>}/>
          <Route path="/login" element = {<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
