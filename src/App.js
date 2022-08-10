import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import Main from "./Start/Main";
import Login from "./Start/Login";
import SignUp from "./Start/SignUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path={"/"} element={<Main />}></Route>
        <Route exact path={"/SignUp"} element={<SignUp />}></Route>
        <Route exact path={"/Login"} element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
