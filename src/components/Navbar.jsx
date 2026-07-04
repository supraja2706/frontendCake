import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>🎂 Cake Shop</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cakes">Cakes</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;