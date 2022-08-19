import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import ProductList from "./ProductList";

const ListContariner = styled.div`
  color: #888888;
  margin-top: 72px;
  margin-bottom: 78px;
  font-weight: bold;
`;

const Input = styled.input`
  background: #f7f7f7;
  border-radius: 5px;
  border: none;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  height: 50px;
  outline: none;
  @media only screen and (max-width: 400px) {
    height: 40px;
    font-size: 12px;
  }
`;

const ListEntireText = styled.p`
  padding: 10px 24px;
`;

function MainHome() {
  return (
    <ListContariner>
      <div style={{ padding: "0 24px" }}>
        <Input placeholder="물품 카테고리 , 물품 명을 검색해주세요." />
      </div>
      <div>
        <ListEntireText>전체화면</ListEntireText>
        <ProductList />
      </div>
      <Footer />
    </ListContariner>
  );
}

export default MainHome;
