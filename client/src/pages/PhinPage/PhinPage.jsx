import "./PhinPage.scss";
import SubNavigation from "../../components/SubNavigation/SubNavigation";
import Posts from "../../components/Posts/Posts";
import { useLocation } from "react-router-dom";

function PhinPage() {

    const location = useLocation();
    const { pathname } = location;

    return (
        <div>
            <SubNavigation />
            <Posts />
        </div>
    );
}

export default PhinPage;
