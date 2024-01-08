import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './page/guest/LoginPage';
import RegistrationPage from './page/guest/RegistrationPage';
import HolidayPage from './page/guest/HolidayPage';
import RentalPage from './page/guest/RentalPage';
import LeisurePage from './page/guest/LeisurePage';
import HolidayCreatePage from './page/guest/HolidayCreatePage';
import ContactPage from './page/guest/ContactPage';
import DashboardPage from "./page/admin/DashboardPage";
import AdminUsersPage from './page/admin/AdminUsersPage';
import AdminRequestsPage from './page/admin/AdminRequestsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/inscription" element={<RegistrationPage />} />
        <Route path="/holiday" element={<HolidayPage />} />
        <Route path="/rental" element={<RentalPage />} />
        <Route path="/leisure" element={<LeisurePage />} />
        <Route path="/holidaycreatepage" element={<HolidayCreatePage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/admin" element={<DashboardPage />}/>
        <Route path="/admin/users" element= {<AdminUsersPage />} />
        <Route path="/admin/requests" element= {<AdminRequestsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;