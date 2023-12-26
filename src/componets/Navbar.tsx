// import { IconType } from "react-icons";
import Link from "./Link";
import { ReactNode } from "react";
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

const Navbar = () => {
  return (
    <ul className="w-full h-full  flex flex-col gap-4 px-2">
      {NavList.map((item) => (
        <Link key={item.title} data={item} />
      ))}
    </ul>
  );
};

export default Navbar;
