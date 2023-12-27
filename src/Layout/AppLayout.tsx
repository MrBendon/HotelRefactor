import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Header from "../componets/Header";
import { useState } from "react";

const AppLayout = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <div className="w-full min-h-screen flex flex-col md:grid md:grid-cols-[200px,1fr] md:grid-rows-[4rem,1fr]  ">
      <div className="row-span-2">
        <Navbar setIsOpenNav={setIsOpenNav} isOpenNav={isOpenNav}></Navbar>
      </div>

      <Header setIsOpenNav={setIsOpenNav}></Header>

      <div className="bg-gray-200 p-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AppLayout;
