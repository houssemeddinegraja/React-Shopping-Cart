import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router";
import "./Shop.css";

function Shop() {
  const { products, loading, error } = useProducts();
  const { addToCart } = useOutletContext();

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status status-error">Error: {error.message}</p>;

  return (
    <section className="shop page">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default Shop;
