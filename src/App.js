import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/guest/HomePage';
import RegistrationPage from './page/guest/RegistrationPage';
import HolidayPage from './page/guest/HolidayPage';
import RentalPage from './page/guest/RentalPage';
import LeisurePage from './page/guest/LeisurePage';
import ContactPage from './page/guest/ContactPage';
import DashboardPage from "./page/admin/DashboardPage";
import AdminUsersPage from './page/admin/AdminUsersPage';
import AdminRequestsPage from './page/admin/AdminRequestsPage';
import RequestPage from './page/guest/RequestPage';
import UserPage from './page/guest/UserPage';
import SocialActivitiesPage from './page/guest/SocialActivitiesPage';
import AdminRequestUpdate from './page/admin/AdminRequestUpdate';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inscription" element={<RegistrationPage />} />
        <Route path="/holiday" element={<HolidayPage />} />
        <Route path="/rental" element={<RentalPage />} />
        <Route path="/leisure" element={<LeisurePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/socialactivities" element={<SocialActivitiesPage />} />

        <Route path="/admin" element={<DashboardPage />}/>
        <Route path="/admin/users" element= {<AdminUsersPage />} />
        <Route path="/admin/requests" element= {<AdminRequestsPage />} />
        <Route path="/admin/requests/update/:id" element={<AdminRequestUpdate />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;