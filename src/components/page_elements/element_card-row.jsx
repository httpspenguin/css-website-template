import PropTypes from "prop-types";


const CardRow = ({ title, cards }) => {
    return (
        <section className="card-row">
            <h2>{title}</h2>
            <div className="card-row__card-wrapper">
                {cards.map((item) => (
                    <div key={item.title} className="card-row__card">
                        <div className="card-row__card-header">
                            <i className={`${item.icon} card-row__card-icon`}></i>
                        </div>
                        <div className="card-row__card-body">
                            <h3 className="card-row__card-title"><a className="card-row__card-link full-card-click" href={`${item.link}#${item.anchor}`}>{item.title}</a></h3>
                            <p className="card-row__card-text">{item.text}</p>
                        </div>
                        <div className="card-row__card-footer">
                            <i className="fa-solid fa-arrow-right card-row__card-arrow"></i>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

CardRow.propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
};

export default CardRow;