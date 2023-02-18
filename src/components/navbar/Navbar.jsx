import "./Navbar.scss";
import logo from "./navbar_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <a href="#horoscopes">Horoscopes</a>
        <a href="#daily">Daily</a>
        <a href="#tarot">Tarot</a>
        <a href="#articles">Articles</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
