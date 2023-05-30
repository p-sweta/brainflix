import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link className="link" to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
