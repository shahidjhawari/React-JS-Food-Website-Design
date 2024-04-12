import React from "react";
import './All.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>BRAND FOODS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="favourit.html">Favourite</a>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
