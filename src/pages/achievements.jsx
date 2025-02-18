import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Achievements({ setTitle }) {
    useEffect(() => {
        setTitle("Achievements");
        document.title = "Achievements - My Website";
    }, [setTitle]);

    return (
        <>

        </>
    )
}

Achievements.propTypes = {
    setTitle: PropTypes.func.isRequired
};