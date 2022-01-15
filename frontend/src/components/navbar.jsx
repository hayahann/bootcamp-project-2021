import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import Searchbar from './searchbar';

export default function Navbar() {
  return (
// replace everything in between the <header> & <header /> tags
// with your navbar code from your earlier milestones
    <header> 
	    <nav class="top-margin">
        <div class="boxes">
            <Link to="/" id="home">HOME</Link>
            <Link to="/About" id="about">ABOUT</Link>
            <Searchbar/>
        </div>
	    </nav>
	  </header>
  );
} 