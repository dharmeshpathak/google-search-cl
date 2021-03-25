import React from "react";
import "../Footer.css";
import { Link } from "react-router-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <Link to="#">India</Link>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottomLeft" style={{display:"flex"}}>
          <a href="https://www.linkedin.com/in/dharmesh-pathak-6894a0137/ " style={{textDecoration:"none",display:"flex",alignItems:"center"}}><LinkedInIcon/>About Me</a> 
          <Link to="#">Advertising</Link>
          <Link to="#">Business</Link>
        </div>

        <div className="footer__bottomRight">
          <Link to="#">Privacy</Link>
          <Link to="#">Terms</Link>
          <Link to="#">Settings</Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;