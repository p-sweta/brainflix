import './Header.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import search from '../../assets/icons/search.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import upload from '../../assets/icons/upload.svg'

const Header = () => {
    return (
        <header className = 'header'>
            <div className = "header__logo-container">
                <img className = "header__logo" src = {logo} alt = "" />
            </div>
            <div>
                <div>
                    <img src = {search} alt = "" />
                    <h3>Search</h3>
                </div>
                <img
                className = "image"
                src = {avatar}
                alt="mohan-muruge-avatar"
              />
            </div>
            <div>
                <img src = {upload} alt="" />
                <h3>UPLOAD</h3>
            </div>
        </header>
    )
}

export default Header;