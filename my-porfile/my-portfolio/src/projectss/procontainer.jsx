import React from 'react'
import { Element } from 'react-scroll'
import Procontent from './procontent'
import './procontainer.css';
import image from  "./image11/Screenshot_20241227_070915.png"


const Procontainer = () => {

  const Projects = [
      {
        img: image,
        title:"personal diary",
        desicreption:`i craete a digital diary to  write our day to day what happen in our life it memorise the stuff add it can replace the pen papper with the help of HTML,CSS,JAVASCRIPT `,
        link:"www.google.com",
      },
      
  
  {
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" ,
    title:"mmcmcmcmc",
    desicreption:"jjnjnjvnonvounvfeojv",
    link:"www.google.com",
  },
  
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" ,
    title:"mmcmcmcmc",
    desicreption:"jjnjnjvnonvounvfeojv",
    link:"www.google.com",
  }, 
  
  
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" ,
      title:"mmcmcmcmc",
    desicreption:"jjnjnjvnonvounvfeojv",
    link:"www.google.com",
  },]

  return (
   <Element className='projectcontiner' name="project">
<h1>Projects</h1>
<p>Here are some porject which i done for makking lives of pepole easy</p>

<div className='projectcontiner__projects'>
{
  Projects.map((project, index) => {
    return (
      <Procontent key={index} 
      img={project.img}
      title={project.title}
      desicreption={project.desicreption}
      link={project.link}
       />
    )
  })
}
</div>
   </Element>
  )
}

export default Procontainer;
