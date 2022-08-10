import React from "react";
import styled from "styled-components";

const WelcomeDiv = styled.div`
  position: relative;
  width: 287px;
  height: 53px;
  left: 24px;
  top: 120px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;

  color: rgba(86, 174, 223, 1);
`;

const SmallWelcome = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: rgba(102, 102, 102, 1);
`;

const SignUp = () => {
  return (
    <>
      <WelcomeDiv>
        WELCOME!
        <SmallWelcome>회원 정보를 입력하여 가입을 완료해주세요.</SmallWelcome>
      </WelcomeDiv>
    </>
  );
};

export default SignUp;
