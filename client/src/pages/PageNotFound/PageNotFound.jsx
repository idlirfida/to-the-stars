import './PageNotFound.scss';
import SubNavigation from "../../components/SubNavigation/SubNavigation";

function PageNotFound() {
  return (
    <div className="not-found">
        <SubNavigation />
        <h3 className="not-found__message">
            So sorry! 
        </h3>
        <h3 className="not-found__sub-message">
            There's no such page.
        </h3>
        <h3 className="not-found__sub-message">
            Maybe head back and try again?
        </h3>
    </div>
  )
}

export default PageNotFound;