import React, { useState } from 'react'
import "./procontent.css"

const Procontent = ({img,title,desicreption,link}) => {
    const  [show, setShow] = useState(false);
  return (
   <a href={link}>
     <div className='procontent' 
     onMouseEnter={()=>setShow(true)} 
     onMouseLeave={() =>setShow(false)}>
      {show ? (
          <div>
            <h1>{title}</h1>
            <h3>{desicreption}</h3>
          </div>
        ):
        (
          <img src= {img}/>
        )}
      </div> 
   </a>
  );
};

export default Procontent
