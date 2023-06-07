import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader";
import PageContent from "./Components/PageContent/PageContent";
import SideMenu from "./Components/SideMenu/SideMenu";

function App() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div className="App">
      <div className={`main ${isActive ? 'active' : ''}`}>
        <AppHeader toggleMenu={toggleMenu}/>
        <PageContent></PageContent>     
      </div>
      <SideMenu isActive={isActive}></SideMenu>
    </div>
  );
}
export default App;
