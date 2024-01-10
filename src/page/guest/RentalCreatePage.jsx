import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RentalCreatePage = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        if (!token) {
            navigate("/login");
        }
    }, []); 

    const handleRentalCreate = async (event) => {
        event.preventDefault();

        const paymentMethod = event.target.paymentMethod.value;
        const amount = event.target.amount.value;

        const rentalToCreate = {
            paymentMethod: paymentMethod,
            amount: amount,
        };

        const rentalToCreateJson = JSON.stringify(rentalToCreate);

        const token = localStorage.getItem("jwt");

        const rentalToCreateResponse = await fetch('http://localhost:3005/api/rentals', {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                Authorization: "Bearer " + token,
            },
            body: rentalToCreateJson,
        });

        if (rentalToCreateResponse.status === 201) {
            setMessage('La location a bien été créé');
        } else {
            setMessage('Erreur!');
        }
    };

    return (
        <>
            {message && <p>{message}</p>}
            <form onSubmit={handleRentalCreate}>
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

export default RentalCreatePage;