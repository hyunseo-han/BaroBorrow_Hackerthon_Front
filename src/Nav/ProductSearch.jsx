import React, { useState } from "react";
import ProductList from "./ProductList";
import styled from "styled-components";
import Footer from "../Nav/Footer";

import SearchDetail from "./SearchDetail";

const PdSearchContainer = styled.div`
  margin-top: 52px;
  font-weight: 700;
  margin-bottom: 80px;
`;

function ProductSearch() {
  const [pdData, setPdData] = useState([]);
  return (
    <PdSearchContainer>
      <SearchDetail setPdData={setPdData} />
      <ProductList pdData={pdData} />
      <Footer />
    </PdSearchContainer>
  );
}

export default ProductSearch;
