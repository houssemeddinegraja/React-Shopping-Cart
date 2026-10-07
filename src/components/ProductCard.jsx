import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.title} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
        Add To Cart
      </button>
    </article>
  );
}

export default ProductCard;