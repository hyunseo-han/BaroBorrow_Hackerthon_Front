import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProduct from "./product/DetailProduct";
import { GlobalStyle } from "./style";
import ProductResult from "./product/ProductResult";
import ProductOwner from "./product/ProductOwner";
import ProductEnroll from "./product/ProductEnroll";
import Profile from "./mypage/Profile";
import ProfileEdit from "./mypage/ProfileEdit";
import MainHome from "./Nav/MainHome";
import Search from "./Nav/Search";
import SignUp from "./Start/SignUp";
import Main from "./Start/Main";
import Login from "./Start/Login";
import Location from "./Start/Location";
import RouteLogin from "./RouteLogin";
import ProductSearch from "./Nav/ProductSearch";
import Option from "./Nav/Option";
import { useState } from "react";
import HoldMain from "./basket/HoldMain";
import MypageMain from "./mypage/MypageMain";
import MyBorrow from "./mypage/MyBorrow";
import MyBorrowed from "./mypage/MyBorrowed";

function App() {
  const [navtext, setNavText] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <MyBorrow />
    </BrowserRouter>
  );
}

export default App;
