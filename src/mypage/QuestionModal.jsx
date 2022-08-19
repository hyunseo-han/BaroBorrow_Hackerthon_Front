import React, { useState } from "react";
import styled from "styled-components";
import InfoBar from "../product/InfoBar";
import { Link } from "react-router-dom";
import "./QuestionModal.css";

const OwnerContainer = styled.div`
  color: #666666;
  font-weight: 700;
  max-width: 900px;
  margin: 52px auto 0;
`;

const OwnerHead = styled.div`
  padding: 24px 12px 0;
`;

const OwnerHeadDes = styled.div`
  position: absolute;
  width: 90%;
  top: 40px;

  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 21px;
  /* identical to box height, or 21px */

  text-align: center;

  color: #888888;
`;

const OwnerInfoBox = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #d9d9d9;
`;

const ownerex = [
  { title: "1.약속한 날짜에 대여가 잘 이루어졌나요?", per: 43 },
  { title: "2.설정한 위치에서 대여가 잘 이루어졌나요?", per: 80 },
  { title: "3.물건의 상태는 대여자가 설정한 것과 일치했나요?", per: 7 },
  { title: "4.구성품이 빠짐없이 잘 있었나요?", per: 100 },
  { title: "5.대여비와 보증금은 적절했나요?", per: 20 },
];

function QuestionModal(props) {
  const { open } = props;
  const [showModal, setShowModal] = useState(false);

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  function closeModal2() {
    props.closeModal2();
    document.style.overflow = "unset";
  }

  return (
    <div
      className={open ? "openModal modal2" : "modal2"}
      onClick={closeModal2}
      style={{ position: "fixed", overflow: "auto", width: "100%" }}
    >
      {open ? (
        <section onClick={(e) => e.stopPropagation()}>
          <div className="modalBody2">
            <OwnerContainer>
              <OwnerHead>
                <OwnerHeadDes>설문을 진행해주세요.</OwnerHeadDes>
              </OwnerHead>
              {ownerex.map((li, Index) => (
                <OwnerInfoBox key={Index}>
                  <InfoBar title={li.title} percentage={li.per} />
                </OwnerInfoBox>
              ))}
            </OwnerContainer>
            <footer>
              <div className="SubmitButton" onClick={closeModal2}>
                설문 제출
              </div>
            </footer>
            {props.children}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default QuestionModal;
