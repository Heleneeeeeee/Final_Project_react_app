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
    
    return (
      <>
          <HeaderAdmin />
          
              {requests ? (
                  requests.map((request) => (
                      <article key={request.id}>
                          {request.Rental && (
                              <>
                                  <h2>{request.Rental.name}</h2>
                                  <p>{request.User.firstname}</p>
                                  <p>{request.User.lastname}</p>
                                  <p>{`${request.Rental.amount} euros`}</p>
                                  <p>{`Paiement en ${request.Rental.paymentMethod} fois`}</p>
                                  <p>{`Chèque N° ${request.Rental.checkNumber}`}</p>
                              </>
                          )}
                          {request.Leisure && (
                              <>
                                  <h2>{request.Leisure.name}</h2>
                                  <p>{request.User.firstname}</p>
                                  <p>{request.User.lastname}</p>
                                  <p>{request.Leisure.activity}</p>
                                  <p>{`Chèque N° ${request.Leisure.checkNumber}`}</p>
                              </>
                          )}
                          {request.HolidaysVoucher && (
                              <>
                                  <h2>{request.HolidaysVoucher.name}</h2>
                                  <p>{request.User.firstname}</p>
                                  <p>{request.User.lastname}</p>
                                  <p>{`${request.HolidaysVoucher.amount} euros`}</p>
                                  <p>{`Paiement en ${request.HolidaysVoucher.paymentMethod} fois`}</p>
                                  <p>{`Chèque N° ${request.HolidaysVoucher.checkNumber}`}</p>
                              </>
                          )}
                          <p>{request.status}</p>
                          {decodedToken.data.role !== 2 && (
                              <button onClick={(event) => handleDeleteRequest(event, request.id)}>Supprimer</button>
                          )}
                      </article>
                  ))
              ) : (
                  <p>En attente de chargement</p>
              )}
          
      </>
  );
}

  export default AdminRequestsPage;