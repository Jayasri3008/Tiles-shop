export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="muted">Size: {product.size}</p>
        <p className="price">₹{product.price} / sq.ft</p>
        <button onClick={() => addToCart(product)} className="btn">Add to Cart</button>
      </div>
    </div>
  );
}
