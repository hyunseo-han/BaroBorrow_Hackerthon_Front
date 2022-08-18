import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";

const Input = styled.input`
  margin-top: 72px;
  background: #f7f7f7;
  border-radius: 5px;
  border: none;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  height: 50px;
  @media only screen and (max-width: 400px) {
    height: 40px;
    font-size: 12px;
  }
`;

const ListEntireText = styled.p`
  padding: 10px 0;
`;

const Pic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

const Title = styled.div`
  width: 215px;
  height: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #888888;
  cursor: pointer;
  text-decoration: underline;
`;

const LocalName = styled.div`
  height: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #888888;
  margin-bottom: 20px;
`;

const Deposit = styled.div`
  width: 71px;
  height: 19px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`;

const RentalFee = styled.div`
  width: 71px;
  height: 19px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`;

const Box = styled.div`
  height: 120px;
  background: #ffffff;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d9d9d9;
  display: flex;
  align-items: center;
`;

const BoxInfo = styled.div`
  padding-left: 12px;
`;

function MainHome() {
  const [pdData, setPdData] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/product/").then((response) => {
      setPdData(response.data);
    });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Input placeholder="물품 카테고리 , 물품 명을 검색해주세요."></Input>
      <div>
        <ListEntireText>전체화면</ListEntireText>
        {pdData.map((list) => (
          <Box key={list.id}>
            <Pic>
              <img
                src={list.productPhoto}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Pic>
            <BoxInfo>
              <Title
                onClick={() => {
                  navigate(`/user/detail${list.id}`);
                }}
              >
                {list.productName}
              </Title>
              <LocalName>{list.address}</LocalName>
              <Deposit>{list.deposit}</Deposit>
              <RentalFee>{list.rentalFee}</RentalFee>
            </BoxInfo>
          </Box>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default MainHome;
