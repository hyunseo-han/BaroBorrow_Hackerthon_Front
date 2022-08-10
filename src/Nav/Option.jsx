import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { useState } from "react";

const Top = styled.div`
  position: absolute;
  width: 375px;
  height: 97px;
  left: 0px;
  top: 90px;
  background: #f7f7f7;
`;

const Add = styled.input`
  position: absolute;
  width: 327px;
  height: 32px;
  left: 24.44px;
  top: 50px;
  bottom: 15px;
  background: #ffffff;
`;

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
  align-items: flex-start;
  padding: 8px 20px;
  gap: 10px;
  position: absolute;
  width: 132px;
  height: 31px;
  left: 20px;
  top: 60px;
  background: ${(props) => props.color};
  border-radius: 5px;
  cursor: pointer;
`;

const Button2_2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 20px;
  gap: 10px;
  position: absolute;
  width: 99px;
  height: 31px;
  left: 164px;
  top: 60px;
  background: ${(props) => props.color};
  border-radius: 5px;
  cursor: pointer;
`;

const Button3_1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 20px;
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
  align-items: flex-start;
  padding: 8px 20px;
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
  padding: 8px 20px;
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
  top: 681.5px;
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

  return (
    <>
      <Header />
      <Top>
        <Add placeholder="검색조건을 추가해보세요"></Add>
      </Top>
      <Box1>
        <BoxText>BORROW 지역</BoxText>
      </Box1>
      <Box2>
        <BoxText>BORROW 상태</BoxText>
        <Button2_1 color={color1} onClick={onClick1}>
          전체(대여 중 포함)
        </Button2_1>
        <Button2_2 color={color2} onClick={onClick2}>
          바로 가능만
        </Button2_2>
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
    </>
  );
}

export default Option;
