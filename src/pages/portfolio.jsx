import { useEffect } from "react";
import PropTypes from "prop-types";
import IFrameElement from "../components/page_elements/element_itch-embed.jsx";

export default function Portfolio({ setTitle }) {
    useEffect(() => {
        setTitle("Portfolio");
        document.title = "Portfolio - My Website";
    }, [setTitle]);

    const widgets = [
        {
            title: "Bubble Busting Frog Guy 2 (Enhanced Edition) (2025 Remastered) Deluxe (Digital Copy) by Speks",
            frameSrc: "https://itch.io/embed/3274443",
            link: "https://speks.itch.io/ggj2025",
        },
        {
            title: "Horsing Around by ChiefCharpa",
            frameSrc: "https://itch.io/embed/3275488",
            link: "https://chiefcharpa.itch.io/horsing-around",
        },
        {
            title: "Card Croak by KirbyXIV",
            frameSrc: "https://itch.io/embed/3275749",
            link: "https://kirbyxiv.itch.io/card-croak-actual",
        }
    ]

    return (
        <section>
            <IFrameElement widgets={widgets} />
        </section>
    )
}

Portfolio.propTypes = {
    setTitle: PropTypes.func.isRequired
};