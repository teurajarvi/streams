import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    /** 1st div: Hide the modal (onDismiss == history.push("/"))
        if window or modal is clicked and 
        forward to the homepage.
        2nd div: Prevent hiding the modal if the modal itself is clicked 
    */
    <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'>
        <div className='header'>{props.title}</div>
        <div className='content'>{props.content}</div>
        <div className='actions'>{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
