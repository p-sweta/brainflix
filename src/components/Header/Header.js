import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link className="link" to="/">
          <img className="header__logo" src={logo} alt="brainflix logo" />
        </Link>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
