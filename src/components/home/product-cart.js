import { React } from "react";
import { Card, Button } from "react-bootstrap";
import { packageInfo } from "./product-list";
import imageTravels from "../pictures/travels";
import { useState } from "react";

import Calendar from "../../components/pictures/icons/calendar.svg";
import Clock from "../../components/pictures/icons/clock.svg";
import Plane from "../../components/pictures/icons/plane.svg";
import Cutlery from "../../components/pictures/icons/cutlery.svg";
import Earth from "../../components/pictures/icons/earth.svg";
import Banknote from "../../components/pictures/icons/banknote.svg";
import { useCartContext } from "../context/CartContext";

function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));

    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

const shuffledArray = shuffle(packageInfo);

console.log(shuffledArray);

function ProductCart(props) {
  const item = props.item;
  const { setCart } = useCartContext();

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };

  return (
    <Card className="Travel">
      <Card.Title className="Title">{item.title}</Card.Title>
      <Card.Img className="Image" src={imageTravels[item.image]} alt="IMG" />
      <Card.Body className="Info">
        <Card.Text className="Country">{item.info.country}</Card.Text>
        <span>
          <img className="Icon Date" src={Calendar} alt="Calendar" />
          {item.info.deadline.date}
        </span>
        <span>
          <img className="Icon" src={Clock} alt="Clock" />
          {item.info.days.days}
        </span>
        <span>
          <img className="Icon" src={Plane} alt="Plane" />
          {item.info.startpoint.startpoint}
        </span>
        <span>
          <img className="Icon" src={Cutlery} alt="Cutlery" />
          {item.info.meals.meals}
        </span>
        <span>
          <img className="Icon" src={Earth} alt="Earth" />
          {item.info.travelagency.travelagency}
        </span>
        <span className="Price">
          <img className="Icon" src={Banknote} alt="Banknote" />
          {item.info.price.price}
        </span>
      </Card.Body>
      <Button
        className="Buy-Button"
        id="btn"
        disabled={isDisabled}
        onClick={() => {
          handleClick();
          setCart((prev) => {
            return [
              ...prev,
              {
                id: item.id,
                image: imageTravels[item.image],
                title: item.title,
                country: item.info.country,
                date: item.info.deadline.date,
                price: item.info.price.price,
                priceNumber: item.info.price.number,
                quantity: 1,
              },
            ];
          });
        }}
      >
        Buy Trip!
      </Button>
    </Card>
  );
}

export default ProductCart;
