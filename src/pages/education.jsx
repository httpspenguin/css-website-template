import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Education({ setTitle }) {
    useEffect(() => {
        setTitle("Education");
        document.title = "Education - My Website";
    }, [setTitle]);

    return (
        <section>

        </section>
    )
}

Education.propTypes = {
    setTitle: PropTypes.func.isRequired
};