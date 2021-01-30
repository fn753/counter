import React from 'react';
import './Navigation.css';
 
import { NavLink } from 'react-router-dom';
 
export const Navigation = () => {
    return (
       <div className="nav">
          <NavLink className="nav-element" to="/">Counter</NavLink>
          <NavLink className="nav-element" to="/view">View</NavLink>
       </div>
    );
}