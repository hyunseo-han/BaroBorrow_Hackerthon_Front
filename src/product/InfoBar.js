import React, { useState } from "react";
import style from "styled-components";

const InfoTitle = style.div`
  padding: 0 12px 20px;
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

function InfoBar({ title, percentage }) {
  const [wid, setWid] = useState(window.innerWidth);
  window.addEventListener("resize", function () {
    setWid(window.innerWidth);
  });
  let percentCircle = `Calc(${percentage}% - 16px`;
  if (percentage === 0) {
    percentCircle = `Calc(${percentage}%`;
  } else if (wid >= 500) {
    percentCircle = `Calc(${percentage}% - 28px`;
  }

  return (
    <>
      <InfoTitle>{title}</InfoTitle>
      <InfoCon>
        <SSizeImg
          src={require("../img/fi_thumbs-down.png")}
          style={{ marginRight: "7px" }}
        />
        <ConBarBox>
          <ConBarCircle style={{ left: percentCircle }}></ConBarCircle>
          <ConBarFill style={{ width: `${percentage}%` }}></ConBarFill>
        </ConBarBox>
        <SSizeImg
          src={require("../img/fi_thumbs-up.png")}
          style={{ marginLeft: "7px" }}
        />
      </InfoCon>
    </>
  );
}

export default InfoBar;
