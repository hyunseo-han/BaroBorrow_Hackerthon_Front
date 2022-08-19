import React from "react";
import styled from "styled-components";
import Homeicon from "../img/HomeIcon.png";
import Carticon from "../img/CartIcon.png";
import Mypageicon from "../img/MypageIcon.png";
import Searchicon from "../img/SearchIcon.png";

const FooterDiv = styled.div`
  position: absolute;
  width: 375px;
  height: 68px;
  top: 744px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #f5f5f5;
`;

const HomeIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 27px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 13px;
  left: 100px;
`;

const CartIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 243px;
`;

const MypageIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 323.5px;
`;
//빌려주기 아이콘 이미지로 받아오기

function Footer() {
  return (
    <FooterDiv>
      <HomeIcon>
        <img src={Homeicon}></img>
      </HomeIcon>
      <SearchIcon>
        <img src={Searchicon}></img>
      </SearchIcon>
      <CartIcon>
        <img src={Carticon}></img>
      </CartIcon>
      <Link to={"/mypage/mypagemain"}>
        <MypageIcon>
          <img src={Mypageicon}></img>
        </MypageIcon>
      </Link>
    </FooterDiv>
  );
}

export default Footer;
