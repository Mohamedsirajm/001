import React from 'react'
 import { Element } from 'react-scroll'
 import {IconButton} from "@mui/material"
 import { LinkedIn, WhatsApp} from "@mui/icons-material"
 import "./contact.css"
const Contact = () => {
  return (
   <Element className='contact' name='contact'>
    <h1>Contact</h1>
     <div className='contact__container'>
<p>
  Email:<span>mohamedsirajmoh@gmail.com</span>
</p>

<p>
Github Username:<span>@Mohamedsirajm</span>
</p>
<div className='contact__icon'>
  <a href='http://www.linkedin.com/in/mohamed-siraj-55973b289' target='/'>
    <IconButton>
      <LinkedIn/>  
    </IconButton>
  </a>

  <a href= " https://api.whatsapp.com/send? phone=8056527882"  target='/'>
    <IconButton>
      <WhatsApp/>
    </IconButton>
  </a>
</div>
     </div>

   </Element>
  )
}

export default Contact;
