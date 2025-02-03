import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Footer from './components/Footer';
import PostDetails from './pages/PostDetails';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/forum" element={<div>Forum Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/postDetails' element={<PostDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
