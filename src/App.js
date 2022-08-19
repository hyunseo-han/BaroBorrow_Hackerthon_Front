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
import MypageMain from "./mypage/MypageMain";
import MyBorrow from "./mypage/MyBorrow";
import MyLent from "./mypage/MyLent";
import QuestionModal from "./mypage/QuestionModal";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route element={<ProductList />} path={"/"}></Route>
        <Route element={<ProductOwner />} path={"/owner"}></Route>
        <Route element={<DetailProduct />} path={"/detail:id"}></Route>
        <Route element={<ProductEnroll />} path={"/enroll"}></Route>
        <Route element={<ProductResult />} path={"/detail:id/result"}></Route>
        <Route element={<Profile />} path={"/mypage/profile"}></Route>
        <Route element={<ProfileEdit />} path={"/mypage/profileEdit"}></Route>
        <Route element={<MypageMain />} path={"/mypage/mypagemain"}></Route>
        <Route element={<MyBorrow />} path={"/mypage/myborrow"}></Route>
        <Route element={<MyLent />} path={"/mypage/mylent"}></Route>
        <Route
          element={<QuestionModal />}
          path={"/mypage/returnquestion"}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
