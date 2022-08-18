import React from "react";
import styled from "styled-components";
import { useNavigate, NavLink, Link } from "react-router-dom";

const LogoImg = styled.img`
  position: absolute;
  width: 175px;
  height: 105px;
  left: 100px;
  top: 301px;
`;

const StartBtn = styled.button`
  position: absolute;
  width: 327px;
  height: 52px;
  top: 681px;

  border: none;
  background: #56aedf;
  border-radius: 5px;
  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
`;

const LoginDiv = styled.div`
  position: absolute;
  width: 171px;
  height: 20px;
  left: 102px;
  top: 757px;

  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #666666;
`;

const LoginClick = styled.div`
  float: right;
  color: #56aedf;
  cursor: pointer;

  text-decoration: none;
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

const Main = () => {
  return (
    <>
      <LogoImg src="img/Mainlogo.png" />
      <StartBtn>
        <StyledLink to="/SignUp" style={{ color: "white" }}>
          바로 시작하기
        </StyledLink>
      </StartBtn>
      <LoginDiv>
        이미 계정이 있나요?
        <LoginClick>
          <StyledLink to="/Login" style={{ color: "#56aedf" }}>
            &nbsp;로그인
          </StyledLink>
        </LoginClick>
      </LoginDiv>
    </>
  );
};

export default Main;
