import PropTypes from "prop-types";

const ContentImageSplit = ({ title, text, imageSrc, anchor, reversed }) => {
    return (
        <section className={`content-image-split reversed-${reversed}`} id={anchor}>
            <div className="content-image-split__img-col">
                <img className="content-image-split__img" src={imageSrc} alt=""/>
            </div>
            <div className="content-image-split__content-col">
                <h2 className="content-image-split__title">{title}</h2>
                <p className="content-image-split__text">{text}</p>
            </div>
        </section>
    );
}

ContentImageSplit.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    imageSrc: PropTypes.string,
    anchor: PropTypes.string,
    reversed: PropTypes.bool
};

export default ContentImageSplit;