// MainNavigation.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  //get data from redux store;
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return <nav>{isAuth ? <LoggedInHeader /> : <GuestHeader />}</nav>;
};

const LoggedInHeader = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  );
};

const GuestHeader = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};

export default MainNavigation;
