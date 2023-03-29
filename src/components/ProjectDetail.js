import "./ProjectDetail.css";
import { useNavigate } from "react-router-dom";

function ProjectDetail({id,title,image}){
    const navigate = useNavigate();
   
return(
    
<>

<div className="ProjectItem" onClick={()=>{navigate("/project/" + id)
}}
>
<h1>{title}</h1>
<img src={image} className="ProjectImageList"/>
</div>

</>
);
}
export default ProjectDetail;