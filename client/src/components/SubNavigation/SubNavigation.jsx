import "./SubNavigation.scss";
import { useLocation, NavLink } from "react-router-dom";


function SubNavigation() {

    // get current path
    const location = useLocation();
    const { pathname } = location;

    // determine the base path
    let basePath, everythingPath = ''; // default for HomePage

    // set basePath based on useLocation-provided pathname
    if (pathname === '/phin') {
        everythingPath = '/phin'
    } else if (pathname.includes('/phin')) {
        basePath = '/phin';
    } else if (pathname === '/liri') {
        everythingPath = '/liri'
    } else if (pathname.includes('/liri')) {
        basePath = '/liri';
    }

    // ensure correct navigation from HomePage
    const resolvePath = (subPath) => {
        return basePath ? `${basePath}/${subPath}` : `/${subPath}`;
    };

    return (
        <div className="subnav">
            <NavLink to={resolvePath('musings')} className='subnav__link'>MUSINGS</NavLink>
            <NavLink to={resolvePath('photos')} className='subnav__link'>PHOTOS</NavLink>
            {
                (!pathname.includes('/phin')) && 
                <NavLink to={resolvePath('music')} className='subnav__link'>MUSIC</NavLink> 
            }
        </div>
    );
}

export default SubNavigation;