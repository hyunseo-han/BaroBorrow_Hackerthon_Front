import React from "react";
import styled from "styled-components";
import Header from "../nav/Header";
import Footer from "../nav/Footer";
import data from "../maindata.json";
import { useState, useEffect } from "react";
import cartShape from "../img/cartShape.png";
//map 함수로 불러오기 성곤 ^_^

function HoldMain() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setPosts(data);
  };

  return (
    <>
      <Header />
      <Entirety>
        <p>장바구니 메인</p>
        <div>
          {posts.map((post) => (
            <Box key={post.id}>
              <Pic>
                <img
                  src={post.picture}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Pic>
              <BoxInfo>
                <Title>{post.title}</Title>
                <LocalName>{post.local}</LocalName>
                <Deposit>보증금 {post.deposit} 원</Deposit>
                <RentalFee>대여비 {post.rentalfee} 원</RentalFee>
                <CartDiv>
                  <img src={cartShape} />
                </CartDiv>
              </BoxInfo>
            </Box>
          ))}
        </div>
      </Entirety>
      <Footer />
    </>
  );
}

export default HoldMain;

const Pic = styled.div`
  width: 100px;
  height: 100px;
  left: 24px;
  top: 10px;
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
  height: 19px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`;

const RentalFee = styled.div`
  height: 19px;
  left: 136px;
  top: 91px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  margin-top: 3px;
`;

const CartDiv = styled.div`
  left: 328px;
  bottom: 11px;
  padding-left: 200px;
`;

const Entirety = styled.div`
  position: absolute;
  width: 375px;
  height: 654px;
  top: 90px;
  bottom: 68px;
  left: 0px;
  right: 0px;
  background: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
`;
//픽셀 제대로 했는데 overflow라서 일단 hidden

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
