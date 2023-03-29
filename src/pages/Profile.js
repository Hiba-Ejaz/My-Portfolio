import './Profile.css';
import { Work } from "@mui/icons-material";
import { School } from "@mui/icons-material";


function Profile(){
    return(
        <div>
            <div className="LeftProfile">
        <h1>EDUCATION   <School></School></h1>
        <ol>
            <li>Master of Science – MS, Computer Science (2018-2020)  Capital University of Science and Technology</li>
            <li>Bachelors of Engineering – BE, Information Technology  (2012 - 2016) University of Engineering and Technology, Taxila, Pakistan</li>
        </ol>
        </div>
        <div className="RightProfile">
        <h1>
            EXPERIENCE  <Work></Work>
        </h1>
        <ol>
            <li>
            College Lecturer KRL Model College June 2018 – September 2022 
            </li>
            <li>
            University Lecturer KICSIT (Khan Institute of Computer Sciences and Information Technology) August 2016 – February 2017 
            </li>
        </ol>
        </div>
        <div className="LeftProfile">
        <h1>CERTIFICATIONS  </h1>
        <ol>
            <li>
CSS Essential Training (LinkedIn)
            </li>
            <li>
HTML Essential Training (LinkedIn)
            </li>
            <li>
avascript Essential Training (LinkedIn)
            </li>
            <li>
React.js Essential Training (LinkedIn)
            </li>
            <li>
HTML, CSS, and Javascript: The Big Picture by Barry Luijbregts (Pluralsight)
            </li>
        </ol>
        </div>
        <div className="yehwala">
        <h1>SKILLS </h1>
        <ol>
        <li className='one'>HTML</li>
<li className='two'>CSS</li>
<li className='one'>JavaScript</li>
<li className='two'>REACT</li>
<li className='one'>Algorithms</li>
<li className='two'>Project Management </li>
<li className='one'>C++</li>
<li className='two'>Bootstrap</li>    
        </ol>
        </div>
        </div>
    )
}
export default Profile;