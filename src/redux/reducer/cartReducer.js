import { typesCart } from "../types";

const initialState = {
  items: [],
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  // Manejar acciones aquí
  console.log(state);
  switch (action.type) {
    case typesCart.addToCart:
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
          total: state.total + action.payload.price,
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
          total: state.total + action.payload.price,
        };
      }
    case typesCart.removeFromCart:
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      console.log(action.payload);
      if (itemToRemove) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
          total: state.total - itemToRemove.price * itemToRemove.quantity,
        };
      }
      return state;
    case typesCart.updateCartItem:
      const updatedItem = state.items.find(
        (item) => item.id === action.payload.itemId
      );
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.itemId) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
    default:
      return state;
  }
};
