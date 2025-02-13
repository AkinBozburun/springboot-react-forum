import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Footer from './components/Footer';
import PostDetails from './pages/PostDetails';
import Header from './components/Header';
import CreatePost from './pages/CreatePostPage';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { PostsProvider } from './contexts/PostsContext';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <PostsProvider>
        <CategoriesProvider>
          <NavBar />
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/postDetails' element={<PostDetails />} />
            <Route path='/createPost' element={<CreatePost />} />
          </Routes>
          <Footer />
        </CategoriesProvider>
      </PostsProvider>    
    </div>
  );
};

export default App;
