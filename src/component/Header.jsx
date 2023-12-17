import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({pageTitle}) => {

    return(
        <header>
            <nav className="navbar">
                <ul>
                    <li><img className="logo" src="images/logo.jpg" alt="" /></li>
                    <Link to ="/" ><li className="menu">Accueil</li></Link>
                    <Link to ="/activitessociales" ><li className="menu">Activités Sociales</li></Link>
                    <Link to ="/contact" ><li className="menu">Contact</li></Link>
                    <Link to ="/connexion" ><li className="menu">Connexion</li></Link>
                </ul>
            </nav>
        </header>
        
        
       
    )
}

export default Header;
