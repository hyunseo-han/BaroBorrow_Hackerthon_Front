import React, { useState } from "react";
import data from "../data.json";
import style from "styled-components";
import { useParams } from "react-router-dom";
import Map from "./Map";
import Calendar from "./Calendar";

const PdContainer = style.div`
width: 70vw;
height: 100vh;
margin: 0 auto;
font-weight: 700;
color: #666666;
padding: 20px 24px 0 24px;
box-sizing: border-box;
@media only screen and (max-width: 376px) {
    width: 100%;
  }
`;

const PdHeader = style.div`
display: flex;
justify-content: space-between;
`;
const PdHeaderName = style.div`
color: #888888;
`;
const PdHeaderCart = style.div``;
const MSizeIcon = style.img`
    width: 24px;
    height: 24px;
`;

const PdImgDiv = style.div`
margin: 28px 0;
position: relative;
width: 100%;
height: 0;
overflow: hidden;
padding-bottom: 50%;
`;

const PdImg = style.img`
object-fit: contain;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`;
const PdInfo = style.div`
padding-bottom: 27px;
`;
const InfoBox = style.div`
display: flex;
padding: 7px 0;
`;
const InfoText = style.span`
width: 45px;
`;
const InfoMoney = style.div`
padding-left: 12px;
`;
const InfoWon = style.span`
padding-left: 4px;
`;
const InfoDesBox = style.div`
  padding: 8px 0 10px 0;
`;
const InfoDes = style.div`
  padding-top: 8px;
`;
const InfoConBox = style.div`
padding-top: 7px;
`;
const InfoCon = style.div`
display: flex;
margin: 17px 0;
`;
const SSizeImg = style.img`
width: 20px;
height: 20px;
`;
const InfoLocBox = style.div``;
const InfoLoc = style.div`
display: flex;
margin-bottom: 9px;
`;
const ConBarBox = style.div`
background: #E6E6E6;
border-radius: 30px;
width: 100%;
`;
const ConBarFill = style.div`
background: #56AEDF;
border-radius: 30px;
height: 100%;
`;
const PdBtn = style.div`
background: #56AEDF;
padding: 23px 0;
text-align: center;
color: white;
`;
function DetailProduct(props) {
  const [dt, setDt] = useState(data);
  const [showSelect, setShowSelect] = useState(false);
  const params = useParams();
  const post = dt.filter((li) => li.id === parseInt(params.id));
  console.log(post[0].id);
  return (
    <>
      <PdContainer style={{ display: showSelect ? "none" : "" }}>
        <PdHeader>
          <PdHeaderName>{post[0].product_name}</PdHeaderName>
          <PdHeaderCart>
            <MSizeIcon src={require("../img/shopping-cart.png")} />
          </PdHeaderCart>
        </PdHeader>
        <PdImgDiv>
          <PdImg src={post[0].product_photo} />
        </PdImgDiv>
        <PdInfo>
          <InfoBox>
            <InfoText>정가</InfoText>
            <InfoMoney>{post[0].list_price}</InfoMoney>
            <InfoWon>원</InfoWon>
          </InfoBox>
          <InfoBox>
            <InfoText>보증금</InfoText>
            <InfoMoney>{post[0].deposit}</InfoMoney>
            <InfoWon>원</InfoWon>
          </InfoBox>
          <InfoBox>
            <InfoText>대여비</InfoText>
            <InfoMoney>{post[0].rental_fee}</InfoMoney>
            <InfoWon>원</InfoWon>
          </InfoBox>
          <InfoDesBox>
            <InfoText>설명</InfoText>
            <InfoDes>{post[0].explanation}</InfoDes>
          </InfoDesBox>
          <InfoConBox>
            <InfoText>상태</InfoText>
            <InfoCon>
              <SSizeImg
                src={require("../img/fi_thumbs-down.png")}
                style={{ marginRight: "7px" }}
              />
              <ConBarBox>
                <ConBarFill
                  style={{ width: `${post[0].condition}%` }}
                ></ConBarFill>
              </ConBarBox>
              <SSizeImg
                src={require("../img/fi_thumbs-up.png")}
                style={{ marginLeft: "7px" }}
              />
            </InfoCon>
          </InfoConBox>
          <InfoLocBox>
            <InfoLoc>
              <InfoText>위치</InfoText>
              {post[0].address} {post[0].detail_address}
            </InfoLoc>
            <Map address={post[0].address} />
          </InfoLocBox>
        </PdInfo>
        <PdBtn
          onClick={() => {
            setShowSelect(true);
          }}
        >
          대여날짜 선택하기
        </PdBtn>
      </PdContainer>
      {showSelect ? <Calendar item={post[0]} /> : ""}
    </>
  );
}

export default DetailProduct;
