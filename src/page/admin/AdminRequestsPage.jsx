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
        setRequests(requestsResponseData.data);
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
                                  <td>{request.User.firstname}</td>
                                  <td>{request.User.lastname}</td>
                                  <td>{request.status}</td>
                                  <td>
                                    {request.Rental && request.Rental.name ? request.Rental.name : ""}
                                    {request.HolidaysVoucher && request.HolidaysVoucher.name ? request.HolidaysVoucher.name : ""}
                                    {request.Leisure && request.Leisure.name ? request.Leisure.name : ""}
                                  </td>
                                  <td>
                                    {request.Rental && request.Rental.amount ? request.Rental.amount : ""}
                                    {request.HolidaysVoucher && request.HolidaysVoucher.amount ? request.HolidaysVoucher.amount : ""}
                                    {request.Leisure && request.Leisure.amount ? request.Leisure.amount : ""}
                                  </td>
                                  <td>
                                    {request.Rental && request.Rental.paymentMethod ? `${request.Rental.paymentMethod} fois` : ""} 
                                    {request.HolidaysVoucher && request.HolidaysVoucher.paymentMethod ? `${request.HolidaysVoucher.paymentMethod} fois` : ""}
                                    {request.Leisure && request.Leisure.paymentMethod ? `${request.Leisure.paymentMethod} fois` : ""}
                                  </td>
                                  <td>
                                    {request.Rental && request.Rental.checkNumber ? request.Rental.checkNumber : ""}
                                    {request.HolidaysVoucher && request.HolidaysVoucher.checkNumber ? request.HolidaysVoucher.checkNumber : ""}
                                    {request.Leisure && request.Leisure.checkNumber ? request.Leisure.checkNumber : ""}
                                  </td>
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