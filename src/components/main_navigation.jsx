import siteLogo from '../assets/react.svg'

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
            <nav>
                <div className="flex justify-between items-center">
                    <a href="/">
                        <img src={siteLogo} className="site-logo w-24" alt="Portfolio Site logo"/>
                    </a>

                    <div>
                        {navLinks.map((item) => (
                            <a className="ml-6 text-lg" key={item.link} href={item.link}>{item.name}</a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}