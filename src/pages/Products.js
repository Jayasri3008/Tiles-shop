import { useState } from "react";
import tiles from "../data/tiles";
import ProductCard from "../components/ProductCard";

export default function Products({ addToCart }) {
  const categories = ["All", "Floor", "Wall", "Bathroom", "Kitchen", "Outdoor", "Marble", "Granite", "Mosaic"];
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? tiles : tiles.filter(t => t.category === filter);

  return (
    <div className="page">
      <h2>Products</h2>

      <div className="filters">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`chip ${filter === c ? "active" : ""}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map(t => (
          <ProductCard key={t.id} product={t} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );

  
}
