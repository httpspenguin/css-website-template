import { useEffect } from "react";
import PropTypes from "prop-types";
import IFrameElement from "../components/page_elements/element_itch-embed.jsx";
import YouTubeVideo from "../components/page_elements/element_youtube-video.jsx";

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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies cursus risus sit amet cursus. Aliquam consequat sollicitudin auctor. Aliquam diam lorem, eleifend at blandit et, suscipit sit amet ante.",
            reversed: false
        },
        {
            title: "Horsing Around by ChiefCharpa",
            frameSrc: "https://itch.io/embed/3275488",
            link: "https://chiefcharpa.itch.io/horsing-around",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies cursus risus sit amet cursus. Aliquam consequat sollicitudin auctor. Aliquam diam lorem, eleifend at blandit et, suscipit sit amet ante.",
            reversed: true
        },
        {
            title: "Card Croak by KirbyXIV",
            frameSrc: "https://itch.io/embed/3275749",
            link: "https://kirbyxiv.itch.io/card-croak-actual",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies cursus risus sit amet cursus. Aliquam consequat sollicitudin auctor. Aliquam diam lorem, eleifend at blandit et, suscipit sit amet ante.",
            reversed: false
        }
    ]

    return (
        <>
            <YouTubeVideo title="Watch a short overview" description="A quick walkthrough of gameplay from top games in my portfolio. Use the itch.io links below to download and play." videoId="ogfYd705cRs" playTitle="My Portfolio Video" />

            {widgets.map((item, index) => (
                <IFrameElement key={index} title={item.title} source={item.frameSrc} link={item.link}
                               description={item.description} reversed={item.reversed}/>
            ))}
        </>
    )
}

Portfolio.propTypes = {
    setTitle: PropTypes.func.isRequired
};