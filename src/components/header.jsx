import PropTypes from "prop-types";

import Navigation from './main_navigation.jsx'

import '../assets/styles/header.css';


const Header = ({ title }) => {
    return (
        <header className="header">
            <Navigation />

            {title === "Home" ? "" :
                <div className="header__header-banner">
                    <h1 className="header__title">{title}</h1>
                </div>
            }
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;