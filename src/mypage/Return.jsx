import React from "react";
import styled from "styled-components";
import data from "../maindata.json";
import ReturnModal from "./ReturnModal";
import Question from "./Question";
import { useState, useEffect } from "react";

const Pic = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 30px;
  left: 110px;
  border-radius: 5px;
`;

const ProductName = styled.div`
  position: absolute;
  top: 164px;
  left: 62px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #888888;
`;

const BigText = styled.div`
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  color: #666666;
  left: 78px;
  top: 210px;
`;

const SmallText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: #666666;
`;

const Modaldiv = styled.div`
  background-color: white;
  height: 368px;
`;

const ReturnButton = styled.div`
  position: absolute;
  width: 300px;
  height: 48px;
  left: 10px;
  top: 303px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 48px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
  background: #56aedf;
  border-radius: 5px;
`;
const Return = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modaldiv>
        <Pic>
          <img
            src={data[0].img}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Pic>
        <ProductName>어쩌구저쩌구 이름인데 말이지</ProductName>
        <BigText>
          해당 물품을 반납 장소에
          <br />
          반납하셨습니까?
          <SmallText>
            <br />
            (허위 반납시 신고 조치됩니다.)
          </SmallText>
        </BigText>

        <ReturnButton onClick={() => setOpen(!open)}>
          {open && (
            <ReturnModal closeModal={() => setOpen(!open)}>
              <Question />
            </ReturnModal>
          )}
          네, 반납했습니다.
        </ReturnButton>
      </Modaldiv>
    </>
  );
};

export default Return;
