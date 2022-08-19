import React from "react";
import "./ReturnModal.css";

const ReturnModal = (props) => {
  function closeModal() {
    props.closeModal();
  }

  return (
    <>
      <div className="Modal" onClick={closeModal}>
        <div className="modalBody" onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default ReturnModal;
