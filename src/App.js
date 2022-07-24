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
  width: 1185px;
  height: 822px;
  margin: 0 auto;
  padding: 50px;
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
