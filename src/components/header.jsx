import PropTypes from "prop-types";

import Navigation from './main_navigation.jsx'

const Header = ({ title }) => {
    return (
        <header>
            <Navigation />

            <h1>{title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;