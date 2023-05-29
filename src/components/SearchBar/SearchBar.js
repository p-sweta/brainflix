import "./SearchBar.scss";
import search from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <div className="searchbar__container">
          <div className="searchbar__icon-container">
            <img className="searchbar__search-icon" src={search} alt="" />
            <label htmlFor="searchbar"></label>
            <input
              className="searchbar__input"
              type="text"
              id="searchBar"
              placeholder="Search"
            />
          </div>
        </div>
      </form>
      <Link to="/upload" className="link">
      <button className="searchbar__upload-container btn">
        <img
          className="searchbar__upload-icon btn__icon"
          src={upload}
          alt="upload-icon"
        />
        <h3 className="searchbar__upload-text btn__text">UPLOAD</h3>
      </button>
      </Link>
      <img
        className="searchbar__avatar"
        src={avatar}
        alt="mohan-muruge-avatar"
      />
    </div>
  );
};

export default SearchBar;
