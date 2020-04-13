/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className={`modal ${show ? 'is-active' : ''}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <section className="modal-card-body has-text-centered modal__div">
            <div className="modal__div--message">
              <p className="modal__div--message">Free Run E-Commerce Store is a full stack React.js and Rails PROTOTYPE app based on a previous project for a client.</p>

              <p className="modal__div--message is-bold is-uppercase">This is NOT a real e-commerce site.</p>

              <p className="modal__div--message">By clicking the agree button below, you accept that no purchases will be made and that actual personal information should not be used at checkout.</p>
            </div>
            <button className="button is-medium is-uppercase modal__div--btn" type="button" onClick={() => setShow(false)}>I Agree</button>
          </section>

        </div>
      </div>
      {children}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};


export default Modal;
