import PropTypes from "prop-types";

const IFrameElement = ({ widgets }) => {
    return (
        <section className="iframe-element">
            <div className="iframe-element__content">
                {widgets.map((item, index) => (
                    <iframe key={index} width="552" height="167" frameBorder="0" src={item.frameSrc}>
                        <a href={item.link}>{item.title}</a>
                    </iframe>
                ))}
            </div>
        </section>
    );
}

IFrameElement.propTypes = {
    widgets: PropTypes.object.isRequired,
};

export default IFrameElement;