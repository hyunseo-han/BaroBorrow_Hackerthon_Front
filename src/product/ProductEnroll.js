import React, { useRef, useState } from "react";
import {
  PdContainer,
  PdInfo,
  InfoDes,
  InfoBox,
  InfoTitle,
  InfoMoney,
  InfoWon,
  PdBtn,
} from "./procuct-style";
import InfoBar from "./InfoBar";
import CalendarEnroll from "./CalendarEnroll";
import style from "styled-components";
import PopAddress from "./PopAddress";

const DesInput = style.textarea`
  width: 100%;
  height: 190px;
  resize: none;
  border:none;
  font-size: 14px;
  font-weight: 700;
  outline:none;
  &::placeholder {
    color: #D9D9D9;
  }
`;

const InfoInput = style.input`
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 700;
  &::placeholder {
    color: #D9D9D9;
  }
`;

const SelectImg = style.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1px solid #D9D9D9;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

const SelectRemove = style.span`
  position: relative;
`;
const InfoPer = style.div`
  padding: 0 12px;
  display: flex;
  font-size: 16px;
  @media only screen and (max-width: 500px) {
  font-size: 12px;
  }
`;

const PerList = style.span`
  padding: 10px 8px;
  background: #E6E6E6;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    margin-right: 10px;
  }
`;

const InfoInputBor = style.input`
  outline: none;
  border: none;
  background: none;
  font-weight: 700;

  @media only screen and (max-width: 500px) {
    width: 55px;
  }
  &::placeholder {
    color: #666666;
    
  }
`;

const InfoInputLoc = style.div`
  padding: 12px;
  border: 1px solid #D9D9D9;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
`;

