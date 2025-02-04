import { useEffect } from "react";
import PropTypes from "prop-types";
import HomeHero from "../components/page_elements/element_home-hero.jsx";

export default function Home({ setTitle }) {
    useEffect(() => {
        setTitle("Home");
        document.title = "Home - My Website";
    }, [setTitle]);

    return (
        <>
            <HomeHero title="Your Name" />
        </>
    )
}

Home.propTypes = {
    setTitle: PropTypes.func.isRequired
};