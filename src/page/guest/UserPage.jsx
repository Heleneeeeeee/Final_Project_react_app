import { useEffect, useState } from "react";
import Header from "../../component/guest/Header";
import { Link, useParams } from "react-router-dom";
import './UserPage.scss';
import Footer from "../../component/guest/Footer";
import { UseVerifyIfUserIsLogged } from "../../utils/security-utils";

const UserPage = () => {
  UseVerifyIfUserIsLogged();

  const { userId } = useParams();
  const [user,setUser] = useState(null);



  const token = localStorage.getItem("jwt");

  useEffect(() => {
    async function fetchData() {
      try {
        const userResponse = await fetch(`http://localhost:3005/api/users/${userId}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const userResponseData = await userResponse.json();
        setUser(userResponseData.data);

      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error.message);
      }
    }
    fetchData();
  }, [userId, token]);

  return (
      <>
        <Header />
        <main className="userpage">
          <section className="section-user">
            <h1>Mes informations:</h1>
            {user ? (
              <article>
                <p>{user.firstname}</p>
                <p>{user.lastname}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
              </article>
            ) : (
              <p>Aucune demande à afficher</p>
            )}
            {user && (
              <Link to={`/users/update/${userId}`}>
                <button className="updateBtn">Modifier</button>
              </Link>
            )}
          </section>
        </main>
        <Footer />
      </>
    );
};
export default UserPage;
