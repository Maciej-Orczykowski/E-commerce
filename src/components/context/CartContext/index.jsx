import { createContext, useContext, useState } from "react";
import noop from "lodash/noop";

export const CartContext = createContext({
  cart: [],
  setCart: noop,
  removeFromCart: () => {},
  getTotalCost: () => {},
});

const CartContextWrapper = ({ children }) => {
  let [cart, setCart] = useState([]);

  function removeFromCart(id) {
    setCart((cart) =>
      cart.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  return (
    <CartContextProvider
      value={{
        cart,
        setCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContextProvider>
  );
};

export const CartContextProvider = CartContext.Provider;
export const useCartContext = () => useContext(CartContext);
export default CartContextWrapper;
