import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="pt-16 ml-[24%]">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
