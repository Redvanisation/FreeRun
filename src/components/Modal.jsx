import React, { useState } from 'react';

const Modal = ({ children, showModal, setShowModal }) => {

  const [show, setShow] = useState(true);

  // const modalText = () => {

  // }

  return (
    <>
    <div className={'modal ' + (show ? 'is-active' : '')}>
      <div className="modal-background" onClick={() => setShow(false)}></div>
      <div className="modal-card">
        <section className="modal-card-body has-text-centered modal__div">
          <p className="modal__div--message">
          <div className="modal__div--message">Free Run E-Commerce Store is a full stack React.js and Rails PROTOTYPE app based on a previous project for a client.</div>

          <div className="modal__div--message is-bold is-uppercase">This is NOT a real e-commerce site.</div>

          <div className="modal__div--message">By clicking the agree button below, you accept that no purchases will be made and that actual personal information should not be used at checkout.</div>
          </p>
          <button className="button is-medium is-uppercase modal__div--btn" onClick={() => setShow(false)}>I Agree</button>
        </section>

      </div>
    </div>
    {children}
    </>
  );
}

export default Modal;