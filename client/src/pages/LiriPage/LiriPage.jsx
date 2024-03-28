import "./LiriPage.scss";
import SubNavigation from "../../components/SubNavigation/SubNavigation";
import Posts from "../../components/Posts/Posts";
import { useLocation } from "react-router-dom";

function LiriPage() {

    const location = useLocation();
    const { pathname } = location;

    return (
        <div>
            <SubNavigation />
            <Posts />
        </div>
    );
}

export default LiriPage;
