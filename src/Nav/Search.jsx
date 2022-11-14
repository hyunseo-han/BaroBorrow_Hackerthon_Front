import React from "react";
import styled from "styled-components";
import Footer from "../Nav/Footer";
import SearchIconSmall from "../img/SearchIconSmall.png";
import { useNavigate } from "react-router-dom";

const InputDiv = styled.div`
  position: absolute;
  width: 327px;
  height: 36px;
  left: 19.56px;
  top: 110px;
  background: #f7f7f7;
  border-radius: 5px;
`;

const Input = styled.input`
  position: absolute;
  width: 271px;
  height: 19px;
  left: 12px;
  top: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #888888;
  border: 0 solid black;
  outline: none;
`;

const IconDiv = styled.div`
  position: absolute;
  top: 10.5px;
  left: 297.5px;
`;

function Search() {
  const navigate = useNavigate();
  const goToOption = () => {
    navigate("/option");
  };
  return (
    <>
      <InputDiv>
        <Input placeholder="물품 카테고리, 물품 명을 입력해주세요."></Input>
        <IconDiv onClick={goToOption}>
          <img src={SearchIconSmall} />
        </IconDiv>
      </InputDiv>
      <Footer />
    </>
  );
}

export default Search;
