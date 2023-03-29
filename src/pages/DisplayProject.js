import React from 'react';
import "./DisplayProject.css"
import { useParams } from 'react-router-dom'
import data from "../data/data";
import { Html} from "@mui/icons-material";
import { Css } from "@mui/icons-material";
import { Javascript} from "@mui/icons-material";
import react from "../images/react.png";


function DisplayProject() {
    const { id } =useParams();
    const project=data[id];
  return (
    <div>
    <div className="project">
        <h1>{project.title}</h1>
        <img src={project.image}/> 
    <div className="skills">
        <Html style={{width:"3em",height:"3em"}}></Html>
        <Css style={{width:"3em",height:"3em"}}></Css>
       <Javascript style={{width:"3em",height:"3em"}}></Javascript> 
       
     </div>
    
    <div className="react-logo">
   <img src={react} alt="react=logo" style={{width:"3em",height:"3em"}}/>
   </div>
   </div>


    </div>
  )
}

export default DisplayProject