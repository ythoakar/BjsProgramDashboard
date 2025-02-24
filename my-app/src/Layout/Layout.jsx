import { Outlet } from "react-router-dom";
import Navbar from "../CommonComponent/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This is where the page content will be rendered */}
    </>
  );
};

export default Layout;
