import React from "react";
import styled from "styled-components";
import Header from "../Nav/Header";
import Footer from "../Nav/Footer";
import data from "../maindata.json";
import { useState, useEffect } from "react";
import cartShape from "../img/cartShape.png";
//map 함수로 불러오기 성공 ^_^

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
  width: 60px;
  height: 24px;
  left: 300px;
  top: 52px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 23px;
  color: #ffffff;
  background: rgba(136, 136, 136, 1);
  border-radius: 5px;
  margin-left: 180px;
`;

const ReturnButton = styled.button`
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
  margin-left: 180px;
`;

const MenuBar1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 187px;
  height: 46px;
  left: 0px;
  top: 90px;
  border-bottom: 3px solid #56aedf;
`;

const MenuBar2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 188px;
  height: 46px;
  left: 187px;
  top: 90px;
`;

const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 46px;
  top: 90px;
`;

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
        <MenuDiv>
          <MenuBar1>빌린 내역</MenuBar1>
          <MenuBar2>빌려준 내역</MenuBar2>
        </MenuDiv>

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
                <DdayDiv>D + 1</DdayDiv>
                <TextBox>약속된 장소에 반납하셨나요?</TextBox>
                <ReturnButton>반납하기</ReturnButton>
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
