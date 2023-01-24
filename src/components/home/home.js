import React from "react";
import { Container } from "react-bootstrap";
import { packageInfo } from "./product-list.js";
import ProductCart from "./product-cart";

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

function Home() {
  return (
    <Container className="All-Travels">
      {shuffledArray.map((item) => (
        <ProductCart item={item} />
      ))}
    </Container>
  );
}

export default Home;
