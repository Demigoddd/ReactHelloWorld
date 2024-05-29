import React, { useState } from "react";
import './style.css';

export const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const openModalHandler = () => {
    setOpen(true);
  }

  const closeModalHandler = () => {
    setOpen(false);
  }

  return (
    <div>
      <button onClick={openModalHandler}>Open Modal</button>
      {open && (
        <div className="modal-overlay">
          <div className="modal-container animated">
            <div className="modal-container__header">
              <span>Header</span>
              <button onClick={closeModalHandler}>X</button>
            </div>
            <div className="modal-container__body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="content"/>
            </div>
            <div className="modal-container__footer">
              <span>Footer</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
