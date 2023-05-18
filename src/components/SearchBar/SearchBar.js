import "./SearchBar.scss";
import search from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";

const SearchBar = () => {
  return (
    
    <div className="searchbar">
      <form className="searchbar__form">
        <div className="searchbar__container">
          <div className="searchbar__icon-container">
            <img className="searchbar__search-icon" src={search} alt="" />
            <label for="searchbar"></label>
            <input
              class="searchbar__input"
              type="text"
              id="searchBar"
              placeholder="Search"
            />
          </div>
        </div>
      </form>
      <button className="searchbar__upload-container">
        <img className="searchbar__upload-icon" src={upload} alt="" />
        <h3 className="searchbar__upload-text">UPLOAD</h3>
      </button>
      <img
        className="searchbar__avatar"
        src={avatar}
        alt="mohan-muruge-avatar"
      />
      </div>
    
  );
};

export default SearchBar;
