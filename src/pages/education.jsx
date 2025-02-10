import { useEffect } from "react";
import PropTypes from "prop-types";
import ContentImageSplit from "../components/page_elements/element_5050-content-image.jsx";
import image from "../assets/images/inb.jpg";

export default function Education({ setTitle }) {
    useEffect(() => {
        setTitle("Education");
        document.title = "Education - My Website";
    }, [setTitle]);

    const blocks = [
        {
            id: 1,
            title: 'GCSEs',
            text: 'I received 10 GCSEs at grades A*-C between 20XX and 20XX at My School, including:',
            image: image,
            list: ['English Language: A*', 'Mathematics: A', 'Science (Double Award): A', 'History: B'],
            anchor: 'gcses',
            reversed: false
        },
        {
            id: 2,
            title: 'A Levels',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies cursus risus sit amet cursus. Aliquam consequat sollicitudin auctor. Aliquam diam lorem, eleifend at blandit et, suscipit sit amet ante. Nullam a tincidunt augue, gravida dictum est. Vestibulum gravida quis tellus vitae posuere.',
            image: image,
            anchor: 'alevels',
            reversed: true
        },
        {
            id: 3,
            title: 'Bachelor\'s Degree',
            text: 'I am currently studying for my BSc (Hons) in Computer Science at the University of Lincoln, where I have studied modules such as programming fundamentals and user experience design.',
            image: image,
            anchor: 'bachelors',
            reversed: false
        },
    ];

    return (
        <>
            {blocks.map((item) => (
                <ContentImageSplit key={item.id} title={item.title} text={item.text} imageSrc={item.image} list={item.list} anchor={item.anchor} reversed={item.reversed} />
            ))}
        </>
    )
}

Education.propTypes = {
    setTitle: PropTypes.func.isRequired
};