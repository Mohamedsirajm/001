import React from 'react'
import {Link} from "react-scroll"
import "./Header.css"



const Header = () => {
  return (
    <div className='header'>

    <div className='header__left'>
      <h1>Develop<span>er</span>
      </h1>
      </div>

      <div className='header__right'>
        <Link to='about' smooth={true} duration={600}>
        <h4>About Me</h4>
        </Link>

        <Link to='Skills' smooth={true} duration={600}>
        <h4>Skills</h4>
        </Link>

        <Link to='project' smooth={true} duration={600}>
        <h4>Project</h4>
        </Link>

        <Link to='contact' smooth={true} duration={600}>
        <h4>Contact</h4>
        </Link>

      </div>

    </div>
  )
}

export default Header;
