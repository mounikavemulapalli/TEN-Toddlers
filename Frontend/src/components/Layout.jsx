// Layout.jsx
import React from "react";
import Footer from "../components/footer/Footer"; // Import your Footer component
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes

const Layout = () => {
  return (
    <div>
      <header>{/* You can add a header or navbar here if needed */}</header>
      <main>
        <Outlet /> {/* This renders the current page content */}
      </main>
      <Footer /> {/* Footer is included globally */}
    </div>
  );
};

export default Layout;
