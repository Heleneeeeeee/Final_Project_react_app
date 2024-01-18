import { useState } from "react";
import { UseVerifyIfUserIsLogged } from "../../utils/security-utils";
import "./RequestPage.scss";
import Header from "../../component/guest/Header";

const RequestPage = () => {
    UseVerifyIfUserIsLogged();

    const [message, setMessage] = useState (null);
    const [selection, setSelection] = useState();

    const onChangeHandler = (event) => {
        setSelection(event.target.value);
    }

    const handleHolidaysVoucherCreate = async (event) => {
        event.preventDefault();
        const paymentMethod = event.target.paymentMethod.value;
        const amount = event.target.amount.value;
        const name = event.target.name.value;

        const holidaysVoucherToCreate = {
            paymentMethod: paymentMethod,
            amount: amount,
            name: name,
            checkNumber: "",
        };

        const holidaysVoucherToCreateJson = JSON.stringify(holidaysVoucherToCreate);
      

        const token = localStorage.getItem("jwt");
        const holidaysVoucherToCreateResponse = await fetch('http://localhost:3005/api/holidays', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization : 'Bearer ' + token
            },
            body: holidaysVoucherToCreateJson,
        });

        if ( holidaysVoucherToCreateResponse.status === 201) {
            setMessage ('La demande de Chèques Vacances a bien été créée')
        // Sinon un message d'erreur sera affiché
        } else {
            setMessage ('Erreur!')
        }

    }

    const handleRentalCreate = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const paymentMethod = event.target.paymentMethod.value;
        const amount = event.target.amount.value;

        const rentalToCreate = {
            paymentMethod: paymentMethod,
            amount: amount,
            name: name,
            checkNumber: "",
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
        if ( rentalToCreateResponse.status === 201) {
            setMessage ('La demande de location a bien été créée')
        // Sinon un message d'erreur sera affiché
        } else {
            setMessage ('Erreur!')
        }
    }

    const handleLeisureCreate = async (event) => {
        event.preventDefault();

        const activity = event.target.activity.value;
        const beneficiary = event.target.beneficiary.value;
        const name = event.target.name.value;
        
        const formData = new FormData();
        formData.append("activity", activity);
        formData.append("beneficiary", beneficiary);
        formData.append("name", name);
        formData.append("checkNumber", 0);
        
        formData.append("file", event.target.image.files[0])

        const token = localStorage.getItem("jwt");

        const leisureToCreateResponse = await fetch('http://localhost:3005/api/leisures/withImg', {
            method: "POST",
            headers: {
                Authorization: "Bearer " + token,
            },
            body: formData,
        });
        if ( leisureToCreateResponse.status === 201) {
            setMessage ('La demande de loisirs a bien été créée')
        } else {
            setMessage ('Erreur!')
        }
        
    }

    const handleSubmit = async (event) => {

            switch (selection) {
                case "chequesVacances":
                    handleHolidaysVoucherCreate(event);
                    break;
                case "location":
                    handleRentalCreate(event);
                    break;
                case "loisirs":
                    handleLeisureCreate(event);
                    break;      
            }
    }
    

    return (
        <>
            <Header />
            <div>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <p>Sélectionnez votre demande:</p>
                    <select required name="name" onChange={(event) => onChangeHandler(event)}>
                        <option defaultValue="">--Choisisez une option--</option>
                        <option value="chequesVacances">Chèques Vacances</option>
                        <option value="location">Location</option>
                        <option value="loisirs">Loisirs</option>
                    </select>
                    {selection==="loisirs" ? (
                        <>
                            <div>
                                <label htmlFor="activity">Activité:</label>
                                <input type="text"  name="activity" />
                            </div>
                            <div>
                                <label htmlFor="beneficiary">Bénéficiaire:</label>
                                <input type="text" name="beneficiary" />
                            </div>
                            <div>
                            <label htmlFor="image">Image:</label>
                            <input type="file"  name="image" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <label>Paiement en :
                                    <select id="choix" name="paymentMethod">
                                        <option value="1">1 fois</option>
                                        <option value="2">2 fois</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Montant
                                    <input type="number" name="amount" />
                                </label>
                            </div>
                        </>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default RequestPage;
