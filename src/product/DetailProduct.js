import React, { useEffect, useRef, useState } from "react";
import data from "../data.json";
import bordata from "../borrdata.json";
import style from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Map from "./Map";
import Calendar from "./Calendar";
import InfoBar from "./InfoBar";
import {
  PdContainer,
  PdInfo,
  InfoDes,
  InfoBox,
  InfoTitle,
  InfoMoney,
  InfoWon,
  InfoLoc,
  PdBtn,
} from "./procuct-style";

export const PdTitle = style.div`
  color: #888888;
  font-size: 20px;
  padding: 0 12px 29px;
  border-bottom: 1px solid #D9D9D9;
`;

export const PdImgDiv = style.div`
  margin-bottom: 15px;
  width: 100%;
  height: 320px;
  padding-top: 32px;
`;

export const PdImg = style.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  @media only screen and (max-width: 376px) {
    object-fit: cover;
  }
`;

export const InfoOwner = style.div`
  padding: 0 12px;
  cursor: pointer;
`;

export const InfoNim = style.span`
  margin: 0 12px;
`;

export const InfoOpen = style.div`
  padding: 17px 12px 0;
  cursor: pointer;
`;

export const InfoPer = style.div`
  background: #99D0EF;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 14px;
  padding: 2px 8px;
  float: right;
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
      if (window.innerWidth < 800 && desRef.current.clientHeight > 171) {
        setShowDesBtn(true);
        console.log(desRef.current.clientHeight);
      } else {
        setShowDesBtn(false);
      }
    });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <PdContainer style={{ display: showSelect ? "none" : "" }}>
        <PdImgDiv>
          <PdImg src={post[0].product_photo} />
        </PdImgDiv>
        <PdTitle>{post[0].product_name}</PdTitle>
        <PdInfo>
          <InfoBox>
            <InfoBar
              title={"?????? ??????"}
              percentage={post[0].condition}
              inputMode={false}
            />
          </InfoBox>
          <InfoBox>
            <InfoTitle>?????? ??????</InfoTitle>
            <InfoDes style={{ maxHeight: showDes ? "initial" : "171px" }}>
              <p ref={desRef}>{post[0].explanation}</p>
            </InfoDes>
            {showDesBtn ? (
              <InfoOpen
                onClick={() => {
                  setShowDes(!showDes);
                }}
              >
                {showDes ? "??????" : "?????????"}
              </InfoOpen>
            ) : (
              ""
            )}
          </InfoBox>
          <InfoBox>
            <InfoTitle>?????? ??????</InfoTitle>
            <InfoMoney>
              {post[0].list_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ", ")}
              <InfoWon>???</InfoWon>
            </InfoMoney>
          </InfoBox>
          <InfoBox>
            <InfoTitle>
              ?????????
              <InfoPer>{post[0].rental_fee} %</InfoPer>
            </InfoTitle>
            <InfoMoney>
              {Math.round((post[0].list_price * post[0].rental_fee) / 100)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <InfoWon>???</InfoWon>
            </InfoMoney>
          </InfoBox>
          <InfoBox>
            <InfoTitle>
              ?????????<InfoPer>{post[0].deposit} %</InfoPer>
            </InfoTitle>
            <InfoMoney>
              {Math.round((post[0].list_price * post[0].deposit) / 100)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <InfoWon>???</InfoWon>
            </InfoMoney>
          </InfoBox>
          <InfoBox>
            <InfoTitle>????????????</InfoTitle>
            <Map address={post[0].address} />
            <InfoLoc>
              {post[0].address} {post[0].detail_address}
            </InfoLoc>
          </InfoBox>
          <InfoBox>
            <InfoTitle>????????? ??????</InfoTitle>
            <InfoOwner
              onClick={() => {
                navigate("/user/owner");
              }}
            >
              ??????/?????????
              <InfoNim>???</InfoNim>
              <img src={require("../img/side.png")} />
            </InfoOwner>
          </InfoBox>
        </PdInfo>
        <PdBtn
          onClick={() => {
            setShowSelect(true);
          }}
        >
          ???????????? ????????????
        </PdBtn>
      </PdContainer>
      {showSelect ? <Calendar item={post[0]} ban={ban} /> : ""}
    </>
  );
}

export default DetailProduct;
