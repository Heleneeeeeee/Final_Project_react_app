import { Link } from "react-router-dom";
import Footer from "../../component/guest/Footer";
import Header from "../../component/guest/Header";

const LeisurePage = () => {
    return(
        <>
    <Header />
    <main>
    <section className="section">
            <div className="img-container">
            <img className="socialActivity-img" src="assets/images/sport.png" alt="" />
            </div>
            <h1>Loisirs famille</h1>
            <p>Le CSE participe aux loisirs du salarié et de sa famille pour un forfait maximal de 100 euros par an et par famille OU 150 euros pour un séjour au parc d'attraction.</p>
            <h2>Quels sont les Loisirs sur lequel le CSE participe ?</h2>
            <ul>
                <li>Inscription à une activité (adulte ou enfant), artistique, culturelle, sportive…</li>
                <li>Places de spectacle</li>
                <li>Séjours de vacances enfant (colonie, séjours linguistiques...)</li>
                <li>Séjours ou entrées dans un parc d'attractions</li>	
            </ul>
            <h2>Comment demander une participation ?</h2>
            <p>En remettant le formulaire de demande rempli (formulaire joint au livret ou en libre accès au niveau du bureau du CSE), accompagné des pièces justificatives.
                Les demandes de remboursement doivent être effectuées avant le 30 Novembre pour l'année en cours.</p>
            <p>Documents à fournir au CSE afin de bénéficier d'un remboursement (participation aux loisirs) :</p>
            <ul>
                <li>Formulaire de demande de participation</li>
                <li>Facture acquittée au nom du salarié</li>
            </ul>
            <Link to={`/leisurecreatepage`}><button>Demander un remboursement Loisirs</button></Link>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default LeisurePage;