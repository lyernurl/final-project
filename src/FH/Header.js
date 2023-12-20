import React from "react";
import { Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src="https://papik.pro/uploads/posts/2021-11/1636139998_2-papik-pro-p-logotip-kino-foto-2.png" alt="Logo"/>
      </Link>
      <ul className="nav_bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About us</Link>
        </li>
        <li>
          <Link to="/watchlater">Watch later</Link>
        </li>

        <li className="filmsD">
        <Link >Films</Link>
        <div className="films-dropdown">
        <Link to="/animation">Animation</Link>
        <Link to="/classic">Classic</Link>
        <Link to="/comedy">Comedy</Link>
        <Link to="/drama">Drama</Link>
        <Link to="/family">Family</Link>
        <Link to="/horror">Horror</Link>
        <Link to="/mystery">Mystery</Link>
        <Link to="/western">Western</Link>
        </div>
        </li>

        <li className="user-icon">
        <img className="sign-icon" src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/profile-boy-icon.png" alt="Sign"/>
        <div className="user-dropdown">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        </div>
        </li>

      </ul>
      </div>
  );
}

export default Header;
