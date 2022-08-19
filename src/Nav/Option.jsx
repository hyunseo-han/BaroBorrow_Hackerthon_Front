import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Footer from "../Footer";
import Local from "../Nav/Local";
import LocalBoxIcon from "../img/LocalBoxIcon.png";
import SearchDetail from "./SearchDetail";

//클릭시 테두리 생김..

const OptionContainer = styled.div`
  margin: 52px auto 80px;
`;

const Box1 = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  border-bottom: 2px solid #e6e6e6;
  padding: 20px 24px;
`;

const LocalBox = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const LocalBoxText = styled.div`
  width: 209px;
  height: 18px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 128.91%;
  color: #c5c5c5;
  cursor: pointer;
`;

const LocalBoxIconDiv = styled.div``;
//피그마랑 px다름

const BoxText = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 128.91%;
  color: #888888;
  padding-bottom: 15px;
`;

const NextButton = styled.div`
  background: #56aedf;
  border-radius: 5px;
  padding: 13px 0;
  margin: 0 24px;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-top: 40px;
  @media only screen and (max-width: 500px) {
    margin-top: 120px;
  }
`;

const BoxBtn = styled.div`
  display: flex;
  gap: 12px;
`;
const BtnList = styled.div`
  border-radius: 5px;
  border-radius: 5px;
  background: #e6e6e6;
  padding: 8px 20px;
  font-weight: 700;
  color: #888888;
  cursor: pointer;
  background: ${(props) => props.color};
`;

//글자 간격은 폰트 적용 후 확인할것

function Option() {
  const [color1, setColor1] = useState("#E6E6E6");
  const [color2, setColor2] = useState("#E6E6E6");
  const [color3, setColor3] = useState("#E6E6E6");
  const [color4, setColor4] = useState("#E6E6E6");
  const [color5, setColor5] = useState("#E6E6E6");
  const [color6, setColor6] = useState("#E6E6E6");

  const onClick1 = () => {
    color1 === "#E6E6E6" ? setColor1("#E9F6FD") : setColor1("#E6E6E6");
  };
  const onClick2 = () => {
    color2 === "#E6E6E6" ? setColor2("#E9F6FD") : setColor2("#E6E6E6");
  };
  const onClick3 = () => {
    color3 === "#E6E6E6" ? setColor3("#E9F6FD") : setColor3("#E6E6E6");
  };
  const onClick4 = () => {
    color4 === "#E6E6E6" ? setColor4("#E9F6FD") : setColor4("#E6E6E6");
  };
  const onClick5 = () => {
    color5 === "#E6E6E6" ? setColor5("#E9F6FD") : setColor5("#E6E6E6");
  };
  const onClick6 = () => {
    color6 === "#E6E6E6" ? setColor6("#E9F6FD") : setColor6("#E6E6E6");
  };

  const [local, setLocal] = useState(false);
  const [localName, setLocalName] = useState("");
  return (
    <>
      <OptionContainer>
        <SearchDetail />
        <Box1>
          <BoxText>BORROW 지역</BoxText>
          <LocalBox
            onClick={() => {
              setLocal(true);
            }}
          >
            <LocalBoxText>
              {localName ? localName : "대여를 원하는 지역을 선택해주세요"}
            </LocalBoxText>
            <LocalBoxIconDiv>
              <img src={LocalBoxIcon} />
            </LocalBoxIconDiv>
          </LocalBox>
        </Box1>
        <Box1>
          <BoxText>BORROW 상태</BoxText>
          <BoxBtn>
            <BtnList color={color1} onClick={onClick1}>
              전체
            </BtnList>
            <BtnList color={color2} onClick={onClick2}>
              대여 중 제외
            </BtnList>
            <BtnList color={color6} onClick={onClick6}>
              오늘 바로
            </BtnList>
          </BoxBtn>
        </Box1>
        <Box1>
          <BoxText>BORROW 방식</BoxText>
          <BoxBtn>
            <BtnList color={color3} onClick={onClick3}>
              전체
            </BtnList>
            <BtnList color={color4} onClick={onClick4}>
              대면
            </BtnList>
            <BtnList color={color5} onClick={onClick5}>
              비대면
            </BtnList>
          </BoxBtn>
        </Box1>
        <NextButton>검색 결과 보기</NextButton>
        <Footer />
        {local ? <Local setLocal={setLocal} setLocalName={setLocalName} /> : ""}
      </OptionContainer>
    </>
  );
}

export default Option;
