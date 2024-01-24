import "./RegistrationPage.scss";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import { useState } from "react";

const RegistrationPage = () => {
    const [message, setMessage] = useState (null)
    // Je déclare une fonction asynchrone qui est liée au formulaire
    const handleRegistration = async (event) => {

    // Le "event.preventDefault()" permet de ne pas recharger la page par défaut
        event.preventDefault();

    // Je déclare les variables des input de mon formulaire pour les faire matcher avec le modèle de mes coworkings du back
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const username = event.target.username.value;
    const matricule = event.target.matricule.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  

    const userRegistration = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        matricule: matricule,
        email: email,
        password: password,
        RoleId: 2,
    };

    const userRegistrationJson = JSON.stringify(userRegistration);
        
    // Je récupère mon token dans le local storage
    const token = localStorage.getItem("jwt")

    // J'envoie une requête avec la méthode POST pour créer un coworking dans laquelle je lui fais passer dans le headers le format JSON, le token et le body en JSON
    const userRegistrationResponse = await fetch ('http://localhost:3005/api/users',{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
            },
            body: userRegistrationJson,
        });
        // Si le statut de la réponse est égal à 201, un message de succès sera affiché
        if ( userRegistrationResponse.status === 201) {
            setMessage (`L'utilisateur a bien été ajouté`)
        // Sinon un message d'erreur sera affiché
        } else {
            setMessage ('Erreur!')
        }

    }
    return(
        <>
        <Header />
        <>{message && <p>{message}</p>}</>
        <main className="registrationpage">
                <form className="registration" onSubmit={handleRegistration} >
                    <h2>Inscription</h2>
                    <div className="row">
                        <div className="col">
                            <label for="firstname"></label>
                            <input className="registration-input" type="text" name="firstname" placeholder="Prénom" required />
                        </div>
                        <div className="col">
                            <label for="lastname"></label>
                            <input className="registration-input" type="text" name="lastname" placeholder="Nom" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="username"></label>
                            <input className="registration-input" type="text" name="username" placeholder="Identifiant" required />
                        </div>
                        <div className="col">
                            <label for="matricule"></label>
                            <input className="registration-input" type="text"  name="matricule" placeholder="Matricule" required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label for="email"></label>  
                            <input className="registration-input" type="email" name="email"  placeholder= "Email" /> 
                        </div>
                        <div className="col">
                            <label for="password"></label>
                            <input className="registration-input" type="password"  name="password" placeholder="Mot de passe" required />
                        </div>
                    </div>
                    <input className="button2" type="submit" value="Valider" />
                </form>
            </main>
            <Footer />
        </>
    );
};
 

export default RegistrationPage;