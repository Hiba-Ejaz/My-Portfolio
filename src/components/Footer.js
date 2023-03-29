import React from "react";
import './Footer.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { LinkedIn } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
function Footer(){
    return(
        <div id ="Footer">
        
<h2>My Portfolio &copy; all rights reserved</h2>
    
<div className="FooterLinks">
    
    <div>
<LinkedIn></LinkedIn>
</div>
<div>
<Mail></Mail>
</div>
</div>
<div/>
</div>
    );
}
export default Footer;



