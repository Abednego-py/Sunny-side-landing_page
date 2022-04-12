import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
export default function Navbar() {
  // const setDisplay = 7
  return (
     <div className='row'> 
      <div className="logo col-3"><h3 className='text-white'>
          sunnyside</h3></div>
          <div className="nav col-5">
              <ul >
                  <li>About</li>
                  <li>Services</li>
                  <li>Projects</li>
              </ul>
              <button className='btn btn-primary'>contact</button>
          </div>
          
    </div>
    
  );
}
