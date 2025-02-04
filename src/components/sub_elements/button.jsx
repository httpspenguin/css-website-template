import '../../assets/styles/sub_elements/button.css';

const Button = ({ label, link }) => {
    return (
        <a href={link} className="button">{label}</a>
    );
}

export default Button;