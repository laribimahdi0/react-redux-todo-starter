import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
import { useHistory } from "react-router-dom";
const Navbar = ({ isLogin }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Todo
      </Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/task">
              Taches
            </Link>
          </li>
          {isLogin && (
            <li
              className="nav-item"
              onClick={() => {
                dispatch(logout());
                history.push("/");
              }}
            >
              <div className="nav-link" to="/task">
                Deconnexion
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
