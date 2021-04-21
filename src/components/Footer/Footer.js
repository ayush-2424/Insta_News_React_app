import React from 'react';
import "./Footer.css";

/**
* @author
* @function Footer
**/

const Footer = () => {
  return(
    <div className="footer">
    <span className="name">
      Myshort news app made by -{" "}
      <a href="https://www.linkedin.com/in/ayush-saxena-07623718a/" target="__blank">
      

        Ayush saxena
      </a>
    </span>
    <hr style={{ width: "90%" }} />
    <div className="iconContainer">
      {/* <a href=" " target="__blank">
        <i className="fab fa-instagram-square fa-2x"></i>
      </a> */}
      <a href="https://www.linkedin.com/in/ayush-saxena-07623718a/" target="__blank">
      <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="https://github.com/ayush-2424" target="_blank">
      <i class="fa fa-link" aria-hidden="true"></i>

      </a>
      <a href="https://github.com/ayush-2424" target="_blank">
      <i class="fa fa-github" aria-hidden="true"></i>
      </a>
      
      
    </div>
  </div>
   )

 }

export default Footer;