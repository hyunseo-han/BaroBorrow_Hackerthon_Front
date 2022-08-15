import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate, NavLink, Link } from "react-router-dom";

const NickNameDiv = styled.div`
  position: absolute;
  width: 195px;
  height: 27px;
  top: 120px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #888888;
`;
export const InputText = styled.textarea`
  all: unset;
  position: relative;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 44px;
  text-indent: 12px;

  width: 327px;
  height: 48px;
  top: 173px;
  background: rgba(246, 246, 246, 1);
  color: rgba(136, 136, 136, 1);
  border-radius: 5px;
`;

const NextButton = styled.button`
  position: relative;
  width: 327px;
  height: 48px;
  margin-top: 190px;

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

const NickName = () => {
  const [nickname, setnickname] = useState("");
  const onNameHandler = (event) => {
    setnickname(event.currentTarget.value);
  };

  return (
    <>
      <NickNameDiv>닉네임을 입력해주세요.</NickNameDiv>
      <InputText
        type="text"
        name="input_nickname"
        placeholder="ex) 홍길동"
        onChange={onNameHandler}
      />

      <div>
        <NextButton>
          <StyledLink to="/Location" style={{ color: "white" }}>
            다음
          </StyledLink>
        </NextButton>
      </div>
    </>
  );
};

export default NickName;
