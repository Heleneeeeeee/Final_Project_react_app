import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import { Link } from "react-router-dom";

const RentalPage = () => {
    return (
        <>
        <Header />
        <main>
            <section className="section">
                <div className="img-container">
                <img className="socialActivity-img" src="images/rental.png" alt="" />
                </div>
        <h1>Location basse saison</h1>
            <p>Le CSE propose la location de mobil-home ou chalet, en camping, sur les mois d'Avril, Mai, Juin et Septembre.</p>
            
            <h2>Comment bénéficier de la location ?</h2>
                <p>Le salarié commande auprès du CSE un chèque LIBERTEO. Une fois en possession de ce chèque, il pourra rentrer en contact avec l'organisme Vagues Océane auprès duquel il réservera la location de son choix, parmi 40 campings, via le site www.vagues-oceanes.com</p>
                <p>Une fois votre réservation effectuée, vous disposerez de 8 jours pour envoyer votre chèque en paiement de la location et ainsi bloquer la réservation.</p>
                <p>Une fois cela fait, vous recevrez de la part de Vagues Océanes un bon de séjour confirmant votre réservation.</p>
            
            <h2>Comment commander votre Chèque Libertéo ?</h2>
                <p>En remettant le formulaire de demande rempli (formulaire joint au livret ou en libre accès au niveau du bureau du CSE) ainsi que le paiement (chèques ou espèces)</p>
                
            <h2>Comment récupérer votre Chèque Libertéo ?</h2>
                <p>Auprès d'un membre du CSE qui vous remettra, en main propre et contre signature, votre chèque.Si toutefois un salarié ne pouvait récupérer son chèque en main propre, le chéquier lui serait envoyé à son domicile en recommandé avec accusé réception.</p>

            <h2>Quelles sont les modalités de participation du CSE ?</h2>
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

export default RentalPage;