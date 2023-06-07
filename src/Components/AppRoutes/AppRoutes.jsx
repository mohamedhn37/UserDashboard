import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Pages/Dashbaord/Dashboard';
import Profil from "../../Pages/Profil/Profil";
import Condidature from '../../Pages/Condidature/Condidature';
import Setting from '../../Pages/Setting/Setting';

function AppRoutes() {
  return (

      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Profil" element={<Profil/>}></Route>
        <Route path="/Condidature" element={<Condidature/>}></Route>
        <Route path="/Setting" element={<Setting/>}></Route>
      </Routes>
  );
}
export default AppRoutes;
