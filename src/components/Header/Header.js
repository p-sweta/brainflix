import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import SearchBar from "../SearchBar/SearchBar";


const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} alt="" />
      </div>
      <SearchBar /> 
    </header>
  );
};

export default Header;
