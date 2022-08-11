import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProduct from "./product/DetailProduct";
import { GlobalStyle } from "./style";
import ProductList from "./ProductList";
import Nav from "./Nav";
import ProductResult from "./product/ProductResult";
import ProductOwner from "./product/ProductOwner";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route element={<ProductList />} path={"/"}></Route>
        <Route element={<ProductOwner />} path={"/owner"}></Route>
        <Route element={<DetailProduct />} path={"/detail:id"}></Route>
        <Route element={<ProductResult />} path={"/detail:id/result"}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
