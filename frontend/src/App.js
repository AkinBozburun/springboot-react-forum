import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Footer from './components/Footer';
import PostDetails from './pages/PostDetails';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:title' element={<Profile />} />
        <Route path='/postDetails/:title' element={<PostDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
