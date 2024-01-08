import HeaderAdmin from "../../component/admin/HeaderAdmin";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AdminRequestsPage = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      navigate("/login");
    }
  });

    const [requests, setRequests] = useState(null);
    const token = localStorage.getItem("jwt");
    const decodedToken = jwtDecode(token);
  
    useEffect(() => {
      (async () => {
        const requestsResponse = await fetch("http://localhost:3005/api/requests");
        const requestsResponseData = await requestsResponse.json();
        setRequests(requestsResponseData);
      })();
    }, []);
  
    const handleDeleteRequest = async (event, RequestId) => {
      await fetch("http://localhost:3005/api/requests/" + RequestId, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
  
      const requestsResponse = await fetch("http://localhost:3005/api/requests");
        const requestsResponseData = await requestsResponse.json();
        setRequests(requestsResponseData);
    };
    console.log(requests)
    return (
        <>
            <HeaderAdmin/>
            <h2>Liste des demandes</h2>
              {requests ? (
                  <table>
                      <thead>
                          <tr>
                              <th>Nom</th>
                              <th>Prénom</th>
                              <th>Demande</th>
                              <th>Activités Sociales</th>
                              <th>Montant</th>
                              <th>Mode de Paiement</th>
                              <th>Numéro de Chèque</th>
                              {decodedToken.data.role !== 3 && <th>Action</th>}
                          </tr>
                      </thead>
                      <tbody>
                          {requests.map((request) => (
                              <tr key={request.id}>
                                  <td>{request.user}</td>
                                  <td>{request.status}</td>
                                  <td>{request.rental ? request.rental.name : "N/A"}</td>
                                  <td>{request.holidaysVouchers ? request.holidaysVouchers.name : "N/A"}</td>
                                  <td>{request.leisure ? request.leisure.name : "N/A"}</td>
                                  {decodedToken.data.role !== 2 && (
                                      <td>
                                          <button onClick={(event) => handleDeleteRequest(event, request.id)}>Supprimer</button>
                                      </td>
                                  )}
                              </tr>
                          ))}
                      </tbody>
                  </table>
              ) : (
                  <p>En cours de chargement</p>
              )}
        </>
    ) 
}

export default AdminRequestsPage;