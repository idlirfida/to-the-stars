import './Footer.scss';
import AuthorsPage from '../../pages/AuthorsPage/AuthorsPage';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        <div className="footer__author">
            <Link to='/authors' className="footer__link">Authors</Link>
        </div>
        <div className="footer__contact">
            <a href="mailto:juniperstrength@gmail.com" className="footer__link">@Phin</a>
            <a href="mailto:idlirfida@gmail.com" className="footer__link">@Liri</a>
        </div>
        <div className="footer__copyright">
            &copy; 2024
        </div>
    </div>
  )
}

export default Footer;