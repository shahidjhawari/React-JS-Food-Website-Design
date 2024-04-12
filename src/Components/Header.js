import React from "react";
import './All.css';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>BRAND FOODS</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="favourit.html">Favourite</a>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li>
          <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
