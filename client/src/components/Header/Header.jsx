import "./Header.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import homeImage from "../../assets/images/pictures/010.jpg";
import phinImage from "../../assets/images/pictures/001.jpg";
import liriImage from "../../assets/images/pictures/009.jpg";

function Header() {

    // init useLocation hook
    const location = useLocation();
    const pathname = location.pathname;

    // set up values to be conditionally switched
    let heroImage, text;

    // set up switch condition
    switch (pathname) {

        // .. and cases to alternate through
        case "/":
            heroImage = homeImage;
            break;
        case "/phin":
            heroImage = phinImage;
            break;
        case "/liri":
            heroImage = liriImage;
            break;
        default:
            heroImage = phinImage;
    }

    return (
        <div className = "header">
            <img src={heroImage} alt="hero image" className="header__image" />
        </div>
    );
}

export default Header;
