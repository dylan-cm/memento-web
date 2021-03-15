import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link
       to="/">
        <Logo />
      </Link>
      <Link className="link" to="/">
        Products
      </Link>
      <Link className="link" to="/">
        FAQs
      </Link>
      <Link className="link" to="/">
        About
      </Link>
      <Link className="navbar-action" to="/">
        Order Now
      </Link>
    </div>
  );
};

export default NavBar;
