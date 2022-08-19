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
import { UserContextProvider } from "./Context";

function App() {
  const [navtext, setNavText] = useState("");
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContextProvider>
        <Routes>
          {/* 로그인 */}
          <Route exact path={"/"} element={<Main />} />
          <Route exact path={"/SignUp"} element={<SignUp />} />
          <Route exact path={"/Login"} element={<Login />} />
          <Route exact path={"/Location"} element={<Location />} />
          <Route element={<RouteLogin navtext={navtext} />} path={"/user"}>
            {/* 물품 */}
            <Route
              element={<MainHome setNavText={setNavText} />}
              path={"/user/main"}
            />
            <Route element={<DetailProduct />} path={"/user/detail:id"} />
            <Route element={<ProductOwner />} path={"/user/owner"} />
            <Route
              element={<ProductEnroll setNavText={setNavText} />}
              path={"/user/enroll"}
            />
            <Route
              element={<ProductResult />}
              path={"/user/detail:id/result"}
            />

            {/* 마이페이지 */}
            <Route
              element={<MypageMain setNavText={setNavText} />}
              path={"/user/mypage/MypageMain"}
            />
            <Route
              element={<MyBorrow setNavText={setNavText} />}
              path={"/user/mypage/MyBorrow"}
            />
            <Route element={<Profile />} path={"/user/mypage/profile"} />
            {/* 검색 */}
            <Route
              element={<ProductSearch setNavText={setNavText} />}
              path={"/user/search"}
            />
            <Route
              element={<Option setNavText={setNavText} />}
              path={"/user/filtersearch"}
            />
            {/*장바구니*/}
            <Route
              element={<HoldMain setNavText={setNavText} />}
              path={"/user/basket/HoldMain"}
            />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
