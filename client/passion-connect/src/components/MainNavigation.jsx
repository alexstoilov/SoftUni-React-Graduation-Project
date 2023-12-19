import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="main-navigation">
      {isAuth ? <LoggedInHeader /> : <GuestHeader />}
    </nav>
  );
};

const LoggedInHeader = () => {
  return (
    <ul className="nav-list">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/auth/profile" className="nav-link">
          Profile
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/auth/logout" className="nav-link">
          Logout
        </Link>
      </li>
    </ul>
  );
};

const GuestHeader = () => {
  return (
    <ul className="nav-list">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/auth/login" className="nav-link">
          Login
        </Link>
      </li>
      <li>
        <Link to="/auth/register" className="nav-link">
          Register
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  );
};

export default MainNavigation;
