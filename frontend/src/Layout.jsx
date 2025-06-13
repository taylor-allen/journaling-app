import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
