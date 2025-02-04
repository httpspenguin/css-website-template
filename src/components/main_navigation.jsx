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
        <header>
            <nav className="main-nav">
                <div className="main-nav__content flex justify-between items-center">
                    <a href="/">
                        <img src={siteLogo} className="main-nav__site-logo w-24" alt="Portfolio Site logo"/>
                    </a>

                    <div>
                        {navLinks.map((item) => (
                            <a className="main-nav__nav-link ml-6 text-lg" key={item.link} href={item.link}>{item.name}</a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}