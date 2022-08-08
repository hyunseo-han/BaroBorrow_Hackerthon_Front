import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProduct from "./product/DetailProduct";
import { GlobalStyle } from "./style";
import ProductList from "./ProductList";
import Nav from "./Nav";
import ProductResult from "./product/ProductResult";
import Search from "./Search";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <div style={{ marginTop: "52px" }}>
        <Routes>
          <Route element={<ProductList />} path={"/"}></Route>
          <Route element={<DetailProduct />} path={"/detail:id"}></Route>
          <Route element={<ProductResult />} path={"/detail:id/result"}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
