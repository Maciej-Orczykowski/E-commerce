import React from "react";
import "./categories.css";
import { NavLink } from "react-router-dom";
import Europe from "../../components/pictures/categories/Europe.jpg";
import AmericaNorthAndSouth from "../../components/pictures/categories/AmericaNorthAndSouth.jpg";
import Asia from "../../components/pictures/categories/Asia.jpg";
import Africa from "../../components/pictures/categories/Africa.jpg";
import NearEast from "../../components/pictures/categories/NearEast.jpg";

function Categories() {
  return (
    <div className="All-Categories">
      <nav className="Category">
        <img className="Image-Category" src={Europe} alt="" />
        <NavLink className="Category-Button" to="/europe">
          Europe
        </NavLink>
      </nav>
      <nav className="Category">
        <img className="Image-Category" src={AmericaNorthAndSouth} alt="" />
        <NavLink className="Category-Button" to="/americas">
          America north and south
        </NavLink>
      </nav>
      <nav className="Category">
        <img className="Image-Category" src={Asia} alt="" />
        <NavLink className="Category-Button" to="/asia">
          Asia
        </NavLink>
      </nav>
      <nav className="Category">
        <img className="Image-Category" src={Africa} alt="" />
        <NavLink className="Category-Button" to="/africa">
          Africa
        </NavLink>
      </nav>
      <nav className="Category">
        <img className="Image-Category" src={NearEast} alt="" />
        <NavLink className="Category-Button" to="/nearEast">
          Near east
        </NavLink>
      </nav>
    </div>
  );
}

export default Categories;
