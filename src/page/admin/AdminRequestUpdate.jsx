import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { UseVerifyIfUserIsLogged } from "../../utils/security-utils";



const AdminRequestUpdate = () => {
  UseVerifyIfUserIsLogged();
  const { requestId } = useParams();
  const [newStatus, setNewStatus] = useState('');
  const [message, setMessage] = useState('');
  const [request, setRequest] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const requestResponse = await fetch(`http://localhost:3000/api/requests/${requestId}`);
  //       if (!requestResponse.ok) {
  //         throw new Error(`Erreur HTTP ${requestResponse.status}`);
  //       }
  //       const requestResponseData = await requestResponse.json();
  //       setRequest(requestResponseData);
  //       console.log(requestResponseData);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des données :", error.message);
  //     }
  //   };
  //   fetchData();
  // }, [requestId]);

  const handleStatusChange = (event) => {
    setNewStatus(event.target.value);
  };

  const handleUpdateRequest = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/requests/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
        
      });
      console.log(newStatus)

      if (response.ok) {
        const responseData = await response.json();
        setMessage('La demande a été mise à jour avec succès.');
        setRequest(responseData.data)
      } else {
        setMessage('Erreur lors de la mise à jour de la demande.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la demande :', error.message);
      setMessage('Erreur lors de la mise à jour de la demande.');
    
    }
  };

  return (
    <>
    <HeaderAdmin />
    <div>
      {/* Affichez les détails de la demande actuelle */}
      <p>{message}</p>
      <label>Nouveau statut :</label>
<select value={newStatus} onChange={handleStatusChange}>
  <option value="En attente">En attente</option>
  <option value="Approuvé">Approuvé</option>
  <option value="Rejeté">Rejeté</option>
</select>
<button onClick={handleUpdateRequest}>Mettre à jour la demande</button>
    </div>
    </>
  );
};

export default AdminRequestUpdate;


