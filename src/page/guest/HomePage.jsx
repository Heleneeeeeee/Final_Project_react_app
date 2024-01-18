import "./HomePage.scss";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
    const [message,setMessage] = useState(null)

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault()

    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log(username, password)

// Je déclare une variable afin de créer un objet contenant username et password
  const loginData = {
    username,
    password,
  };

// Je déclare une autre variable afin de convertir mon objet en JSON
  const loginDataJson= JSON.stringify(loginData)

// Je fais un fetch POST sur mon API login de mon objet JSON
  const loginResponse = await fetch ("http://localhost:3005/api/users/login",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: loginDataJson,
  });
// Je récupère la réponse JSON et je la transforme pour qu'elle soit lue en JS. Si le username est correct, il renvoie le token dans la réponse.
//Sinon il affiche un message d'erreur.
  const loginResponseData = await loginResponse.json();
  const token = loginResponseData.data;

// si le token existe
  if(token) {
// je le stocke fans le local storage
    localStorage.setItem("jwt", token);

    const decodedToken = jwtDecode(token);

    console.log(decodedToken);

    if (decodedToken.role === 1) {
      setMessage("Vous êtes bien connecté en tant qu'admin");
      navigate("/admin");
  } else {
      setMessage("Vous êtes bien connecté");
      navigate("/socialactivities");
  }
  } else {
  setMessage("Erreur lors de la connexion");
  }
};

    return(
        <>
        <Header />
        <main className="loginpage">
            <section>
                <h1 className="loginpage_title">Bienvenue <br /> CSE FOJL </h1>
                <div className="container-img">
                    <img className="loginpage-img" src="assets/images/talkingPeople.png" alt="" />
                </div>
            </section>
            <section> 
                <form onSubmit={handleLogin} className="login" >
                    <h2 className="login-title">connexion au compte</h2>
                    {message && <p>{message}</p> } 
                    <div>
                        <label for="username"></label>
                        <input className="login-input" type="text" id="username" name="username" 
                        placeholder="IDENTIFIANT" required/>
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
        <Footer />
        </>
    )
}

export default LoginPage;