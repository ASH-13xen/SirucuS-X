import React from 'react';
import Navbar from './Navbar'; // Reuses your existing Navbar component
import { Outlet } from 'react-router-dom'; // Renders the nested child route's component
import '../css/MainLayout.css'; // Imports the layout's specific styles

const MainLayout = () => {
  return (
    <div className="main-layout">
      < Navbar />
      <main className="main-content">
        {/* The Outlet component will render the child route's element here */}
        {/* e.g., on the /learn page, it renders the <Learn /> component */}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;