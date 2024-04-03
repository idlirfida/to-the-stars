import './AuthorsNavigation.scss';
import { useLocation, NavLink } from "react-router-dom";

function AuthorsNavigation() {
  return (
    <div className="authors-nav">
        <NavLink to={'/authors/new'} className='authors-nav__link'>Create</NavLink>
        <NavLink to={'/authors/old'} className='authors-nav__link'>Revise</NavLink>
    </div>
  )
}

export default AuthorsNavigation;