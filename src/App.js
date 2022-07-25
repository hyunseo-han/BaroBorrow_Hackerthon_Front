import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./Community";
import Scheduled from "./Scheduled";
import { GlobalStyle } from "./style";
import ToDo from "./ToDo";
import Home from "./Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Community />} path="/community"></Route>
          <Route element={<Scheduled />} path="/schedule"></Route>
          <Route element={<ToDo />} path="/todo" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
