import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Header from "../componets/Header";

const AppLayout = () => {
  return (
    <div className="w-full h-screen bg-slate-100 grid grid-cols-[250px,1fr] grid-rows-[70px,1fr] ">
      <div className=" col-span-2">
        <Header></Header>
      </div>

      <Navbar></Navbar>
      <div className="p-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AppLayout;
