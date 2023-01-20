import { Outlet, Link } from "react-router-dom";
import Logo from ".././Assets/Logo.png";
import "../Components/Nav.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <Link to="/" className="links">
          <img src={Logo} className="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="links">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/Services" className="links">
              Services
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="links">
              Projects
            </Link>
          </li>
        </ul>
        <button className="enquiry-button">Enquire Now</button>
      </nav>
      <Outlet />
    </div>
  );
};
export default NavBar;