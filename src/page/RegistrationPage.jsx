import "./HomePage.scss";
import Header from "../component/Header";

const RegistrationPage = () => {
    return(
        <>
        <Header />
        <main className="registrationpage">
            <section>
                <form className="registration" action="">
                    <h2>Inscription</h2>
                    <div>
                        <label for="username"></label>
                        <input className="login-input" type="text" id="username" name="username" placeholder="Votre matricule" required/>
                    </div>
                    <div>
                        <label for="username"></label>
                        <input className="login-input" type="text" id="username" name="username" placeholder="jj/mm/aa" required/>
                    </div>
                    <div>
                        <label for="password"></label>
                        <input className="login-input" type="password" id="password" name="password" placeholder="MOT DE PASSE" required/>
                    </div>
                    <input className="button" type="submit" value="Valider" />
                </form>
            </section>
        </main>
        </>
    )
}
 

export default RegistrationPage;