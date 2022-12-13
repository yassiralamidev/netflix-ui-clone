import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/netflix_logo.png'
import avatar from '../../assets/avatar.png'

function Navbar() {

  const [scroll,handleScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        handleScroll(true);
      }else{
        handleScroll(false)
      }
    });
    return ()=>{
      window.removeEventListener('scroll',null);
    }
  },[])
  
  
  return (
    <div className={`navbar ${scroll === true ? 'scroll' : null}`}>
      <div className="navbar__left">
        <img className='netflix_logo' src={logo} alt="Neflix Logo" />
      </div>
      <div className='navbar__right'>
        <img className='avatar_logo' src={avatar} alt="Profile Logo" />
      </div>
    </div>
  )
}

export default Navbar