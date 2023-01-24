import React from "react";
import "../../components/home/home.css";
import { packageInfo } from "../home/product-list.js";
import imageTravels from "../pictures/travels";

import Calendar from "../../components/pictures/icons/calendar.svg";
import Clock from "../../components/pictures/icons/clock.svg";
import Plane from "../../components/pictures/icons/plane.svg";
import Cutlery from "../../components/pictures/icons/cutlery.svg";
import Earth from "../../components/pictures/icons/earth.svg";
import Banknote from "../../components/pictures/icons/banknote.svg";

const found = packageInfo.find((obj) => {
  return obj.id === 4;
});

const found2 = packageInfo.find((obj) => {
  return obj.id === 6;
});

function NearEast() {
  return (
    <div className="All-Travels">
      <div className="Travel">
        <span className="Title">{found.title}</span>
        <img className="Image" src={imageTravels.OrientExpress} alt="IMG" />
        <div className="Info">
          <span className="Country">{found.info.country}</span>
          <span>
            <img className="Icon" src={Calendar} alt="Calendar" />
            {found.info.deadline.date}
          </span>
          <span>
            <img className="Icon" src={Clock} alt="Clock" />
            {found.info.days.days}
          </span>
          <span>
            <img className="Icon" src={Plane} alt="Plane" />
            {found.info.startpoint.startpoint}
          </span>
          <span>
            <img className="Icon" src={Cutlery} alt="Cutlery" />
            {found.info.meals.meals}
          </span>
          <span>
            <img className="Icon" src={Earth} alt="Earth" />
            {found.info.travelagency.travelagency}
          </span>
          <span className="Price">
            <img className="Icon" src={Banknote} alt="Banknote" />
            {found.info.price.price}
          </span>
        </div>
        <button className="Buy-Button">Buy Travel!</button>
      </div>
      <div className="Travel">
        <span className="Title">{found2.title}</span>
        <img className="Image" src={imageTravels.BatumiHerbatumi} alt="IMG" />
        <div className="Info">
          <span className="Country">{found2.info.country}</span>
          <span>
            <img className="Icon" src={Calendar} alt="Calendar" />
            {found2.info.deadline.date}
          </span>
          <span>
            <img className="Icon" src={Clock} alt="Clock" />
            {found2.info.days.days}
          </span>
          <span>
            <img className="Icon" src={Plane} alt="Plane" />
            {found2.info.startpoint.startpoint}
          </span>
          <span>
            <img className="Icon" src={Cutlery} alt="Cutlery" />
            {found2.info.meals.meals}
          </span>
          <span>
            <img className="Icon" src={Earth} alt="Earth" />
            {found2.info.travelagency.travelagency}
          </span>
          <span className="Price">
            <img className="Icon" src={Banknote} alt="Banknote" />
            {found2.info.price.price}
          </span>
        </div>
        <button className="Buy-Button">Buy Travel!</button>
      </div>
    </div>
  );
}

export default NearEast;
