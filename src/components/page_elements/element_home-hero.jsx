import PropTypes from "prop-types";
import '../../assets/styles/page_elements/element_home-hero.css';

const HomeHero = ({ title, text, imageSrc }) => {
    return (
        <section className="home-hero">
            <img className="home-hero__profile-pic" src={imageSrc} alt="Profile picture"/>
            <h1 className="home-hero__hero-title">{title}</h1>
            <p className="home-hero__hero-text">{text}</p>
        </section>
    );
}

HomeHero.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    imageSrc: PropTypes.object,
};

export default HomeHero;