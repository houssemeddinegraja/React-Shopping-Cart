import { useOutletContext } from "react-router";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useOutletContext();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h1>Cart Page</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Cart Page</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}> - </button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </button>
              </td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total</td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
