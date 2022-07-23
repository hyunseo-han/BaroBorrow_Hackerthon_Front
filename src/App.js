import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./Community";
import CommunityPost from "./CommunityPost";
import Memo from "./Memo";
import Schedule from "./Schedule";
import { GlobalStyle } from "./style";
import styled from "styled-components";
import Nav from "./Nav";
import { useState } from "react";
import ToDo from "./ToDo";
const CommunityTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 16px;
`;
const CommunityBox = styled.section`
  background: #ffffff;
  border-radius: 50px;
  width: 1185px;
  height: 822px;
  margin: 0 auto;
  padding: 50px;
`;

function App() {
  const [page, setPage] = useState();
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav page={page} setPage={setPage} />
      <CommunityBox>
        <CommunityTitle>{page}</CommunityTitle>
        <Routes>
          <Route element={<Community />} path="/community"></Route>
          <Route element={<Schedule />} path="/schedule"></Route>
          <Route element={<ToDo />} path="/todo" />
          <Route element={<Memo />} path="memo"></Route>
        </Routes>
      </CommunityBox>
    </BrowserRouter>
  );
}

export default App;
