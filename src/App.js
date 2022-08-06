import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalStyle />
      {/* 여기에 작성 */}
    </BrowserRouter>
  );
}

export default App;