function ProductEnroll() {
  const [showSelect, setShowSelect] = useState(false);
  const [condition, setCondition] = useState(0);
  const [fileImg, setFileImg] = useState();
  console.log(fileImg);
  const [price, setPrice] = useState("");
  const [rental, setRental] = useState({
    pr: "",
    per: "",
  });
  const [deposit, setDeposit] = useState({
    pr: "",
    per: "",
  });
  const [way, setWay] = useState("");
  const rentalRef = useRef([]);
  const depositRef = useRef([]);
  const wayRef = useRef([]);
  const onClick = (list, idx, setState, state) => {
    for (let index = 0; index < list.current.length; index++) {
      list.current[index].style.backgroundColor = "";
    }
    list.current[idx].style.backgroundColor = "#E9F6FD";
    setState(state);
  };
  // ?????? ??????
  const [popUp, setPopUp] = useState(false);
  const [address, setAddress] = useState("");
  const [prName, setPrName] = useState("");
  const [prDes, setPrDes] = useState("");
  const [dtAddress, setDtAddress] = useState("");
  const [borrowInfo, setBorrowInfo] = useState({
    productName: "",
    listPrice: "",
    deposit: "",
    rentalFee: "",
    explanation: "",
    condition: "",
    address: "",
    detailAddress: "",
    productPhoto: "",
  });
  const [files, setFiles] = useState();
  return (
    <>
      <PdContainer style={{ display: showSelect ? "none" : "" }}>
        <PdInfo>
          <InfoBox>
            {fileImg ? (
              <div>
                <SelectImg src={fileImg} />
                <SelectRemove
                  onClick={() => {
                    setFileImg("");
                  }}
                >
                  <img src={require("../img/closeBtn.png")} />
                </SelectRemove>
              </div>
            ) : (
              <>
                <label htmlFor="imgFile">
                  <img src={require("../img/cam.png")} />
                </label>
                <input
                  id="imgFile"
                  type="file"
                  name="img"
                  accept="image/*"
                  onChange={(event) => {
                    setFileImg(URL.createObjectURL(event.target.files[0]));
                    const file = event.target.files[0];
                    setFiles({ file, uploadedFile: file });
                  }}
                  style={{ width: "0", height: "0" }}
                />
              </>
            )}
          </InfoBox>
          <InfoBox>
            <InfoInput
              placeholder="?????????"
              value={prName}
              onChange={(event) => {
                setPrName(event.target.value);
              }}
            />
          </InfoBox>
          <InfoBox>
            <InfoBar
              title={"?????? ??????"}
              inputMode={true}
              condition={condition}
              setCondition={setCondition}
            />
          </InfoBox>
          <InfoBox>
            <InfoTitle>?????? ??????</InfoTitle>
            <InfoDes>
              <DesInput
                placeholder="( ????????? ??????, ?????? ??????, ?????? ??????, ?????? ?????? ?????? ????????? ???????????? ?????????????????? )"
                value={prDes}
                onChange={(event) => {
                  setPrDes(event.target.value);
                }}
              />
            </InfoDes>
          </InfoBox>
          <InfoBox>
            <InfoTitle>?????? ??????</InfoTitle>
            <InfoMoney>
              <InfoInput
                type="number"
                value={price}
                placeholder="?????? ??????????????????"
                onChange={(event) => {
                  if (event.target.value < 0) {
                    return;
                  } else {
                    setPrice(event.target.value);
                    // ?????????
                    const percen = rental.per;
                    let prRental;
                    if (percen) {
                      prRental = event.target.value * percen;
                    } else {
                      prRental = rental.pr;
                    }
                    setRental({
                      per: percen,
                      pr: prRental,
                    });
                    // ??????
                    const percenD = deposit.per;
                    let prDeposit;
                    if (percenD) {
                      prDeposit = event.target.value * percenD;
                    } else {
                      prDeposit = deposit.pr;
                    }
                    setDeposit({
                      per: percen,
                      pr: prDeposit,
                    });
                  }
                }}
              />
              <InfoWon>???</InfoWon>
            </InfoMoney>
          </InfoBox>
          <InfoBox>
            <InfoTitle>????????? (?????? * %)</InfoTitle>
            <InfoPer>
              <PerList ref={(list) => (rentalRef.current[0] = list)}>
                <InfoInputBor
                  type="text"
                  value={rental.pr}
                  placeholder="?????? ??????"
                  onChange={(event) => {
                    if (event.target.value < 0 || isNaN(event.target.value)) {
                      return;
                    } else {
                      onClick(rentalRef, 0, setRental, {
                        pr: event.target.value,
                        per: 0,
                      });
                    }
                  }}
                />
                <InfoWon>???</InfoWon>
              </PerList>
              <PerList
                ref={(list) => (rentalRef.current[1] = list)}
                onClick={() => {
                  onClick(rentalRef, 1, setRental, {
                    pr: Math.floor(price * 0.1),
                    per: 0.1,
                  });
                }}
              >
                10%
              </PerList>
              <PerList
                ref={(list) => (rentalRef.current[2] = list)}
                onClick={() => {
                  onClick(rentalRef, 2, setRental, {
                    pr: Math.floor(price * 0.15),
                    per: 0.15,
                  });
                }}
              >
                15%
              </PerList>
              <PerList
                ref={(list) => (rentalRef.current[3] = list)}
                onClick={() => {
                  onClick(rentalRef, 3, setRental, {
                    pr: Math.floor(price * 0.2),
                    per: 0.2,
                  });
                }}
              >
                20%
              </PerList>
              <PerList
                ref={(list) => (rentalRef.current[4] = list)}
                onClick={() => {
                  onClick(rentalRef, 4, setRental, {
                    pr: Math.floor(price * 0.25),
                    per: 0.25,
                  });
                }}
              >
                25%
              </PerList>
            </InfoPer>
          </InfoBox>
          <InfoBox>
            <InfoTitle>????????? (?????? * %)</InfoTitle>
            <InfoPer>
              <PerList ref={(list) => (depositRef.current[0] = list)}>
                <InfoInputBor
                  type="text"
                  value={deposit.pr}
                  placeholder="?????? ??????"
                  onChange={(event) => {
                    if (event.target.value < 0 || isNaN(event.target.value)) {
                      return;
                    } else {
                      onClick(depositRef, 0, setDeposit, {
                        pr: event.target.value,
                        per: 0,
                      });
                    }
                  }}
                />
                <InfoWon>???</InfoWon>
              </PerList>
              <PerList
                ref={(list) => (depositRef.current[1] = list)}
                onClick={() => {
                  onClick(depositRef, 1, setDeposit, {
                    pr: Math.floor(0.5 * price),
                    per: 0.5,
                  });
                }}
              >
                50%
              </PerList>
              <PerList
                ref={(list) => (depositRef.current[2] = list)}
                onClick={() => {
                  onClick(depositRef, 2, setDeposit, {
                    pr: Math.floor(0.55 * price),
                    per: 0.55,
                  });
                }}
              >
                55%
              </PerList>
              <PerList
                ref={(list) => (depositRef.current[3] = list)}
                onClick={() => {
                  onClick(depositRef, 3, setDeposit, {
                    pr: Math.floor(0.6 * price),
                    per: 0.6,
                  });
                }}
              >
                60%
              </PerList>
              <PerList
                ref={(list) => (depositRef.current[4] = list)}
                onClick={() => {
                  onClick(depositRef, 4, setDeposit, {
                    pr: Math.floor(0.65 * price),
                    per: 0.65,
                  });
                }}
              >
                65%
              </PerList>
            </InfoPer>
          </InfoBox>
          <InfoBox>
            <InfoTitle>????????????</InfoTitle>
            <InfoInputLoc
              onClick={() => {
                setPopUp(!popUp);
              }}
            >
              {address ? address : "????????? ?????? ??? ????????? ??????????????????"}
            </InfoInputLoc>
            {popUp ? (
              <PopAddress address={address} setAddress={setAddress} />
            ) : (
              ""
            )}
            <InfoInputLoc>
              <InfoInput
                placeholder="??????????????? ??????????????????"
                value={dtAddress}
                onChange={(event) => {
                  setDtAddress(event.target.value);
                }}
              />
            </InfoInputLoc>
          </InfoBox>
          <InfoBox>
            <InfoTitle>????????????</InfoTitle>
            <InfoPer>
              <PerList
                ref={(list) => {
                  wayRef.current[0] = list;
                }}
                onClick={() => {
                  onClick(wayRef, 0, setWay, "??????");
                }}
              >
                ??????
              </PerList>
              <PerList
                ref={(list) => {
                  wayRef.current[1] = list;
                }}
                onClick={() => {
                  onClick(wayRef, 1, setWay, "?????????");
                }}
              >
                ?????????
              </PerList>
            </InfoPer>
          </InfoBox>
        </PdInfo>
        <PdBtn
          onClick={() => {
            setShowSelect(true);
            setBorrowInfo({
              productName: prName,
              listPrice: price,
              deposit: deposit.pr,
              rentalFee: rental.pr,
              explanation: prDes,
              condition: condition,
              address: address,
              detailAddress: dtAddress,
              productPhoto: null,
              barrowMethod: way,
            });
          }}
        >
          ?????? ????????? ??????
        </PdBtn>
      </PdContainer>
      {showSelect ? (
        <CalendarEnroll
          item={"2022-04"}
          ban={"2022-03-04"}
          borrowInfo={borrowInfo}
          setBorrowInfo={setBorrowInfo}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default ProductEnroll;
