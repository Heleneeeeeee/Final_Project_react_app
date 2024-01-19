import { Link, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import "./Header.scss"

const Header = () => {
    const location = useLocation();

    const token = localStorage.getItem("jwt");
    // const decodedToken = jwtDecode(token)
    const decodedToken = token ? jwtDecode(token) : null;

    const isLoginPage = location.pathname === "/";
    console.log(decodedToken)
    return(
        <header>
            <nav className="navbar">
                <ul className="navbar_ul">
                    <img className="logo" src="assets/images/logo.jpg" alt="" />
                    <li>{isLoginPage ? <span className="menu-link">Accueil</span> : <Link className="menu-link" to="/">Accueil</Link>}</li>
                    <li>{isLoginPage ? <span className="menu-link">Activités Sociales</span> : <Link className="menu-link" to="/socialactivities">Activités Sociales</Link>}</li>
                    <li>{isLoginPage ? <span className="menu-link">Contact</span> : <Link className="menu-link" to="/contact">Contact</Link>}</li>
                    <li>{isLoginPage ? <span className="menu-link"></span> : <Link className="menu-link" to={`/users/${decodedToken.id}`}>Mon compte</Link>}</li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;