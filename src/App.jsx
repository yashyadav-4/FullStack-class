import { useState } from 'react';
import ProductCard from './components/ProductCard';

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 },
];

const categories = ["All", "Electronics", "Clothing", "Home"];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Both filters run together — category narrows the set, then search refines it
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="falling-stars">
        {[...Array(8)].map((_, i) => <div key={i} className="star" />)}
      </div>
      <div className="app">
      <header className="app-header">
        <h1>Product Store</h1>
        <p>Browse, search &amp; filter products instantly</p>
      </header>

      <div className="controls">
        <input
          type="text"
          className="search-box"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))
        ) : (
          <div className="empty-state">
            <div className="icon">📭</div>
            <p>No products found</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default App;
