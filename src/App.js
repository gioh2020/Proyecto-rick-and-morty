import React from 'react';
import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'
import {useState} from 'react'
import {Route,  Routes, useLocation, useNavigate } from "react-router-dom"
import InfoCharacter from './components/InfoChracter/InfoCharacter.jsx';
import Login from './components/loging/Login.jsx';
import NavBar from './components/nav/Nav.jsx';
import rmo from './rym.png'
import Favorites from "./components/favorites/Favorites"
import About from './components/about/about.jsx';





function App () {

  const [dataValidate, setDataValidate] = useState(false)


  const location = useLocation();
  const navigate = useNavigate();

  const email = 'rickymorty@milkyway.co'
  const password = 'rYm12*-*'

  function userValidate(user){
    if(user.email === email && user.password === password){
      setDataValidate(true);
      navigate('/home')
    }
  }
 

 

  return (
    <div className='App' >
      
      <div >
        <img src={rmo} alt="" />
      </div>

      {location.pathname === '/' ? null:<NavBar/>}
      {location.pathname === '/home' ? <SearchBar s />:null}

     

      <Routes>
        
        <Route path='/home' element={<Cards 
        />}/>

        <Route path='/' element={<Login userValidate ={userValidate}/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path= "/infoCharacter/:id" element={<InfoCharacter/>}/>

      </Routes>
    </div>
    
  )
}

export default App


