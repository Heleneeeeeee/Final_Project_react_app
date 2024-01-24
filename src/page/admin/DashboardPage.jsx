import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { UseVerifyIfUserIsLogged } from "../../utils/security-utils";


const DashboardPage = () => {
  UseVerifyIfUserIsLogged ();
 
    return (
      <>
        <HeaderAdmin />
        <h1>Vous êtes bien sur le Dashboard Admin</h1>
      </>
    )
}

export default DashboardPage;