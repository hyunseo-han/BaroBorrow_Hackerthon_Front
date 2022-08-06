import React from "react";
import { useLocation } from "react-router-dom";
import style from "styled-components";

const ResultBox = style.div`
background: #E9F6FD;
height: calc(100vh - 52px);
width: 100%;
`;

const ResultSection = style.div`
  height: 400px;
  background-color: #ffffff;
`;

const ResultInfo = style.div`
`;
const ResultInfoList = style.div`
`;
function ProductResult() {
  const location = useLocation();

  const borrowItem = location.state.borrow;
  const borrowUser = location.state.borrower;
  console.log(borrowItem, borrowUser);
  return (
    <ResultBox>
      <ResultSection>
        대여신청완료
        <img src={require("../img/borrow_com.png")} />
        <ResultInfo>
          {/* <ResultInfoList>{borrowItem.}</ResultInfoList> */}
        </ResultInfo>
      </ResultSection>
    </ResultBox>
  );
}

export default ProductResult;
