import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate, NavLink, Link } from "react-router-dom";

const WelcomeDiv = styled.div`
  position: relative;
  width: 287px;
  height: 53px;
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

export const InputText = styled.textarea`
  all: unset;
  position: relative;
  width: 259px;
  height: 22px;
  left: 44px;
  top: 13px;
  margin-left: 3px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  overflow: hidden;
  color: rgba(136, 136, 136, 1);
`;

const SignUpIcon = styled.img`
  position: absolute;
  width: 24px;
  height: 20px;
  left: 12px;
  top: 14px;
  object-fit: contain;
`;

const SignUpDiv = styled.div`
  position: relative;
  width: 327px;
  height: 48px;
  top: 145px;

  background: #f7f7f7;
  border-radius: 5px;

  margin-bottom: 10px;
`;

const SignUpButton = styled.button`
  position: relative;
  width: 327px;
  height: 48px;

  margin-top: 160px;
  background: #56aedf;
  border-radius: 5px;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
  text-align: center;

  color: #ffffff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const SignUp = () => {
  const [name, setName] = useState("");
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    }
  };
  return (
    <>
      <WelcomeDiv>
        WELCOME!
        <SmallWelcome>회원 정보를 입력하여 가입을 완료해주세요.</SmallWelcome>
      </WelcomeDiv>

      <SignUpDiv>
        <SignUpIcon src="img/Name.png" />
        <label htmlFor="input_name"></label>
        <InputText
          type="text"
          name="input_name"
          placeholder="이름"
          value={name}
          onChange={onNameHandler}
        />
      </SignUpDiv>

      <SignUpDiv>
        <SignUpIcon src="img/LoginIcon.png" />
        <label htmlFor="input_id"></label>
        <InputText
          type="text"
          name="input_id"
          placeholder="아이디"
          value={ID}
          onChange={onIDHandler}
        />
      </SignUpDiv>

      <SignUpDiv>
        <SignUpIcon src="img/PassWordIcon.png" />
        <label htmlFor="input_pw"></label>
        <InputText
          type="password"
          name="input_pw"
          placeholder="비밀번호"
          value={password}
          onChange={onPasswordHandler}
        />
      </SignUpDiv>

      <SignUpDiv>
        <SignUpIcon src="img/PassWordIcon.png" />
        <label htmlFor="input_pw"></label>
        <InputText
          type="password"
          name="input_pw"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
        />
      </SignUpDiv>

      <div>
        <SignUpButton type="submit" onSubmit={onSubmit}>
          <StyledLink to="/NickName" style={{ color: "white" }}>
            회원가입
          </StyledLink>
        </SignUpButton>
      </div>
    </>
  );
};

export default SignUp;
