import siteLogo from '../assets/react.svg'
import '../assets/styles/main_nav.css';

export default function Navigation() {
    const navLinks = [
        { name: 'Education', link: '/education' },
        { name: 'Technical Skills', link: '/technical-skills' },
        { name: 'Experience', link: '/experience' },
        { name: 'Achievements', link: '/achievements' },
        { name: 'About me', link: '/about-me' },
    ];

    return (
        <nav className="main-nav">
            <div className="main-nav__content">
                <a href="/">
                    <img src={siteLogo} className="main-nav__site-logo" alt="Portfolio Site logo"/>
                </a>

                <div className="main-nav__menu-desktop">
                    {navLinks.map((item) => (
                        <a className="main-nav__nav-link" key={item.link} href={item.link}>{item.name}</a>
                    ))}
                </div>

                <div className="main-nav__toggle">

                </div>

                <div className="main-nav__menu-mobile">
                    {navLinks.map((item) => (
                        <a className="main-nav__nav-link" key={item.link} href={item.link}>{item.name}</a>
                    ))}
                </div>
            </div>
        </nav>
    )
}