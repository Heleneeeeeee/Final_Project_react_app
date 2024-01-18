import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { UseVerifyIfUserIsLogged } from "../../utils/security-utils";

const AdminRequestUpdate = () => {
  UseVerifyIfUserIsLogged();

  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const requestResponse = await fetch(`http://localhost:3000/api/requests/${id}`);
      const requestResponseData = await requestResponse.json();
      setRequest(requestResponseData.data);
    };

    fetchData();
  }, [id]);

  const handleUpdateRequest = async (event) => {
    event.preventDefault();

    const updateData = {
      checkNumber: event.target.checkNumber.value,
      status: event.target.status ? event.target.status.value : null,
    };

    const updateDataJson = JSON.stringify(updateData);
    const token = localStorage.getItem("jwt");

    let updateResponse;
    switch (request.type) {
      case "chequesVacances":
        updateResponse = await fetch(`http://localhost:3005/api/holidays/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: updateDataJson,
        });
        break;
      case "location":
        updateResponse = await fetch(`http://localhost:3005/api/rentals/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: updateDataJson,
        });
        break;
      case "loisirs":
        updateResponse = await fetch(`http://localhost:3005/api/leisures/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: updateDataJson,
        });
        break;
      default:
        // Gérer un cas par défaut ou une erreur
        break;
    }

    if (updateResponse && updateResponse.status === 200) {
      setMessage("La demande a bien été modifiée");
    } else {
      setMessage("Erreur !");
    }
  };

  return (
    <div>
      <HeaderAdmin />
      {message && <p>{message}</p>}
      {request && (
        <form onSubmit={handleUpdateRequest}>
          <div>
            <label>
              Numéro de chèque
              <input type="number" name="checkNumber" defaultValue={0} />
            </label>
          </div>
          {request.type !== "Request" && (
            <div>
              <label>
                Statut de la demande
                <input type="text" name="status" defaultValue={"en cours"} />
              </label>
            </div>
          )}
          <input type="submit" />
        </form>
      )}
    </div>
  );
};

export default AdminRequestUpdate;
