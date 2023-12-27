import { NavLink } from "react-router-dom";
import { NavLinkType } from "./Navbar";
import { Dispatch } from "react";

type PropType = {
  data: NavLinkType;
  setIsOpenNav: Dispatch<React.SetStateAction<boolean>>;
};

const Link = ({ data, setIsOpenNav }: PropType) => {
  const LinkStyle =
    "text-md flex gap-2 items-center justify-start p-2 transition-all hover:bg-gray-200 rounded-md";

  function handleClickLink() {
    setIsOpenNav(false);
  }
  return (
    <NavLink
      to={data.url}
      className={({ isActive }) => (isActive ? `${LinkStyle} text-blue-700` : `${LinkStyle} text-gray-400`)}
      onClick={() => handleClickLink()}
    >
      <span>{data.icon}</span>
      <span>{data.title}</span>
    </NavLink>
  );
};

export default Link;
