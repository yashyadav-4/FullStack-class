function ProductCard({ name, category, price }) {
  return (
    <div className="product-card">
      <div className="name">{name}</div>
      <span className="category">{category}</span>
      <div className="price">₹{price.toLocaleString('en-IN')}</div>
    </div>
  );
}

export default ProductCard;
