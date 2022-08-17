import React from "react";
import Header from "./Header";
import styled from "styled-components";
import data from "../maindata.json";

const Input = styled.input`
  position: absolute;
  width: 327px;
  height: 40px;
  left: 20px;
  top: 110px;
  background: #f7f7f7;
  border-radius: 5px;
`;

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
  width: 215px;
  height: 22px;
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
  width: 34px;
  height: 16px;
  left: 136px;
  top: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #888888;
`;

const Deposit = styled.div`
  position: absolute;
  width: 71px;
  height: 19px;
  left: 136px;
  top: 68px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`;

const RentalFee = styled.div`
  position: absolute;
  width: 71px;
  height: 19px;
  left: 136px;
  top: 91px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`;

const Box1 = styled.div`
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 188px;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d9d9d9;
`;

const Box2 = styled.div`
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 308px;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d9d9d9;
`;

const Box3 = styled.div`
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 428px;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d9d9d9;
`;

const Box4 = styled.div`
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 548px;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d9d9d9;
`;

const Box5 = styled.div`
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 668px;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d9d9d9;
`;

const Box6 = styled.div`
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 788px;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d9d9d9;
`;

const Box7 = styled.div`
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 908px;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d9d9d9;
`;

const Box8 = styled.div`
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 1028px;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d9d9d9;
`;

function MainHome() {
  return (
    <>
      <Header />
      <Input placeholder="물품 카테고리 , 물품 명을 검색해주세요."></Input>
      <Box1>
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
        <Deposit>보증금</Deposit>
        <RentalFee>대여비</RentalFee>
      </Box1>
      <Box2>
        <Pic>picture</Pic>
        <Title>title</Title>
        <LocalName>동 이름</LocalName>
        <Deposit>보증금</Deposit>
        <RentalFee>대여비</RentalFee>
      </Box2>
      <Box3>
        <Pic>picture</Pic>
        <Title>title</Title>
        <LocalName>동 이름</LocalName>
        <Deposit>보증금</Deposit>
        <RentalFee>대여비</RentalFee>
      </Box3>
      <Box4>
        <Pic>picture</Pic>
        <Title>title</Title>
        <LocalName>동 이름</LocalName>
        <Deposit>보증금</Deposit>
        <RentalFee>대여비</RentalFee>
      </Box4>
      <Box5>
        <Pic>picture</Pic>
        <Title>title</Title>
        <LocalName>동 이름</LocalName>
        <Deposit>보증금</Deposit>
        <RentalFee>대여비</RentalFee>
      </Box5>
      <Box6>
        <Pic>picture</Pic>
        <Title>title</Title>
        <LocalName>동 이름</LocalName>
        <Deposit>보증금</Deposit>
        <RentalFee>대여비</RentalFee>
      </Box6>
      <Box7>
        <Pic>picture</Pic>
        <Title>title</Title>
        <LocalName>동 이름</LocalName>
        <Deposit>보증금</Deposit>
        <RentalFee>대여비</RentalFee>
      </Box7>
      <Box8>
        <Pic>picture</Pic>
        <Title>title</Title>
        <LocalName>동 이름</LocalName>
        <Deposit>보증금</Deposit>
        <RentalFee>대여비</RentalFee>
      </Box8>
    </>
  );
}

export default MainHome;
