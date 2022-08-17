import React from "react";
import styled from "styled-components";
import WebLOGO from "../img/WebLOGO.png";
//헤더, 바디(375X812) 전체 들어있는 파일

const Entirety = styled.div`
  position: absolute;
  width: 375px;
  background: #ffffff;
`;
//overflow: 헤더 안보임

const Head = styled.div`
  position: absolute;
  height: 90px;
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
      <Entirety>
        <Head>
          <Logo>
            <img src={WebLOGO}></img>
          </Logo>
        </Head>
      </Entirety>
    </>
  );
}

export default Header;
