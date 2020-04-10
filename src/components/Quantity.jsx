import React from 'react';

const Quantity = ({ product, add, subtract, remove }) => {
  return (
    <>
      <div className="quantity">
        <button className="button quantity__btn" onClick={() => subtract(product)}>-</button>
        <h5 className="quantity__number">{product.quantity}</h5>
        <button className="button quantity__btn" onClick={() => add(product)}>+</button>
      </div>
      <button className="button quantity__btn--remove" onClick={() => remove(product)}>remove</button>
      
    </>
  );
}

export default Quantity;
