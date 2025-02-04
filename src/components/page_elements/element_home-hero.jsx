import PropTypes from "prop-types";
import '../../assets/styles/page_elements/element_home-hero.css';

import profilePic from '../../assets/images/profile-pic.png';


const HomeHero = ({ title }) => {
    return (
        <section className="home-hero">
            <img className="home-hero__profile-pic" src={profilePic} alt="Profile picture"/>
            <h1 className="home-hero__hero-title">{title}</h1>
            <p className="home-hero__hero-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies cursus risus sit amet cursus.
                Aliquam consequat sollicitudin auctor.
                Aliquam diam lorem, eleifend at blandit et, suscipit sit amet ante.
                Nullam a tincidunt augue, gravida dictum est.
                Vestibulum gravida quis tellus vitae posuere.
            </p>
        </section>
    );
}

HomeHero.propTypes = {
    title: PropTypes.string.isRequired
};

export default HomeHero;