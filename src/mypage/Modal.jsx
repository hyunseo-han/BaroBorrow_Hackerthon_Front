import React, { useRef, useState } from "react";

import data from "../maindata.json";
import { Link } from "react-router-dom";
import QuestionModal from "./QuestionModal";
import "./Modal.css";
const Modal = (props) => {
  const { open } = props;
  const [showModal2, setShowModal2] = useState(false);
  const openModal = () => {
    setShowModal2(true);
  };

  function closeModal() {
    props.closeModal();
    document.style.overflow = "unset";
  }

  return (
    <div
      className={open ? "openModal modal" : "modal"}
      onClick={closeModal}
      style={{ position: "fixed", overflow: "auto", width: "100%" }}
    >
      {open ? (
        <section onClick={(e) => e.stopPropagation()}>
          <div className="modalBody">
            <img className="ProductImg" src={data[1].picture} />
            <div className="ProductName">어쩌구저쩌구 이름이름이름</div>

            <div className="Text">
              해당 물품을 반납 장소에
              <br />
              반납하셨습니까?
              <div className="SmallText">(허위 반납시 신고 조치 됩니다.)</div>
            </div>
            <footer>
              <div className="ReturnButton" onClick={openModal}>
                네, 반납했습니다.
                <QuestionModal
                  open={showModal2}
                  closeModal2={() => setShowModal2(!showModal2)}
                />
              </div>
            </footer>
            {props.children}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
