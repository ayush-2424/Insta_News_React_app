import React from 'react';
import "./navinshort.css";  
import Hamburgedrawer from "./Hamburgedrawer"

/**
* @author
* @function navinsshorts
**/

const navinsshorts = ({setCategory}) => {
  return(
    <div className="nav">
    <div className='icon'></div>
    <div className="p1">
    <Hamburgedrawer setCategory={setCategory}/>
    
    </div>
    <h1 className="logo">Insta short news</h1>
    <img style={{cursor:"pointer"}} src="https://img.icons8.com/cotton/2x/news--v1.png" height="80%" alt="LOGO"></img>
    </div>
    
   );

 }

export default navinsshorts;