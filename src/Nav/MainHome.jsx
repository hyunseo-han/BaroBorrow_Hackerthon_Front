import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Nav/Footer";
import ProductList from "./ProductList";
import axios from "axios";

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
  const [pdData, setpdData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  const handleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <ListContariner>
      <div
        style={{ display: "flex", alignItems: "center", padding: "14px 12px" }}
      >
        <div
          style={{
            padding: "0 24px",
            width: "100%",

            outline: "none",
          }}
        >
          <Input
            placeholder="물품 카테고리 , 물품 명을 검색해주세요."
            value={inputSearch}
            onChange={handleInputSearch}
          />
        </div>
        <div
          onClick={() => {
            axios
              .get(
                `http://127.0.0.1:8000/search/products?search=${inputSearch}`
              )
              .then((response) => {
                console.log(response);
                setpdData(response.data);
              });
          }}
        >
          검색
        </div>
      </div>
      <div>
        <ListEntireText pdData={pdData}>전체물품</ListEntireText>
        <ProductList pdData={pdData} />
      </div>
      <Footer />
    </ListContariner>
  );
}

export default MainHome;
