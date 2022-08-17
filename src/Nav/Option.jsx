import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";
import VectorIMG from "../img/Vector.png";
import Local from "../Nav/Local";
import LocalBoxIcon from "../img/LocalBoxIcon.png";

const Top = styled.div`
  position: absolute;
  width: 375px;
  height: 97px;
  left: 0px;
  top: 90px;
  background: #f7f7f7;
`;

const InfoName = styled.div`
  position: absolute;
  width: 50px;
  height: 18px;
  left: 24.44px;
  top: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 128.91%;
  color: #56aedf;
`;

const InfoText1 = styled.div`
  position: absolute;
  width: 81px;
  height: 18px;
  left: 80.44px;
  top: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 128.91%;
  text-align: center;
  color: #888888;
`;

const InfoSearch = styled.div`
  position: absolute;
  width: 93px;
  height: 18px;
  top: 20px;
  left: 167.44px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 128.91%;
  text-align: center;
  color: #56aedf;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const InfoText2 = styled.div`
  position: absolute;
  width: 85px;
  height: 18px;
  left: 266.44px;
  top: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 128.91%;
  text-align: center;
  color: #888888;
`;

const Add = styled.div`
  position: absolute;
  width: 327px;
  height: 32px;
  left: 24.44px;
  top: 50px;
  bottom: 15px;
  background: #ffffff;
`;

const AddVector = styled.div`
  position: absolute;
  top: 7.66px;
  left: 6.52px;
`;

const AddText = styled.input`
  position: absolute;
  top: 7px;
  left: 36px;
  border: 0 solid black;
  outline: none;
`;
//클릭시 테두리 생김..

const Box1 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 187px;
  background: #ffffff;
  border-bottom: 2px solid #e6e6e6;
`;

const LocalBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 327px;
  height: 40px;
  left: 24px;
  top: 60px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
`;

const LocalBoxText = styled.div`
  position: absolute;
  width: 209px;
  height: 18px;
  left: 12px;
  top: 11px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 128.91%;
  text-align: center;
  color: #c5c5c5;
`;

const LocalBoxIconDiv = styled.div`
  position: absolute;
  top: 9px;
  left: 295.17px;
`;
//피그마랑 px다름

const Box2 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 307px;
  background: #ffffff;
  border-bottom: 2px solid #e6e6e6;
`;

const Box3 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 375px;
  height: 120px;
  left: 0px;
  top: 427px;
  background: #ffffff;
  border-bottom: 2px solid #e6e6e6;
`;

const BoxText = styled.div`
  position: absolute;
  width: 107px;
  height: 21px;
  left: 24px;
  top: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 128.91%;
  text-align: center;
  color: #888888;
`;

const Button2_1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 63px;
  height: 31px;
  left: 20px;
  top: 60px;
  border-radius: 5px;
  background: ${(props) => props.color};
  cursor: pointer;
`;

const Button2_2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 102px;
  height: 31px;
  left: 95px;
  top: 60px;
  border-radius: 5px;
  background: ${(props) => props.color};
  cursor: pointer;
`;
//픽셀 계산해서 설정

const Button2_3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 88px;
  height: 31px;
  left: 209px;
  top: 60px;
  background: ${(props) => props.color};
  border-radius: 5px;
  cursor: pointer;
`;

const Button3_1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 63px;
  height: 31px;
  left: 24px;
  top: 60px;
  background: ${(props) => props.color};
  border-radius: 5px;
  cursor: pointer;
`;
const Button3_2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 63px;
  height: 31px;
  left: 99px;
  top: 60px;
  background: ${(props) => props.color};
  border-radius: 5px;
  cursor: pointer;
`;

const Button3_3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 63px;
  height: 31px;
  left: 174px;
  top: 60px;
  background: ${(props) => props.color};
  border-radius: 5px;
  cursor: pointer;
`;

const NextButton = styled.div`
  position: absolute;
  width: 327px;
  height: 48px;
  left: 24px;
  top: 680px;
  bottom: 84px;
  background: #56aedf;
  border-radius: 5px;
`;

const NextButtonText = styled.div`
  position: absolute;
  width: 97px;
  height: 22px;
  left: 115px;
  top: 13px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
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

  return (
    <>
      <Header />

      <Top>
        <InfoName>props</InfoName>
        <InfoText1>님이 검색하신</InfoText1>
        <InfoSearch>props</InfoSearch>
        <InfoText2>관련 검색 결과</InfoText2>
        <Add>
          <AddText placeholder="검색 조건을 추가해보세요" />
          <AddVector>
            <img src={VectorIMG}></img>
          </AddVector>
        </Add>
      </Top>
      <Box1>
        <BoxText>BORROW 지역</BoxText>
        <LocalBox>
          <LocalBoxText>대여를 원하는 지역을 선택해주세요</LocalBoxText>
          <LocalBoxIconDiv>
            <img src={LocalBoxIcon}></img>
          </LocalBoxIconDiv>
        </LocalBox>
      </Box1>
      <Box2>
        <BoxText>BORROW 상태</BoxText>
        <Button2_1 color={color1} onClick={onClick1}>
          전체
        </Button2_1>
        <Button2_2 color={color2} onClick={onClick2}>
          대여 중 제외
        </Button2_2>
        <Button2_3 color={color6} onClick={onClick6}>
          오늘 바로
        </Button2_3>
      </Box2>
      <Box3>
        <BoxText>BORROW 방식</BoxText>
        <Button3_1 color={color3} onClick={onClick3}>
          전체
        </Button3_1>
        <Button3_2 color={color4} onClick={onClick4}>
          대면
        </Button3_2>
        <Button3_3 color={color5} onClick={onClick5}>
          비대면
        </Button3_3>
      </Box3>
      <NextButton>
        <NextButtonText>검색 결과 보기</NextButtonText>
      </NextButton>
      <Footer />
      <br />
      <br />
      <br />
      <Local />
      <br />
      <br />
      <br />
    </>
  );
}

export default Option;
