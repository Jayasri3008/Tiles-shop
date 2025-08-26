import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="nav">
      <div className="brand">JAI Tiles🏭</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒({cartCount})</Link>
      </div>
    </nav>
  );
}
