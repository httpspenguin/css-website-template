import PropTypes from "prop-types";


const CardRow = ({ title }) => {
    const cards = [
        { icon: 'fa-solid fa-school', title: 'GCSEs', text: '10 qualifications A*-C', link: '/education', anchor: 'gcses' },
        { icon: 'fa-solid fa-book', title: 'A Levels', text: '3 qualifications A*-D', link: '/education', anchor: 'alevels' },
        { icon: 'fa-solid fa-graduation-cap', title: 'Degree', text: 'BSc in progress, expected to graduate in 2026', link: '/education', anchor: 'bachelors' },
    ];

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
    title: PropTypes.string.isRequired
};

export default CardRow;