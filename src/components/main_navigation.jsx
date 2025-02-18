import siteLogo from '../assets/react.svg'
import '../assets/styles/main_nav.css';

export default function Navigation() {
    const navLinks = [
        { name: 'Education', link: '/education' },
        { name: 'Technical Skills', link: '/technical-skills' },
        { name: 'Experience', link: '/experience' },
        { name: 'Achievements', link: '/achievements' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'About me', link: '/about-me' },
    ];

    const handleToggle = () => {
        const mobileNav = document.querySelector('.main-nav__menu-mobile');
        const body = document.querySelector('body');

        mobileNav.classList.toggle('show');

        if (mobileNav.classList.contains('show')) {
            mobileNav.style.transform = "translateX(0)";
            body.style.overflow = 'hidden';

        } else {
            mobileNav.style.transform = "translateX(100%)";
            body.style.overflow = 'scroll';
        }
    }

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

                <button className="main-nav__toggle" onClick={handleToggle}>
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="main-nav__menu-mobile">
                    {navLinks.map((item) => (
                        <a className="main-nav__nav-link" key={item.link} href={item.link}>{item.name}</a>
                    ))}
                </div>
            </div>
        </nav>
    )
}