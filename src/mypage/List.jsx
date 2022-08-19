import React from "react";
import styled from "styled-components";

const MenuBar1 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 187px;
  height: 46px;
  left: 0px;
  border-bottom: 3px solid #56aedf;
`;

const MenuBar2 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 188px;
  height: 46px;
  left: 187px;
`;

const MenuText = styled.div`
  position: absolute;
  width: 77px;
  height: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #666666;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const MenuText2 = styled.div`
  position: absolute;
  width: 77px;
  height: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #56aedf;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const MenuDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 46px;
  background: #ffffff;
  top: 89px;
`;

function List() {
  return (
    <MenuDiv>
      <MenuBar1>
        <MenuText2>빌린 내역</MenuText2>
      </MenuBar1>
      <MenuBar2>
        <MenuText>빌려준 내역</MenuText>
      </MenuBar2>
    </MenuDiv>
  );
}

export default List;
