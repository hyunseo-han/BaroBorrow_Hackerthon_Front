import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProduct from "./product/DetailProduct";
import { GlobalStyle } from "./style";
import ProductList from "./ProductList";
import Nav from "./Nav";
import ProductResult from "./product/ProductResult";
import ProductOwner from "./product/ProductOwner";
import ProductEnroll from "./product/ProductEnroll";
import Profile from "./mypage/Profile";
import ProfileEdit from "./mypage/ProfileEdit";
import HoldMain from "../src/basket/HoldMain";
import Option from "./nav/Option";
import MyBorrow from "./mypage/MyBorrow";
import MainHome from "./nav/MainHome";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MyBorrow />
    </BrowserRouter>
  );
}

export default App;
