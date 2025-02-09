import { useEffect } from "react";
import PropTypes from "prop-types";
import ContentImageSplit from "../components/page_elements/element_5050-content-image.jsx";

export default function Education({ setTitle }) {
    useEffect(() => {
        setTitle("Education");
        document.title = "Education - My Website";
    }, [setTitle]);

    const blocks = [
        {
            id: 1,
            title: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies cursus risus sit amet cursus. Aliquam consequat sollicitudin auctor. Aliquam diam lorem, eleifend at blandit et, suscipit sit amet ante. Nullam a tincidunt augue, gravida dictum est. Vestibulum gravida quis tellus vitae posuere.',
            image: '/',
            anchor: 'gcses',
            reversed: false
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies cursus risus sit amet cursus. Aliquam consequat sollicitudin auctor. Aliquam diam lorem, eleifend at blandit et, suscipit sit amet ante. Nullam a tincidunt augue, gravida dictum est. Vestibulum gravida quis tellus vitae posuere.',
            image: '/',
            anchor: 'alevels',
            reversed: true
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies cursus risus sit amet cursus. Aliquam consequat sollicitudin auctor. Aliquam diam lorem, eleifend at blandit et, suscipit sit amet ante. Nullam a tincidunt augue, gravida dictum est. Vestibulum gravida quis tellus vitae posuere.',
            image: '/',
            anchor: 'bachelors',
            reversed: false
        },
    ];

    return (
        <>
            {blocks.map((item) => (
                <ContentImageSplit key={item.id} title={item.title} text={item.text} anchor={item.anchor} reversed={item.reversed} />
            ))}
        </>
    )
}

Education.propTypes = {
    setTitle: PropTypes.func.isRequired
};