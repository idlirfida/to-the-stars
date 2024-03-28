import "./HomePage.scss";
import SubNavigation from "../../components/SubNavigation/SubNavigation";
import Posts from "../../components/Posts/Posts";
import { useLocation } from "react-router-dom";

function HomePage() {

    const location = useLocation();
    const { pathname } = location;

    let apiUrl;

    (pathname === '/')
        ? apiUrl = `http://www.google.com/both/everything`
        : apiUrl = `http://www.google.com/both${pathname}`;

    return (
        <div className="homepage">
            <SubNavigation />
            <Posts responseObject={apiUrl} />
        </div>
    );
}

export default HomePage;
