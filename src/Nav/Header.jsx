import React from "react";
import styled from "styled-components";
//헤더, 바디(375X812) 전체 들어있는 파일

const Entirety = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background: #ffffff;
`;

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
  width: 60px;
  height: 32px;
  left: 157.5px;
  top: 47.75px;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.333333px;
  color: #ffffff;
`;

function Header() {
  return (
    <Entirety>
      <Head>
        <Logo>바로바로</Logo>
      </Head>
    </Entirety>
  );
}

export default Header;
