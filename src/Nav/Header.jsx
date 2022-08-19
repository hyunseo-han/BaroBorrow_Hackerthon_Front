import React from "react";
import styled from "styled-components";
import WebLOGO from "../img/logo.png";
//헤더, 바디(375X812) 전체 들어있는 파일

const Head = styled.div`
  position: absolute;
  height: 90px;
  width: 375px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #56aedf;
`;

const Logo = styled.div`
  position: absolute;
  width: 75px;
  height: 45px;
  left: 150px;
  top: 42px;
`;

function Header() {
  return (
    <>
      <Head>
        <Logo>
          <img src={WebLOGO}></img>
        </Logo>
      </Head>
    </>
  );
}

export default Header;
