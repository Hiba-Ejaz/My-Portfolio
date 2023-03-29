
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import  Home from './pages/Home';
import Profile from './pages/Profile';

import Project from './pages/Project';
import Footer from './components/Footer';
import DisplayProject from './pages/DisplayProject';
function App() {
  return (
    <div className="App">
      <Router>
      <div className="navbar-container">
        <input type="checkbox"></input>
        <div className='hamburger-lines'>
        <span className='line line1'></span>
        <span className='line line1'></span>
        <span className='line line1'></span>
        </div>
      
      <div className='navBar'>
        <div className='logoLeft'>
          HIBA
        </div>
      <div className='links'>
        <Link className="homeLink" to="/">Home</Link>
        <Link className="profileLink"to="/profile">Profile</Link>
       
        <Link className="projectLink" to="/project">Projects</Link>
      </div>
      </div>
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      
      <Route path="/project" element={<Project/>}/>
      <Route path="project/:id" element={<DisplayProject/>}/>
   
    </Routes>
   <Footer></Footer>

    
   </Router>
   
    </div>
    
  );
}

export default App;
