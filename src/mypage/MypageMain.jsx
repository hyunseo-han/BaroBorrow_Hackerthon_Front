import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../Nav/Footer";
import { axios } from "axios";

const NicknameDiv = styled.div`
  color: rgba(86, 174, 223, 1);
  position: relative;
  width: 80px;
  height: 27px;
  top: 80px;
  float: left;
  left: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.333333px;
`;

const TextDiv = styled.div`
  left: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.333333px;
  float: left;
  position: relative;
  width: 80px;
  height: 27px;
  top: 80px;
  color: rgba(136, 136, 136, 1);
`;

const MenuContainer = styled.div`
  left: 24px;
  display: flex;
  left: -24px;

  flex-direction: column;
`;

const MenuDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 375px;
  height: 60px;
  left: -160px;
  top: 135px;
  background: #ffffff;
  border-top: 1px solid #dadada;
`;

const MenuIcon = styled.img`
  position: absolute;
  left: 24px;
  top: 19px;
`;

const MenuTextDiv = styled.div`
  width: 100px;
  padding-left: 65px;
  padding-top: 19px;

  /* font-family: "Open Sans"; */
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  letter-spacing: -0.333333px;

  color: #666666;
`;
const MypageMain = () => {
  return (
    <>
      <NicknameDiv>user0</NicknameDiv>
      <TextDiv>님</TextDiv>
      <MenuContainer>
        <Link to={"/user/mypage/profile"}>
          <MenuDiv>
            <MenuIcon src="../../img/profileMain1.png" />
            <MenuTextDiv>내 프로필</MenuTextDiv>
          </MenuDiv>
        </Link>
        <Link to={"/user/mypage/MyBorrow"}>
          <MenuDiv>
            <MenuIcon src="../../img/profileMain2.png" />
            <MenuTextDiv>내 바로 내역</MenuTextDiv>
          </MenuDiv>
        </Link>
        <MenuDiv style={{ borderBottom: "1px solid #DADADA" }}>
          <MenuIcon src="../../img/profileMain3.png" />
          <MenuTextDiv>고객센터</MenuTextDiv>
        </MenuDiv>
      </MenuContainer>
      <Footer />
    </>
  );
};

export default MypageMain;
