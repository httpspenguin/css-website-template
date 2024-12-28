import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Experience({ setTitle }) {
    useEffect(() => {
        setTitle("Experience");
        document.title = "Experience - My Website";
    }, [setTitle]);

    return (
        <section>

        </section>
    )
}

Experience.propTypes = {
    setTitle: PropTypes.func.isRequired
};