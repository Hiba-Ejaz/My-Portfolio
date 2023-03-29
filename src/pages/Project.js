import "./Project.css"
import ProjectDetail from "../components/ProjectDetail";

import data from "../data/data"
function Project(){
    return(
        <div class="Project">
            
            <div className="ProjectItems">{
            data.map((d=><ProjectDetail 
            id={d.id}
            title={d.title}
            image={d.image}/>
            ))
            }
            </div> 
        </div>
    );
        }

export default Project;