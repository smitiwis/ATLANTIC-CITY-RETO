import { Link, useLocation, useNavigate } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import { NAVBAR_ITEMS } from "../constants";
import { useAuthStore } from "../store/authStore";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const logout = () => {
    navigate("/login");
    useAuthStore.getState().logout();
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <nav className="flex justify-between container mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center space-x-6 py-4">
          {NAVBAR_ITEMS.map((item) => (
            <NavbarItem
              key={item.path}
              name={item.name}
              path={item.path}
              isActive={isActive(item.path)}
            />
          ))}
        </ul>
        {user && (
          <div className="flex items-center space-x-4">
            <span className=" flex items-center gap-x-1.5 text-gray-700 dark:text-gray-300">
              <FaUser size={20} /> {user.usuario}
            </span>
            <button className="text-red-800 cursor-pointer" onClick={logout}>
              Logout
            </button>
          </div>
        )}
        {!user && (
          <ul className="flex items-center space-x-6 py-4">
            <li>
              <Link
                className={
                  isActive("/login") ? "text-emerald-600" : "text-white"
                }
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
