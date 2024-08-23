import React from 'react';

function Cart({ cartState, cartDispatch }) {
  const modifyProductQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      cartDispatch({ type: 'DELETE_PRODUCT', productId });
    } else {
      cartDispatch({ type: 'MODIFY_QUANTITY', productId, newQuantity });
    }
  };

  const deleteProductFromCart = (productId) => {
    cartDispatch({ type: 'DELETE_PRODUCT', productId });
  };

  const emptyCart = () => {
    cartDispatch({ type: 'EMPTY_CART' });
  };

  return (
    <div className="cart" style={{backgroundColor:"lightgreen", padding:"20px", display:"flex", flexDirection:"column", gap:"10px", textAlign:"center"}}>
      <h3 style={{backgroundColor:"blue", color:"white", padding:"20px"}}>Your Cart</h3>
      <ul style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        {cartState.items.map(product => (
          <li key={product.id}>
            {product.name} - Qty: {product.quantity}
            <button onClick={() => modifyProductQuantity(product.id, product.quantity + 1)}>+</button>
            <button onClick={() => modifyProductQuantity(product.id, product.quantity - 1)}>-</button>
            <button onClick={() => deleteProductFromCart(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {cartState.items.length > 0 ? (
        <button onClick={emptyCart} style={{backgroundColor:"red",color:"white", fontSize:"20px"}}>Empty Cart</button>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
