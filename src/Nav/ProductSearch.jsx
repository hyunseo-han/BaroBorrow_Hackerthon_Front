import React from "react";
import ProductList from "./ProductList";
import styled from "styled-components";
import Footer from "../Footer";

import SearchDetail from "./SearchDetail";

const PdSearchContainer = styled.div`
  margin-top: 52px;
  font-weight: 700;
  margin-bottom: 80px;
`;

function ProductSearch({ setNavText }) {
  setNavText("");
  return (
    <PdSearchContainer>
      <SearchDetail />
      <ProductList />
      <Footer />
    </PdSearchContainer>
  );
}

export default ProductSearch;
