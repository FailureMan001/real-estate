/* eslint-disable react/jsx-pascal-case */
import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from './components//pages/Home'
import Footer from './components/layout/Footer';
import Header from './components/layout/Header'
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Blog_01 from './components/pages/Blog_01';
import Blog_02 from './components/pages/Blog_02';
import Blog_03 from './components/pages/Blog_03';
import Contact from './components/pages/Contact';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog-01' element={<Blog_01/>}/>
        <Route path='/blog-02' element={<Blog_02/>}/>
        <Route path='/blog-03' element={<Blog_03/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App