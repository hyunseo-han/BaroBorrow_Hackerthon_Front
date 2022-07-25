import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./Community";
import Schedule from "./Schedule";
import { GlobalStyle } from "./style";
import styled from "styled-components";
import Nav from "./Nav";
import ToDo from "./ToDo";

const CommunityBox = styled.section`
  background: #ffffff;
  border-radius: 50px;
  height: 822px;
  padding: 50px;
  width: 1185px;
  margin: 0 auto;
  box-sizing: border-box;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <CommunityBox>
        <Routes>
          <Route element={<Community />} path="/community"></Route>
          <Route element={<Schedule />} path="/schedule"></Route>
          <Route element={<ToDo />} path="/todo" />
        </Routes>
      </CommunityBox>
    </BrowserRouter>
  );
}

export default App;
