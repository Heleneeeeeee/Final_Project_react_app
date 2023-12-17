import "./HomePage.scss";
import Header from "../component/Header";
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <>
        <Header />
        <main className="homepage">
            <section>
                <h1>Bienvenue <br /> CSE FOJL </h1>
                <div className="container-img">
                    <img className="homepage-img" src="images/talkingPeople.png" alt="" />
                </div>
            </section>
            <section>
                <form className="login" action="">
                    <h2>connexion au compte</h2>
                    <div>
                        <label for="username"></label>
                        <input className="login-input" type="text" id="username" name="username" 
                        placeholder="EMAIL" required/>
                    </div>
                    <div>
                        <label for="password"></label>
                        <input className="login-input" type="password" id="password" name="password" placeholder="MOT DE PASSE" required/>
                    </div>
                    <input className="button" type="submit" value="connexion" />
                    <Link to ="/Inscription"><p className="link-connexion">Première Connexion?</p></Link>
                </form>
            </section>
        </main>
        </>
    )
}

export default HomePage;