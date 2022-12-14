import React from "react";
import styled from "styled-components";
import Header from "../Nav/Header";
import Footer from "../Nav/Footer";
import data from "../maindata.json";
import sdata from "../borrdata.json";
import { useState, useEffect } from "react";
import cartShape from "../img/cartShape.png";
import List2 from "./List2";
import MyBorrow from "./MyBorrow";
import { useNavigate } from "react-router-dom";

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

const Pic = styled.div`
  width: 100px;
  height: 100px;
  left: 24px;
  top: 10px;
  border-radius: 5px;
  justify-item: center;
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

const Entirety = styled.div`
  position: absolute;
  width: 375px;
  height: 654px;
  top: 136px;
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

const MenuBar1 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 187px;
  height: 46px;
  left: 0px;
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
  border-bottom: 3px solid #56aedf;
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
  flex: none;
  order: 0;
  flex-grow: 0;
  color: #56aedf;
  cursor: pointer;
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
  color: #666666;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
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
  cursor: pointer;
`;

function MyBorrowed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setPosts(sdata);
  };

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <MenuDiv>
        <MenuBar1
          onClick={() => {
            navigate("/user/mypage/MyBorrow");
          }}
        >
          <MenuText2>빌린 내역</MenuText2>
        </MenuBar1>
        <MenuBar2
          onClick={() => {
            navigate("/user/mypage/MyBorrowed");
          }}
        >
          <MenuText>빌려준 내역</MenuText>
        </MenuBar2>
      </MenuDiv>
      <Entirety>
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

export default MyBorrowed;
