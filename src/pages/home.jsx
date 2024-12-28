import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Home({ setTitle }) {
    useEffect(() => {
        setTitle("Home");
        document.title = "Home - My Website";
    }, [setTitle]);

    return (
        <section>

        </section>
    )
}

Home.propTypes = {
    setTitle: PropTypes.func.isRequired
};