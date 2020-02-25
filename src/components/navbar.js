import React from 'react';
import {NavLink} from 'react-router-dom'



const Navbar = (props) => (

    <nav>
        <h1 class="logo"><a class="logo-link" href="#">{props.title}</a></h1>
        <ul class="nav-menu">
            <li><NavLink className="nav-menu__link" exact to="/">HOME</NavLink></li>
            <li><NavLink className="nav-menu__link" to="/about">SKILLS</NavLink></li>
            <li><NavLink className="nav-menu__link" to="/services">SERVICES</NavLink></li>
            <li><NavLink className="nav-menu__link" to="/portfolia">PORTFOLIO</NavLink></li>
        </ul>
    </nav>

);

export default Navbar;