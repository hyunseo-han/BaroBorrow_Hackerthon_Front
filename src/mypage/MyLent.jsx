import React from "react";
import styled from "styled-components";
import data from "../maindata.json";

const Pic = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 24px;
  top: 10px;
  border-radius: 5px;
`;

const Title = styled.div`
  position: absolute;

  left: 136px;
  top: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #888888;
`;

const LocalName = styled.div`
  position: absolute;

  left: 136px;
  top: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #888888;
`;

const ProductBox = styled.div`
  position: relative;
  width: 375px;
  height: 120px;
  top: 188px;
  flex: none;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  order: 0;
  border-color: #d9d9d9;
`;
const MyLent = () => {
  return (
    <>
      <ProductBox>
        <Pic>
          <img
            src={data[1].picture}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Pic>
        <Title>title</Title>
        <LocalName>동 이름</LocalName>
      </ProductBox>
    </>
  );
};

export default MyLent;
