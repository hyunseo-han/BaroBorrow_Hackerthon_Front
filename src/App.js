import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
import Option from "./Nav/Option";
import MainHome from "./Nav/MainHome";
import Footer from "./Nav/Footer";
import Local from "./Nav/Local";
import HoldMain from "./Hold/HoldMain";
import Header from "./Nav/Header";
import Search from "./Nav/Search";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HoldMain />
    </BrowserRouter>
  );
}

export default App;
