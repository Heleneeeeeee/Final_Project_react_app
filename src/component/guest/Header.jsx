import { Link, useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import "./Header.scss"

const Header = () => {
    const location = useLocation();

    const token = localStorage.getItem("jwt");
    // const decodedToken = jwtDecode(token)
    const decodedToken = token ? jwtDecode(token) : null;

    const isLoginPage = location.pathname === "/";

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("jwt")

        navigate("/")

    }

    const handleDisplayDiv = () => {
        const div = document.getElementsByClassName('div-profile-info')[0]; // Assuming you want the first element
        const divDisplay = window.getComputedStyle(div).display;
      
        if (divDisplay === 'none') {
          div.style.display = 'flex';
        } else {
          div.style.display = 'none';
        }
      };
      
    return(
        <header>
            <nav className="navbar">
            <div><img className="logo" src="assets/images/logo.jpg" alt="" /></div>
                <ul className="navbar_ul">
                    
                    <li>{isLoginPage ? <span className="menu-link">Accueil</span> : <Link className="menu-link" to="/">Accueil</Link>}</li>
                    <li>{isLoginPage ? <span className="menu-link">Activités Sociales</span> : <Link className="menu-link" to="/socialactivities">Activités Sociales</Link>}</li>
                    <li>{isLoginPage ? <span className="menu-link">Contact</span> : <Link className="menu-link" to="/contact">Contact</Link>}</li>
                    {/*  */}

                    <li>{!isLoginPage && decodedToken ? <div className='menu-link' onChange={handleDisplayDiv}>mon compte </div> : null}
                    
                    <div className='div-profile-info'>
                        <div><Link to={`/users/${decodedToken.id}`} className='div-display'>Mon compte</Link></div>
                        <div><p className='div-display'>Link</p></div>
                    </div>
                    </li>




                    <li>{!isLoginPage && decodedToken && <button className='logout_btn' onClick={handleLogout}>Se déconnecter</button>}</li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;