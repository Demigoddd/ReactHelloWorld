import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
