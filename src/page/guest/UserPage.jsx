import { useEffect, useState } from "react";
import Header from "../../component/guest/Header";
import { useParams } from "react-router-dom";
import './UserPage.scss';
import Footer from "../../component/guest/Footer";

const UserPage = () => {
  const { userId } = useParams();
  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    async function fetchData() {
      try {
        const requestsResponse = await fetch(`http://localhost:3005/api/requests/users/${userId}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        const requestsResponseData = await requestsResponse.json();
        setRequests(requestsResponseData);
      } catch (error) {
        console.error("Erreur lors de la récupération des demandes :", error.message);
      }
    }
    fetchData();
  }, [userId, token]);

  const handleDeleteRequest = async (event, requestId) => {
    event.preventDefault();

    try {
      await fetch(`http://localhost:3005/api/requests/${requestId}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });

      const requestsResponse = await fetch(`http://localhost:3005/api/requests/users/${userId}`);
      const requestsResponseData = await requestsResponse.json();
      setRequests(requestsResponseData);

      if (requestsResponseData===201)setMessage("Demande supprimée avec succès");
    } catch (error) {
      setMessage("Erreur lors de la suppression de la demande");
    }
  };

  return (
    <>
      <Header />
      <main className="userpage">
        <section className="section">
          <h1>Mes demandes:</h1>
          {message && <p>{message}</p>}
          {requests && requests.length > 0 ? (
            requests.map((request) => (
                <article key={request.id}>
                <>
                    {request.HolidaysVoucherId && (
                    <>
                        <h2>{request.HolidaysVoucher.name}</h2>
                        <p>{`${request.HolidaysVoucher.amount} euros`}</p>
                        <p>{`Paiement en ${request.HolidaysVoucher.paymentMethod} fois`}</p>
                    </>
                    )}
                    {request.RentalId && (
                    <>
                        <h2>{request.Rental.name}</h2>
                        <p>{`${request.Rental.amount} euros`}</p>
                        <p>{`Paiement en ${request.Rental.paymentMethod} fois`}</p>
                    </>
                    )}
                    {request.LeisureId && (
                    <>
                        <h2>{request.Leisure.activity}</h2>
                        <p>{`Bénéficiaire: ${request.Leisure.beneficiary}`}</p>
                        <p>{`Image: ${request.Leisure.image}`}</p>
                    </>
                    )}
                </>
                <button onClick={(event) => handleDeleteRequest(event, request.id)}>Supprimer</button>
              </article>
            ))
          ) : (
            <p>Aucune demande à afficher</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};
export default UserPage;
