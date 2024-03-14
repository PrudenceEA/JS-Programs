import React from 'react' 
import Typewriter from 'typewriter-effect';
import '../App.css'; 
import '../styles/TopBar.css';


const TopBar = () => {
  return ( 
    <div className="Topbar">
      <Typewriter
        text="Frontend Engineer Technical Assessment Review !"
        speed={100}
        as="h5"
      />
    </div>
  );
} 


export default TopBar;