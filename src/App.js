import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import RegistrationPage from './page/RegistrationPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inscription" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;