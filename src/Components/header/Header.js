import './header.scss';

const Header = () => {

    return (
        <header className="header">
            <h1 className="header__title">
                <a href="#">
                    <span className="main-color">Marvel</span> information portal
                </a>
            </h1>
            <nav className="header__menu">
                <ul>
                    <li>Characters</li>
                    /
                    <li>Comics</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
