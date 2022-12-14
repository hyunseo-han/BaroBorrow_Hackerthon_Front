import React from "react";
import styled from "styled-components";
import Header from "../Nav/Header";
import Footer from "../Footer";
import data from "../maindata.json";
import { useState, useEffect } from "react";
import List from "./List";
import { useNavigate } from "react-router-dom";
import ReturnModal from "./ReturnModal";
import Return from "./Return";

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

const MenuText = styled.div`
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
`;

const MenuText2 = styled.div`
  width: 77px;
  height: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #56aedf;
  flex: none;
  order: 0;
  flex-grow: 0;
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
//?????? ????????? ????????? overflow?????? ?????? hidden

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

function MyBorrow({ closeModal }) {
  const [open, setOpen] = useState(false);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setPosts(data);
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
          <MenuText2>?????? ??????</MenuText2>
        </MenuBar1>
        <MenuBar2
          onClick={() => {
            navigate("/user/mypage/MyBorrowed");
          }}
        >
          <MenuText>????????? ??????</MenuText>
        </MenuBar2>
      </MenuDiv>
      <List />
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
                <TextBox>????????? ????????? ???????????????????</TextBox>
                <ReturnButton onClick={() => setOpen(!open)}>
                  {open && (
                    <ReturnModal closeModal={() => setOpen(!open)}>
                      <Return />
                    </ReturnModal>
                  )}
                  ????????????
                </ReturnButton>
              </BoxInfo>
            </Box>
          ))}
        </div>
      </Entirety>
      <Footer />
    </>
  );
}

export default MyBorrow;
