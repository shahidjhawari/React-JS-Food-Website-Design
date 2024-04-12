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
          <NavLink to="/favourite">Favourite</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
          </li>
          <li>
          <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
