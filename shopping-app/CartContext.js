import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Check if the item is already in the cart
      const existingIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        // If it exists, update the quantity
        const newState = [...state];
        newState[existingIndex].quantity += 1;
        return newState;
      } else {
        // If it doesn't exist, add the new item with quantity 1
        return [...state, { ...action.payload, quantity: 1 }];
      }
      case 'REMOVE_ITEM':
      // Logic to remove item
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);