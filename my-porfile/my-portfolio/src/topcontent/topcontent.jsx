import React from 'react'
import {Element} from "react-scroll"
import Topdata from './topcontentdata.jsx/topdata';
import "./topcontent.css"

const Topcontent = () => {
  return (
    <Element name="about" className='topcontiner'>
  < Topdata/>
    </Element>
  )
}

export default Topcontent;
