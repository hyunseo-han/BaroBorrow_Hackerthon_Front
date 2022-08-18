import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  cursor: pointer;
  text-decoration: underline;
`;

const LocalName = styled.div`
  height: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
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
  padding: 0 24px;
`;

const BoxInfo = styled.div`
  padding-left: 12px;
`;
function ProductList() {
  const navigate = useNavigate();
  const [pdData, setPdData] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/product/").then((response) => {
      setPdData(response.data);
    });
  }, []);
  return (
    <>
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
    </>
  );
}

export default ProductList;
