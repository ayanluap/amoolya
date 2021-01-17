import React from 'react';

const Modals = (props) => {
  const { visible, closeModal } = props;
  return (
    <div
      className="modal"
      style={{
        opacity: visible ? '1' : '0',
        pointerEvents: visible ? 'initial' : 'none',
        visibility: visible ? 'visible' : 'hidden',
      }}
    >
      <div className="modal__overlay" onClick={closeModal}></div>
      <div
        className="modal__content"
        style={{
          transform: visible ? 'translate(-50%,-50%)' : 'translate(-50%,-150%)',
        }}
      >
        <div className="modal__close" onClick={closeModal}>
          &times;
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modals;
