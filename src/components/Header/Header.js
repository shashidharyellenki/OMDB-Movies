import React from 'react'
import { Link } from 'react-router-dom';
import user from '../../Images/UserLogo.png'
import "./Header.scss"
function Header() {
  return (
    <div className='header'>
        <Link to="/">
            <div className='logo'>MoviesApp</div>
        </Link>

        <div className='user-image'>
            <img src={user} alt="use-logo"/>
        </div>


    </div>
  )
}

export default Header