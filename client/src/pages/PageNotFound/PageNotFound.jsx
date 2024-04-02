import './PageNotFound.scss';
import SubNavigation from "../../components/SubNavigation/SubNavigation";

function PageNotFound() {
  return (
    <div className="not-found">
        <SubNavigation />
        <p className="not-found__message">
            So sorry! The page you're looking for does not exist. Maybe head back and try again?
        </p>
    </div>
  )
}

export default PageNotFound