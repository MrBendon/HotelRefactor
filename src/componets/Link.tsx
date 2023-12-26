import { NavLink } from "react-router-dom";
import { NavLinkType } from "./Navbar";

type PropType = {
  data: NavLinkType;
};

const Link = ({ data }: PropType) => {
  const LinkStyle =
    "text-lg flex gap-2 items-center justify-start p-2  text-gray-400 transition-all hover:bg-gray-200 rounded-md";

  return (
    <NavLink
      to={data.url}
      className={({ isActive }) => (isActive ? `${LinkStyle} text-blue-400` : `${LinkStyle}`)}
    >
      <span>{data.icon}</span>
      <span>{data.title}</span>
    </NavLink>
  );
};

export default Link;
