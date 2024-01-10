import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LeisureCreatePage = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        if (!token) {
            navigate("/login");
        }
    }, []); 

    const handleLeisureCreate = async (event) => {
        event.preventDefault();

        const activity = event.target.activity.value;
        const beneficiary = event.target.beneficiary.value;
        
        const formData = new FormData();
        formData.append("activity", activity);
        formData.append("beneficiary", beneficiary);
        
        formData.append("file", event.target.image.files[0])

        const token = localStorage.getItem("jwt");

        const leisureToCreateResponse = await fetch('http://localhost:3005/api/leisures/withImg', {
            method: "POST",
            headers: {
                // "Content-Type": "application/json", 
                Authorization: "Bearer " + token,
            },
            body: formData,
            
        });
        console.log(formData)
        if (leisureToCreateResponse.status === 201) {
            setMessage('La location a bien été créé');
        } else {
            setMessage('Erreur!');
        }
    };

    return (
        <>
            {message && <p>{message}</p>}
            <form onSubmit={handleLeisureCreate}>
                <div>
                    <label>
                        Activité
                        <input type="text" name="activity" />
                    </label>
                </div>
                <div>
                    <label>
                        Beneficiaire
                        <input type="text" name="beneficiary" />
                    </label>
                </div>
                <div>
                    <label>
                        Image
                        <input type="file" name="image" />
                    </label>
                </div>
                <input type="submit" />
            </form>
        </>
    );
};

export default LeisureCreatePage;