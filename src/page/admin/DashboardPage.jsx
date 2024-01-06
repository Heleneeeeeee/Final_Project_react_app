import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const DashboardPage = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      navigate("/login");
    }
  });
 
    return (
        <HeaderAdmin />
    )
}

export default DashboardPage;