import PropTypes from "prop-types";

const IFrameElement = ({ title, source, link, description, reversed }) => {
    return (
        <section className={`iframe-element reversed-${reversed}`}>
            <div className={`iframe-element__content align-end-${reversed}`}>
                <iframe className="iframe-element__iframe" width="100%" height="167" frameBorder="0" src={source}>
                    <a href={link}>{title}</a>
                </iframe>
            </div>
            <div className={`iframe-element__content`}>
                <p className="iframe-element__description">{description}</p>
            </div>
        </section>
    );
}

IFrameElement.propTypes = {
    title: PropTypes.string,
    source: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    reversed: PropTypes.bool,
};

export default IFrameElement;