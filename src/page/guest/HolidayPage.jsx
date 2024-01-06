import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import { Link } from "react-router-dom";
import "../guest/HolidayPage.scss"


const HolidayPage = () => {
    return(
    <>
    <Header />
    <main>
        <section className="section">
            <div className="img-container">
            <img className="socialActivity-img" src="images/holiday.png" alt="" />
            </div>
            <h1>Chèques Vacances </h1>
                <p>Le CSE propose des Chèques Vacances pour un montant maximum de 300 euros annuel, avec une participation variant en fonction de vos salaires bruts (cf tableau d'attribution des aides), en coupure de 10, 20 et 25 euros.</p>
            <h2>Comment utiliser les Chèques Vacances ?</h2>
                <p>Vous pourrez les utiliser dans les établissements agréés : </p>
                    <p>Liste des établissements sur le site <a className="internet-link" href="https://leguide.ancv.com/" target="_blank" rel="noopener noreferrer">https://leguide.ancv.com/.</a></p>
                    <p>Ils sont valables 2 ans et non remboursables.
                    Passé le délai de validité, vous disposez de 3 mois pour les échanger contre de nouveaux, en passant par le site www.ancv.fr. Une somme forfaitaire de 10 euros est alors prélevée du montant à échanger.
                </p>
            <h2>Comment commander vos Chèques Vacances ?</h2>
                <p>En remettant le formulaire de demande rempli (formulaire joint au livret ou en libre accès au niveau du bureau du CSE) ainsi que le paiement (chèques ou espèces)
                Le CSE fera 2 commandes groupées par an :
                </p>
                <ul>
                    <li>Une en Mai, les commandes devront être faites avant le 31 Mars</li>
                    <li>Une en Novembre, les commandes devront être faites avant le 30 Septembre</li>
                </ul>
            <h2>Comment récupérer vos Chèques Vacances ?</h2>
                <p>Les chèques vacances sont remis aux salariés par les membres du CSE en main propre et contre signature après paiement.
                Si toutefois un salarié ne pouvait pas les récupérer en main propre, le chéquier lui serait envoyé à son domicile en recommandé avec accusé réception</p>

                <p>Les modalités de participation ont été établies en réunion du CSE sur délibération de l'ensemble des membres. Le calcul s'effectue en fonction du montant du salaire du salarié, selon des tranches prédéfinies comme suit :
                    <ul>
                        <li>Tranche A : Moins de 1800 euros brut de revenu par mois</li>
                        <li>Tranche B : Entre 1801 et 2700 euros brut de revenu par mois</li>
                        <li>Tranche C : Plus de 2701 euros brut de revenu par mois</li>
                    </ul>
                </p>
            <h2>Tableau de participation du Conseil Social et Économique</h2>
                <div >
                    <table className="table">
                    <tr className="">
                        <th>Revenu brut par mois</th>
                        <th>Participation du CSE </th>
                        <th>Participation du salarié</th>
                    </tr>
                    <tr>
                        <td className="line-1">Tranche A, moins de 1800 € brut</td>
                        <td className="line-1">75 %</td>
                        <td className="line-1">25 %</td>
                        <Link to={`/holidaycreatepage`}>
                        <button>Envoyer une demande</button>
                        </Link>
                    </tr>
                    <tr>
                        <td className="line-2">Tranche B, de 1801 € à 2700 € brut</td>
                        <td className="line-2">50%</td>
                        <td className="line-2">50%</td>
                        <Link to={`/holidaycreatepage`}>
                        <button>Envoyer une demande</button>
                        </Link>
                    </tr>
                    <tr>
                        <td className="line-3">Tranche C, plus de 2701 € brut</td>
                        <td className="line-3">25%</td>
                        <td className="line-3">75%</td>
                        <Link to={`/holidaycreatepage`}>
                        <button>Envoyer une demande</button>
                        </Link>
                    </tr>
                </table>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default HolidayPage;