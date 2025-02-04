import '../assets/styles/footer.css';


export default function Footer() {
    const socials = [
        { name: 'LinkedIn', link: 'https://uk.linkedin.com/', faClass: 'fa-brands fa-linkedin-in' },
        { name: 'GitHub', link: 'https://github.com/', faClass: 'fa-brands fa-github' },
        { name: 'YouTube', link: 'https://www.youtube.com/', faClass: 'fa-brands fa-youtube' },
        { name: 'Discord', link: 'https://discord.com/', faClass: 'fa-brands fa-discord' },
        { name: 'CodePen', link: 'https://codepen.io/', faClass: 'fa-brands fa-codepen' },
    ];

    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>

            <div className="footer__socials-wrapper">
                {socials.map((item) => (
                    <a className="footer__social-link" href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
                        <i className={item.faClass}></i>
                    </a>
                ))}
            </div>
        </footer>
    )
}