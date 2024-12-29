import React from 'react'
import { Element } from "react-scroll";
import image from "../topcontent/imagess/IMG_20241108_212838_172.jpg" 
import LinearProgress from "@mui/material/LinearProgress"
import "./skills.css"
const Sckills = () => {
  return (
  <Element className='skillcontainer' name='Skills' >

<div className='skillcontainer__image'>
  <img src={image}/>
</div>

<div className='skillscontainer__text'>
  <h2>Skills</h2>

  <div className='skillscontainer__skillset'>
    <h5>HTML</h5>
    <div className="skillscontainer__slider skillscontainer__slider1">
      <LinearProgress variant='determinate' value={90}/>
    </div>
       </div>

         <div className='skillscontainer__skillset'>
    <h5>CSS</h5>
    <div className="skillscontainer__slider skillscontainer__slider2">
      <LinearProgress variant='determinate' value={70}/>
    </div>  
    </div>        

    
    <div className='skillscontainer__skillset'>
    <h5>JAVA SCRIPTE</h5>
    <div className="skillscontainer__slider skillscontainer__slider3">
      <LinearProgress variant='determinate' value={75}/>
    </div>  
    </div>        



    <div className='skillscontainer__skillset'>
    <h5>REACT</h5>
    <div className="skillscontainer__slider skillscontainer__slider4">
      <LinearProgress variant='determinate' value={80}/>
    </div>  
    </div>        


</div>
  </Element>
  )
}

export default Sckills
