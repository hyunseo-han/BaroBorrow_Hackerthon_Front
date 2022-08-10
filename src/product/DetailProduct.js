import React, { useEffect, useState } from "react";
import data from "../data.json";
import bordata from "../borrdata.json";
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
padding-top: 32px;
margin-top: 52px;
box-sizing: border-box;
max-width: 900px;
@media only screen and (max-width: 376px) {
    width: 100%;
  }
`;

const PdTitle = style.div`
color: #888888;
font-size: 24px;
`;

const PdImgDiv = style.div`
margin-bottom: 15px;
width: 100%;
height: 327px;
`;

const PdImg = style.img`
object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;
const PdInfo = style.ul`
padding-bottom: 18px;
`;
const InfoBox = style.li`
border-bottom: 1px solid #D9D9D9;
padding: 24px 0;
`;
const InfoTitle = style.div`
padding: 0 12px 20px;
font-size: 20px;
`;

const InfoPer = style.div`
background: #99D0EF;
border-radius: 5px;
color: #FFFFFF;
font-size: 14px;
padding: 2px 8px;
float: right;
`;

const InfoWon = style.span`
padding-left: 4px;
`;

const InfoDes = style.div`
  padding: 0 12px;
`;

const InfoCon = style.div`
display: flex;
padding: 0 12px;
`;
const SSizeImg = style.img`
width: 20px;
height: 20px;
`;
const InfoLoc = style.div`
padding: 20px 12px 0;
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
cursor: pointer;
`;
function DetailProduct() {
  const [dt, setDt] = useState(data);
  const [borDt, setBorBt] = useState(bordata);
  const [showSelect, setShowSelect] = useState(false);
  const params = useParams();
  const post = dt.filter((li) => li.id === parseInt(params.id));
  const preventDate = borDt.filter((li) => li.product === params.id);
  const ban = [];
  if (preventDate.length !== 0) {
    let st = new Date(preventDate[0].start_date);
    const lt = new Date(preventDate[0].last_date);
    while (st <= lt) {
      ban.push(new Date(st));
      st.setDate(st.getDate() + 1);
    }
  }
  return (
    <>
      <PdContainer style={{ display: showSelect ? "none" : "" }}>
        <PdImgDiv>
          <PdImg src={post[0].product_photo} />
        </PdImgDiv>
        <PdTitle>{post[0].product_name}</PdTitle>
        <PdInfo>
          <InfoBox>
            <InfoTitle>상품 상태</InfoTitle>
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
          </InfoBox>
          <InfoBox>
            <InfoTitle>물품 설명</InfoTitle>
            <InfoDes>{post[0].explanation}</InfoDes>
          </InfoBox>
          <InfoBox>
            <InfoTitle>상품 정가</InfoTitle>
            <InfoDes>
              {post[0].list_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ", ")}
              <InfoWon>원</InfoWon>
            </InfoDes>
          </InfoBox>
          <InfoBox>
            <InfoTitle>
              대여비
              <InfoPer>20%</InfoPer>
            </InfoTitle>
            <InfoDes>
              {post[0].rental_fee
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ", ")}
              <InfoWon>원</InfoWon>
            </InfoDes>
          </InfoBox>
          <InfoBox>
            <InfoTitle>
              보증금<InfoPer>50%</InfoPer>
            </InfoTitle>
            <InfoDes>
              {post[0].deposit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <InfoWon>원</InfoWon>
            </InfoDes>
          </InfoBox>
          <InfoBox>
            <InfoTitle>대여장소</InfoTitle>
            <Map address={post[0].address} />
            <InfoLoc>
              {post[0].address} {post[0].detail_address}
            </InfoLoc>
          </InfoBox>
        </PdInfo>
        <PdBtn
          onClick={() => {
            setShowSelect(true);
          }}
        >
          대여날짜 선택하기
        </PdBtn>
      </PdContainer>
      {showSelect ? <Calendar item={post[0]} ban={ban} /> : ""}
    </>
  );
}

export default DetailProduct;
