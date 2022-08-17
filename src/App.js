// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { GlobalStyle } from "./style";
// import Main from "./Start/Main";
// import Login from "./Start/Login";
// import SignUp from "./Start/SignUp";
// import Location from "./Start/Location";
// import ProfileEdit from "./ProfileEdit";
// function App() {
//   return (
//     <BrowserRouter>
//       <GlobalStyle />
//       <Routes>
//         <Route exact path={"/"} element={<Main />}></Route>
//         <Route exact path={"/SignUp"} element={<SignUp />}></Route>
//         <Route exact path={"/Login"} element={<Login />}></Route>

//         <Route exact path={"/Location"} element={<Location />}></Route>
//         <Route exact path={"/ProfileEdit"} element={<ProfileEdit />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
