/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';


export const ModalContext = createContext(null);

const Modal = ({ children }) => {
  const [show, setShow] = useState(true);
  const [type, setType] = useState('initial');
  const [product, setProduct] = useState({});
  const history = useHistory();


  const redirectHome = () => {
    setShow(false);
    history.push('/');
  };

  const redirectToCart = () => {
    setShow(false);
    history.push('/cart');
  };

  return (
    <ModalContext.Provider
      value={{
        show,
        setShow,
        type,
        setType,
        product,
        setProduct,
      }}
    >
      <div className={`modal ${show ? 'is-active' : ''}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <section className="modal-card-body has-text-centered modal__div">
            {type === 'initial'
              ? (
                <>
                  <div className="modal__div--message">
                    <p className="modal__div--message">Free Run E-Commerce Store is a full stack React.js and Rails PROTOTYPE app based on a previous project for a client.</p>

                    <p className="modal__div--message is-bold is-uppercase">This is NOT a real e-commerce site.</p>

                    <p className="modal__div--message">By clicking the agree button below, you accept that no purchases will be made and that actual personal information should not be used at checkout.</p>
                  </div>
                  <button className="button is-medium is-uppercase modal__div--btn" type="button" onClick={() => setShow(false)}>I Agree</button>
                </>
              )
              : (
                <>
                  <div className="modal__div--message">
                    <p className="modal__div--message is-bold">PRODUCT ADDED TO CART</p>
                  </div>
                  <div className="modal__div--btns-container">
                    <button className="button is-uppercase modal__div--btn-confirm" type="button" onClick={redirectHome}>Go to catalogue</button>
                    <button className="button is-uppercase modal__div--btn-confirm" type="button" onClick={redirectToCart}>Go to cart</button>
                  </div>
                </>
              )}
          </section>

        </div>
      </div>
      {children}
    </ModalContext.Provider>
  );
};

Modal.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};


export default Modal;
