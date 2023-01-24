import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import MainPanel from "./components/main-panel/main-panel";
import Home from "./components/home/home";
import Categrories from "./components/categories/categories";
import Europe from "./components/regions/europe";
import Americas from "./components/regions/americas";
import Asia from "./components/regions/asia";
import Africa from "./components/regions/africa";
import NearEast from "./components/regions/nearEast";
import CartContextWrapper from "./components/context/CartContext";

function App() {
  return (
    <CartContextWrapper>
      <Container className="App">
        <MainPanel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categrories />} />
          <Route path="europe" element={<Europe />} />
          <Route path="americas" element={<Americas />} />
          <Route path="asia" element={<Asia />} />
          <Route path="africa" element={<Africa />} />
          <Route path="nearEast" element={<NearEast />} />
        </Routes>
      </Container>
    </CartContextWrapper>
  );
}

export default App;
