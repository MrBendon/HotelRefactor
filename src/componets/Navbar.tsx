// import { IconType } from "react-icons";
import Logo from "../assets/logo.png";
import Link from "./Link";
import { Dispatch, ReactNode } from "react";
import { FaHome } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { FaWhmcs } from "react-icons/fa";

export type NavLinkType = {
  title: string;
  url: string;
  icon: ReactNode;
};

const NavList: NavLinkType[] = [
  { title: "首頁 Dashboard", url: "/", icon: <FaHome /> },
  { title: "訂單管理 Bookings", url: "/bookings", icon: <FaIdCard /> },
  { title: "房型設定 Rooms", url: "/rooms", icon: <FaChalkboard /> },
  { title: "一般設定 Settings", url: "/settings", icon: <FaLaptopHouse /> },
  { title: "系統設定 System", url: "/system", icon: <FaWhmcs /> },
];

type PropsType = {
  isOpenNav: boolean;
  setIsOpenNav: Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isOpenNav, setIsOpenNav }: PropsType) => {
  return (
    <ul
      className={`w-[200px] md:w-full fixed top-0 ${
        isOpenNav ? "left-0" : "-left-full"
      } h-full md:relative md:left-0 z-10 bg-white sm:flex flex-col gap-4 px-2 pt-2 justify-start transition-all duration-300`}
    >
      <div className="w-full flex justify-center items-center">
        <img src={Logo} className="w-12 rounded-full ml-2" alt="LOGO" />
      </div>
      {NavList.map((item) => (
        <Link setIsOpenNav={setIsOpenNav} key={item.title} data={item} />
      ))}
    </ul>
  );
};

export default Navbar;
