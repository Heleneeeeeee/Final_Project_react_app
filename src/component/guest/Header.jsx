import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({pageTitle}) => {

    return(
        <header>
            <nav className="navbar">
                <ul className="navbar_ul">
                    <li><img className="logo" src="images/logo.jpg" alt="" /></li>
                    <li><Link className="menu-link" to="/">Accueil</Link></li>
                    <li className="menu-with-submenu"><Link className="menu-link" to="/activitessociales">Activités Sociales</Link>
                        <ul className="sub-menu">
                            <li><Link className="menu-link" to="/holiday">Chèques Vacances</Link></li>
                            <li><Link className="menu-link"  to="/leisure">Loisirs</Link></li>
                            <li><Link className="menu-link"  to="/rental">Location</Link></li>
                        </ul>
                    </li>
                    <li><Link className="menu-link" to ="/contact" >Contact</Link></li>
                    <li><Link className="menu-link" to ="/connexion" >Connexion</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
