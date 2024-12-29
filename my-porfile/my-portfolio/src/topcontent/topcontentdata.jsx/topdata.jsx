import React from 'react'
import { Link } from 'react-scroll';
import "./topdata.css"
import resume from "../pdf/SirajmdResume.pdf";
const Topdata = () => {
  return (
    <div className='topdata'>

      <div className='topdata__content'>
      <h1>Mr . MOHAMED SIRAJ M </h1>
      <p>front end developer</p>

     <a href={resume} download={resume} >
      <button className='topdata__download'>Download CV</button>
     </a>

     <Link  to='project' smooth={true} duration={500}>
     <button className='topdata__work'>My Work</button>
     </Link>

      </div>
    </div>
  )
}

export default Topdata;
