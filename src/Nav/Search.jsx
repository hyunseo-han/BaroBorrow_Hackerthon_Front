import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Input = styled.input`
  position: absolute;
  width: 327px;
  height: 36px;
  left: 19.56px;
  top: 110px;
  background: #f7f7f7;
  border-radius: 5px;
`;

function Search() {
  return (
    <>
      <Header />
      <Input placeholder="물품 카테고리, 물품 명을 검색해주세요를레이."></Input>
    </>
  );
}

export default Search;
