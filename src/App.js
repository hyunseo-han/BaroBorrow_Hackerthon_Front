import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./Community";
import Scheduled from "./Scheduled";
import { GlobalStyle } from "./style";
import ToDo from "./ToDo";
import Home from "./Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Login from "./Login";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Sidebar login={login} setLogin={setLogin} />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Login setLogin={setLogin} />} path="/login"></Route>
        <Route element={<Community />} path="/community"></Route>
        <Route element={<Scheduled />} path="/schedule"></Route>
        <Route element={<ToDo />} path="/todo" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
