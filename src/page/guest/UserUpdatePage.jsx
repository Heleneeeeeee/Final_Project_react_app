import { useEffect, useState } from "react";
import Header from "../../component/guest/Header";
import Footer from '../../component/guest/Footer';
import { UseVerifyIfUserIsLogged } from "../../utils/security-utils";
import { useParams } from "react-router-dom";


    const UserUpdatePage = () => {
        UseVerifyIfUserIsLogged();

        const { userId } = useParams();
        const [message, setMessage] = useState(null);
        const [user, setUser] = useState(null);
        const token = localStorage.getItem("jwt");
      
        useEffect(() => {
          const userFetch = async () => {
            if (token) {
              try {
                const userResponse = await fetch(`http://localhost:3005/api/users/${userId}`);
                const userResponseData = await userResponse.json();
      
                if (userResponseData.data) {
                  setUser(userResponseData.data);
                } else {
                  console.error("Aucune donnée utilisateur récupérée");
                }
              } catch (error) {
                console.error("Erreur lors de la récupération des données :", error.message);
              }
            }
          };
      
          userFetch();
        }, [token, userId]);
      
    const handleUpdateUser = async (event) => {
      event.preventDefault();
      
      const email = event.target.email.value;
      const username = event.target.username.value;
  
      const userUpdate = {
        email: email,
        username: username
      };
      
      const userUpdateDataJson = JSON.stringify(userUpdate);
  
      try {
        const userUpdateResponse = await fetch(`http://localhost:3005/api/users/${userId}`, {
          method: "PUT",
          headers: {
            Authorization: "Bearer "+ token,
            "Content-Type": "application/json",
          },
          body: userUpdateDataJson,
        });
  
        if (userUpdateResponse.status === 201) {
          setMessage("L'utilisateur a bien été mis à jour");
        } else {
          setMessage("Erreur! Impossible de mettre l'utilisateur à jour");
        }
      } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur :", error.message);
      }
    };

return (
    <>
      <Header />
      <div>
        {message && <p>{message}</p>}
        {user && (
          <form onSubmit={handleUpdateUser}>
            <h1>Modification des informations :</h1>
            <div>
              <label>
              <div>Email :</div>
                <input type="email" name="email" placeholder={user.email} />
              </label>
            </div>
            <div>
              <label>
                <div>Username :</div>
                <input type="text" name="username" placeholder={user.username} />
              </label>
            </div>
            <input type="submit" className="input" />
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default UserUpdatePage;

