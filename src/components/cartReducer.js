export const defaultCartState = {
    items: []
  };
  
  export function shoppingCartReducer(cartState, action) {
    switch (action.type) {
      case 'ADD_PRODUCT':
        const foundIndex = cartState.items.findIndex(
          product => product.id === action.product.id
        );
  
        if (foundIndex !== -1) {
          const updatedProducts = [...cartState.items];
          updatedProducts[foundIndex].quantity += action.product.quantity;
          return { ...cartState, items: updatedProducts };
        } else {
          return {
            ...cartState,
            items: [...cartState.items, action.product]
          };
        }
  
      case 'MODIFY_QUANTITY':
        return {
          ...cartState,
          items: cartState.items.map(product =>
            product.id === action.productId
              ? { ...product, quantity: action.newQuantity }
              : product
          )
        };
  
      case 'DELETE_PRODUCT':
        return {
          ...cartState,
          items: cartState.items.filter(product => product.id !== action.productId)
        };
  
      case 'EMPTY_CART':
        return {
          ...cartState,
          items: []
        };
  
      default:
        return cartState;
    }
  }
  