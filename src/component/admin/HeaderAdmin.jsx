import { Link, useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("jwt")

        navigate("/")

    }
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/users">Gérer les Utilisateurs</Link>
                    </li>
                    <li>
                        <Link to="/admin/requests">Gérer les Demandes</Link>
                    </li>
                </ul>
                <button onClick={handleLogout}>Se déconnecter</button>
            </nav>
        </header>
    )
}

export default HeaderAdmin;