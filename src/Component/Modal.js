import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-wrap');

const Modal = ({ children }) => {
    return ReactDOM.createPortal(<div className='modal'>
        {children}
    </div>, modalRoot)
}

export default Modal 
