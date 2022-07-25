import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <div className="header">
        <Link to={"/"}>
          <img className="logo" alt="logo" src="img/logo.png"></img>
          <img className="Clog" alt="Clog" src="img/Clog.png"></img>
        </Link>
      </div>
    </div>
  );
};

export default Header;
