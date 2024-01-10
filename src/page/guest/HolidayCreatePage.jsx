import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HolidayCreatePage = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        if (!token) {
            navigate("/login");
        }
    }, []); 

    const handleHolidaysVoucherCreate = async (event) => {
        event.preventDefault();

        const paymentMethod = event.target.paymentMethod.value;
        const amount = event.target.amount.value;

        const holidaysVoucherToCreate = {
            paymentMethod: paymentMethod,
            amount: amount,
        };

        const holidaysVoucherToCreateJson = JSON.stringify(holidaysVoucherToCreate);

        const token = localStorage.getItem("jwt");

        const holidaysVoucherToCreateResponse = await fetch('http://localhost:3005/api/holidays', {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                Authorization: "Bearer " + token,
            },
            body: holidaysVoucherToCreateJson,
        });

        if (holidaysVoucherToCreateResponse.status === 201) {
            setMessage('Le Chèques vacances a bien été créé');
        } else {
            setMessage('Erreur!');
        }
    };

    return (
        <>
            {message && <p>{message}</p>}
            <form onSubmit={handleHolidaysVoucherCreate}>
                <div>
                    <label>Paiement en :</label>
                    <select id="choix" name="paymentMethod">
                        <option value="1">1 fois</option>
                        <option value="2">2 fois</option>
                    </select>
                    <label>
                        Montant
                        <input type="number" name="amount" />
                    </label>
                </div>
                <input type="submit" />
            </form>
        </>
    );
};

export default HolidayCreatePage;