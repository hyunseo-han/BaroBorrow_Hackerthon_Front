import React, { useState } from "react";
import styled from "styled-components";
import data from "../maindata.json";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Footer from "../Nav/Footer";
const Pic = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;

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
  left: -24px;
  top: 150px;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d9d9d9;
`;

const TextBox = styled.div`
  position: absolute;
  width: 145px;
  height: 16px;
  left: 136px;
  top: 90px;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  color: rgba(102, 102, 102, 1);
`;

const DdayDiv = styled.div`
  position: absolute;
  width: 60px;
  height: 24px;
  left: 291px;
  top: 52px;

  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 23px;

  color: #ffffff;
  background: rgba(136, 136, 136, 1);
  border-radius: 5px;
`;

const ReturnButton = styled.button`
  position: absolute;
  width: 60px;
  height: 24px;
  left: 291px;
  top: 86px;

  background: #56aedf;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;

  color: #ffffff;
`;
const MyBorrow = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
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
        <LocalName>동 이름 여기가 메인</LocalName>
        <DdayDiv>D + 1</DdayDiv>
        <TextBox>약속된 장소에 반납하셨나요?</TextBox>
        {/* <ReturnButton onClick={openModal}>
          반납하기
          <Modal open={showModal} closeModal={() => setShowModal(!showModal)} />
        </ReturnButton> */}
      </ProductBox>
    </>
  );
};

export default MyBorrow;
