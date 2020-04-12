import React from 'react';
import PropTypes from 'prop-types';

const Quantity = ({
  product, add, subtract, remove,
}) => (
  <>
    <div className="quantity">
      <button className="button quantity__btn" type="button" onClick={() => subtract(product)}>-</button>
      <h5 className="quantity__number">{product.quantity}</h5>
      <button className="button quantity__btn" type="button" onClick={() => add(product)}>+</button>
    </div>
    <button className="button quantity__btn--remove" type="button" onClick={() => remove(product)}>remove</button>
  </>
);

Quantity.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  add: PropTypes.instanceOf(Function).isRequired,
  subtract: PropTypes.instanceOf(Function).isRequired,
  remove: PropTypes.instanceOf(Function).isRequired,
};

export default Quantity;
