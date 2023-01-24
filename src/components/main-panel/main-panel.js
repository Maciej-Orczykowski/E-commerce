import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Button, Modal, Container, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

import "./main-panel.css";
import icon from "../../components/pictures/icon.svg";

function MainPanel(currentProduct) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const context = useCartContext();

  return (
    <Container className="Main-Panel">
      <div className="Panel-Title">
        <img className="Img" src={icon} alt="plane-icon" />A Trip To Dreams!
      </div>
      <Navbar className="Button-Box">
        <NavLink to="/">
          <Button className="Button">Home</Button>
        </NavLink>
        <NavLink to="/categories">
          <Button className="Button">Categories</Button>
        </NavLink>
        <Navbar.Collapse>
          <Button className="Button-Cart" onClick={handleShow}>
            Your cart
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal className="Modal" show={show} onHide={handleClose}>
        <div className="Modal-Content">
          <Modal.Header className="Modal-Header">
            <Modal.Title className="Modal-Title">Shopping Cart</Modal.Title>
            <Button className="Close-button" onClick={handleClose}>
              &times;
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Stack className="Body">
              <div className="Modal-Title-S">
                <span>Your travels:</span>
              </div>
              <div className="Travels">
                {context.cart?.map((currentProduct, index) => [
                  <div key={currentProduct.id} className="Travel-Box">
                    <img
                      className="S-Image"
                      src={currentProduct.image}
                      alt="img"
                    />
                    <div className="S-Info">
                      <span>{currentProduct.title}</span>
                      <span>{currentProduct.country}</span>
                      <span>{currentProduct.date}</span>
                      <span>{currentProduct.price}</span>
                    </div>
                    <div className="Quantity">
                      <span>Quantity:</span>
                      <select
                        onChange={(item) => {
                          context.setCart((prev) => {
                            const mutatedData = [...prev];
                            mutatedData[index].quantity = item.target.value;

                            return mutatedData;
                          });
                        }}
                        className="Input"
                      >
                        <option selected value={1}>
                          1
                        </option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                      </select>
                      <Button
                        className="Remove"
                        onClick={() =>
                          context.removeFromCart(currentProduct.id)
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  </div>,
                ])}
              </div>
            </Stack>
            <div className="TotalCost">
              <span>
                Total cost:{" "}
                {context.cart.length &&
                  context.cart
                    .map((a) => a.priceNumber * a.quantity)
                    .reduce((a, b) => a + b)}
                €
              </span>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </Container>
  );
}

export default MainPanel;
