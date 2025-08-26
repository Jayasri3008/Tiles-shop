import { Link } from "react-router-dom";

export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No tiles added yet.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, i) => (
              <li key={i} className="cart-row">
                <span>{item.name} ({item.size}) — ₹{item.price}</span>
                <button onClick={() => removeFromCart(i)} className="btn danger">Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          <Link to="/products" className="btn linklike">Add more</Link>
        </>
      )}
    </div>
  );
}
