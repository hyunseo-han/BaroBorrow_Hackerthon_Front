import React, { useEffect, useRef, useState } from "react";
import data from "../data.json";
import bordata from "../borrdata.json";
import style from "styled-components";
import { useParams } from "react-router-dom";
import Map from "./Map";
import Calendar from "./Calendar";

const PdContainer = style.div`
  height: 100vh;
  margin: 0 auto;
  font-weight: 700;
  color: #666666;
  padding-top: 32px;
  margin-top: 52px;
  box-sizing: border-box;
  max-width: 900px;
  @media only screen and (max-width: 500px) {
      width: 100%;
    }
`;

const PdTitle = style.div`
  color: #888888;
  font-size: 20px;
  padding: 0 12px 29px;
  border-bottom: 1px solid #D9D9D9;
`;

const PdImgDiv = style.div`
  margin-bottom: 15px;
  width: 100%;
  height: 320px;
`;

const PdImg = style.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  @media only screen and (max-width: 376px) {
    object-fit: cover;
  }
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
  overflow: hidden;
  font-size: 14px;
  line-height: 21px;
`;

const InfoOpen = style.div`
  padding: 17px 12px 0;
  cursor: pointer;
`;

const InfoMoney = style.div`
  padding: 0 12px;
`;

const InfoCon = style.div`
  display: flex;
  padding: 0 12px;
  align-items: center;
`;
const SSizeImg = style.img`
  width: 20px;
  height: 20px;
`;
const InfoLoc = style.div`
  padding-top: 20px;
`;
const ConBarBox = style.div`
  background: #E6E6E6;
  border-radius: 30px;
  width: 100%;
  height: 20px;
  position: relative;
  @media only screen and (max-width: 500px) {
    height: 10px;
  }
`;
const ConBarCircle = style.div`
  border-radius: 50%;
  background: #56AEDF;
  position: absolute;
  width: 28px;
  height: 28px;
  top: -4px;
  @media only screen and (max-width: 500px) {
    width: 16px;
    height: 16px;
    top: -3px;
  }
`;
const ConBarFill = style.div`
  background: #99D0EF;
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
  const desRef = useRef();
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
  const [showDes, setShowDes] = useState(false);
  const [showDesBtn, setShowDesBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth < 800) {
        if (desRef.current.children[0].clientHeight > 171) {
          setShowDesBtn(true);
        }
      } else {
        setShowDesBtn(false);
      }
    });
  }, []);
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
                <ConBarCircle
                  style={{ left: `Calc(${post[0].condition}% - 16px)` }}
                ></ConBarCircle>
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
            <InfoDes
              ref={desRef}
              style={{ maxHeight: showDes ? "initial" : "171px" }}
            >
              <p>{post[0].explanation}</p>
            </InfoDes>
            {showDesBtn ? (
              <InfoOpen
                onClick={() => {
                  setShowDes(!showDes);
                }}
              >
                {showDes ? "접기" : "더보기"}
              </InfoOpen>
            ) : (
              ""
            )}
          </InfoBox>
          <InfoBox>
            <InfoTitle>상품 정가</InfoTitle>
            <InfoMoney>
              {post[0].list_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ", ")}
              <InfoWon>원</InfoWon>
            </InfoMoney>
          </InfoBox>
          <InfoBox>
            <InfoTitle>
              대여비
              <InfoPer>{post[0].rental_fee} %</InfoPer>
            </InfoTitle>
            <InfoMoney>
              {Math.round((post[0].list_price * post[0].rental_fee) / 100)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <InfoWon>원</InfoWon>
            </InfoMoney>
          </InfoBox>
          <InfoBox>
            <InfoTitle>
              보증금<InfoPer>{post[0].deposit} %</InfoPer>
            </InfoTitle>
            <InfoMoney>
              {Math.round((post[0].list_price * post[0].deposit) / 100)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <InfoWon>원</InfoWon>
            </InfoMoney>
          </InfoBox>
          <InfoBox>
            <InfoTitle>대여장소</InfoTitle>
            <Map address={post[0].address} />
            <InfoLoc>
              {post[0].address} {post[0].detail_address}
            </InfoLoc>
          </InfoBox>
          <InfoBox>
            <InfoTitle>대여자 정보</InfoTitle>
            <div>이름</div>
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
