import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";

const LocationDiv = styled.div`
  position: absolute;
  width: 219px;
  height: 27px;
  top: 120px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #888888;
`;

export const InputText = styled.textarea`
  all: unset;
  position: relative;

  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 44px;
  text-indent: 12px;

  width: 327px;
  height: 48px;
  top: 173px;
  background: rgba(246, 246, 246, 1);
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  position: relative;
  width: 327px;
  height: 48px;
  top: 540px;

  background: #56aedf;
  border-radius: 5px;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
  text-align: center;

  color: #ffffff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Location = (props) => {
  const address = props.address;
  const setAddress = props.setAddress;

  const onCompletePost = (data) => {
    console.log(data.address);
    setAddress(data.address);
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "173px",
    width: "327px",
    height: "300px",
  };
  return (
    <>
      <LocationDiv>활동 지역을 입력해주세요.</LocationDiv>

      <DaumPostcode
        style={postCodeStyle}
        autoClose
        onComplete={onCompletePost}
      />

      <div>
        <SubmitButton>
          <StyledLink to="/Main" style={{ color: "white" }}>
            다음
          </StyledLink>
        </SubmitButton>
      </div>
    </>
  );
};

export default Location;
