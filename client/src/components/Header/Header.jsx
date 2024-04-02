import "./Header.scss";
import { useLocation, NavLink } from "react-router-dom";
import homeImage from "../../assets/images/pictures/010.jpg";
import phinImage from "../../assets/images/pictures/001.jpg";
import liriImage from "../../assets/images/pictures/004.jpg";

function Header() {
    // init useLocation hook
    const location = useLocation();
    const { pathname } = location;

    let heroImage;

    // dynamically set heroImage based on the pathname
    if (pathname.startsWith('/phin')) {
        heroImage = phinImage;
    } else if (pathname.startsWith('/liri')) {
        heroImage = liriImage;
    } else {
        heroImage = homeImage; // default to homeImage for the root and any other unspecified routes
    }

    // change header background image with inline style declaration
    const headerBackground = {
        backgroundImage: `url(${heroImage})`,
    };

    return (
        <div className="header" style={headerBackground}>
            <div className="header__nav">
                <NavLink 
                    to="/phin" 
                    className={pathname.startsWith('/phin') ? "header__link active" : "header__link"}
                >
                    PHIN
                </NavLink>
                <NavLink 
                    to="/" 
                    className={pathname === '/' || ['/musings', '/photos', '/music'].includes(pathname) ? "header__link active" : "header__link"}
                >
                    /
                </NavLink>
                <NavLink 
                    to="/liri" 
                    className={pathname.startsWith('/liri') ? "header__link active" : "header__link"}
                >
                    LIRI
                </NavLink>
            </div>
            <h1 className="header__title">TO THE STARS</h1>
        </div>
    );
}

export default Header;