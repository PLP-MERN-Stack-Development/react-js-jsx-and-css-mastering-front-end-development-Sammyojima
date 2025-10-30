import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
    <Footer />
  </div>
);

export default Layout;