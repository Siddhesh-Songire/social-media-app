import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/createpost';
import { Login } from './pages/login';
import { Main } from './pages/main/main';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Main/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/createpost" element = {<CreatePost/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
