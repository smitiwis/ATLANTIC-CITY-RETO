import { type FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  isActive: boolean;
  name: string;
  path: string;
};

const NavbarItem: FC<Props> = ({ name, path, isActive }) => {
  return (
    <li>
      <Link
        to={path}
        className={isActive ? "text-emerald-600" : "text-white"}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavbarItem;
