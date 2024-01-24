import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../component/guest/Header";
import { UseVerifyIfUserIsLogged } from "../../utils/security-utils";

const HolidaysVoucherUpdatePage = () => {
  UseVerifyIfUserIsLogged();

  const {id } = useParams();
  const [message, setMessage] = useState(null);
  const [holidaysVoucher, setHolidaysVoucher] = useState(null);

  useEffect(() => {
    (async () => {
      const holidaysVoucherResponse = await fetch(`http://localhost:3005/api/holidays/${id}`);
      const holidaysVoucherResponseData = await holidaysVoucherResponse.json();
      setHolidaysVoucher(holidaysVoucherResponseData.data);
    })();
  }, [id]);

 

  const handleUpdateHolidaysVoucher = async (event) => {
    event.preventDefault();


    const paymentMethod = event.target.paymentMethod.value;
    const amount = event.target.amount.value;

    const holidaysVoucherUpdateData = {
      
      paymentMethod: paymentMethod,
      amount: amount,
    };

    const holidaysVoucherUpdateDataJson = JSON.stringify(holidaysVoucherUpdateData);

    const token = localStorage.getItem("jwt");

    
    const updateHolidaysVoucherResponse = await fetch(
      `http://localhost:3005/api/holidays/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: holidaysVoucherUpdateDataJson,
      });

      if (updateHolidaysVoucherResponse.status === 201) {
        setMessage("Mise à jour OK");
      } else {
        setMessage("Erreur");
      }
  };

  return (
    <>
      <Header />
      <div>
        {message && <p>{message}</p>}
        
        {holidaysVoucher && (
          <form onSubmit={handleUpdateHolidaysVoucher}>
            <div>
              <label>
                Mode de paiement
                <input type="text" name="paymentMethod" defaultValue={holidaysVoucher.paymentMethod} />
              </label>
            </div>
            <div>
              <label>
                Montant
                <input type="number" name="amount" defaultValue={holidaysVoucher.amount} />
              </label>
            </div>
            <input type="submit" />
          </form>
        )}
      </div>
    </>
  );
}

export default HolidaysVoucherUpdatePage;
