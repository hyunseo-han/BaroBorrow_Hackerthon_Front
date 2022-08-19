import React, { useState } from "react";
import InfoBar from "./../product/InfoBar";
import styled from "styled-components";
import ReturnModal from "./ReturnModal";
import { Link } from "react-router-dom";
const QuestionDiv = styled.div`
  height: 722px;
  padding-top: 50px;
  display: inline-block;
  background: #ffffff;
`;

const SubmitButton = styled.div`
  width: 327px;
  height: 48px;

  top: 658px;

  margin-top: 40px;
  margin-left: 20px;
  background: #56aedf;
  border-radius: 5px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 48px;

  text-align: center;

  color: #ffffff;
`;

const QuestionBar = styled.div`
  padding: 13px;
  border-bottom: 1px solid #d9d9d9;

  white-space: nowrap;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;

  color: #666666;
`;

const TextDiv = styled.div`
  position: absolute;
  width: 200px;
  height: 21px;
  left: 80px;
  top: 40px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 21px */

  text-align: center;

  color: #888888;
`;

const BarDiv = styled.div`
  margin-top: 20px;
`;

const Question = (props) => {
  const [open, setOpen] = useState(false);
  function closeModal() {
    props.closeModal();
  }

  return (
    <>
      <QuestionDiv>
        <TextDiv>설문을 진행해주세요.</TextDiv>
        <BarDiv>
          <QuestionBar>
            <InfoBar
              title="1. 약속한 날짜에 대여가 잘 이루어졌나요?"
              percentage={40}
              inputMode={false}
            />
          </QuestionBar>
          <QuestionBar>
            <InfoBar
              title="2. 설정한 위치에서 대여가 잘 이루어졌나요?"
              percentage={60}
              inputMode={false}
            />
          </QuestionBar>
          <QuestionBar>
            <InfoBar
              title="3. 물건의 상태는 대여자가 설정한 것과 일치했나요?"
              percentage={40}
              inputMode={false}
            />
          </QuestionBar>
          <QuestionBar>
            <InfoBar
              title="4. 구성품이 빠짐없이 잘 있었나요?"
              percentage={50}
              inputMode={false}
            />
          </QuestionBar>
          <QuestionBar>
            <InfoBar
              title="5. 대여비와 보증금은 적절했나요?"
              percentage={70}
              inputMode={false}
            />
          </QuestionBar>
        </BarDiv>

        <SubmitButton onClick={closeModal}>설문 제출</SubmitButton>
      </QuestionDiv>
    </>
  );
};

export default Question;
