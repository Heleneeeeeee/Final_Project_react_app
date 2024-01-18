import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import "./SocialActivitiesPage.scss"
import { Link } from "react-router-dom";

const SocialActivities = () => {
    return (
        <>
        <Header />
        <main className="social_activities_main">
            <section className="social_activities_section">
            <div className="img-container">
            <img className="socialActivity-img" src="assets/images/socialactivities.png" alt="" />
                <h1>Les activités sociales</h1>
                <h2>Conditions nécessaires pour bénéficier des avantages du CSE</h2>
                <ul>
                    <li>Être salarié du Foyer Occupationnel Jenny Lepreux</li>
                    <ul>
                        <li>En CDI et avoir une ancienneté de 3 mois au sein de l'établissement</li>
                        <li>En CDD et avoir cumulé 300 heures de travail au cours des 4 derniers mois au sein de l'établissement</li>
                    </ul>
                    <li>Ne pas être en arrêt maladie ou de travail de plus de 6 mois continu ou discontinu</li>
                    <li>Ne pas être en congé parental</li>
                    <li>Ne pas être en congé sabbatique</li>
                </ul>
                <h2>Les activités sociales proposées</h2>
                <ul>
                    <li><Link className="menu-link" to="/holiday">Chèques Vacances</Link></li>
                    <li><Link className="menu-link" to="/leisure">Loisirs famille</Link></li>
                    <li><Link className="menu-link" to="/rental">Location basse saison</Link></li>
                </ul>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default SocialActivities;