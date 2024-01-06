import HeaderAdmin from "../../component/admin/HeaderAdmin";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AdminUsersPage = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      navigate("/login");
    }
  });

    const [users, setUsers] = useState(null);
    const token = localStorage.getItem("jwt");
    const decodedToken = jwtDecode(token);
  
    useEffect(() => {
      (async () => {
        const usersResponse = await fetch("http://localhost:3005/api/users");
        const usersResponseData = await usersResponse.json();
        setUsers(usersResponseData);
      })();
    }, []);
  
    const handleDeleteUser = async (event, UserId) => {
      await fetch("http://localhost:3005/api/users/" + UserId, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
  
      const usersResponse = await fetch("http://localhost:3005/api/users");
      const usersResponseData = await usersResponse.json();
      setUsers(usersResponseData);
    };
    return (
        <>
            <HeaderAdmin/>
            <h2>Liste des utilisateurs</h2>
            {users?(
                <>
                    {users.map((user) => {
                        return (
                            <article>
                                 <h2>{user.username}</h2>
                                    {decodedToken.data.role !== 3 && (
                                    <button onClick={(event) => handleDeleteUser(event, user.id)}>Supprimer</button>
                                )}
                            </article>
                        );
                    }
                    )}
                </>
            ): (
                <p>En cours de chargement</p>
            )}
        </>
    ) 
}

export default AdminUsersPage;