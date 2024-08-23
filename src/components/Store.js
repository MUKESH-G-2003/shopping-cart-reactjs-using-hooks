
import React, { useReducer } from 'react';
import Cart from './Cart';
import { shoppingCartReducer, defaultCartState } from './cartReducer';

function Store() {
  const products = [
    { id: 'p1', name: 'Product A', price: 150 },
    { id: 'p2', name: 'Product B', price: 250 }
  ];

  const [cartState, cartDispatch] = useReducer(shoppingCartReducer, defaultCartState);

  return (
    <div className="store" style={{backgroundColor:"violet", padding:"20px"}}>
      <h2>Available Products</h2>
      <ul style={{display:'flex', flexDirection:"column", gap:"20px"}}>
        {products.map(product => (
          <li key={product.id} style={{display:"flex", flexDirection:"column",gap:"5px"}}>
            {product.name} - ${product.price}
            <button onClick={() => cartDispatch({ type: 'ADD_PRODUCT', product: { ...product, quantity: 1 } })} style={{width:"100px", backgroundColor:"green"}}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <Cart cartState={cartState} cartDispatch={cartDispatch} />
    </div>
  );
}

export default Store;
