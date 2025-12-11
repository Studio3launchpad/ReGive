
import "../styles/cart.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function CartPage({cartItems, updateQty, removeItem}) {

  console.log(cartItems);
  
  

  const navigate = useNavigate(); 
  const { user } = useAuth();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page" style={{backgroundColor: "white"}}>
  
      <div className="cart-title-container">
        <h1 className="cart-title">SHOPPING CART</h1>
      </div>
      
      <div className="cart-container">

        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="cart-product">
                  <img src={item.image} alt="" />
                  <div>
                    <h4>{item.name}</h4>
                    <small>{item.description}</small>
                  </div>
                </td>

                <td>${item.price.toFixed(2)}</td>

                <td>
                  <div className="qty-box">
                    <button onClick={() => updateQty(item.id, "dec")}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, "inc")}>+</button>
                  </div>
                </td>

                <td className="total-price">
                  ${(item.price * item.qty).toFixed(2)}
                </td>

                <td>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>✖</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        {/* Buttons */}
        <div className="cart-actions">
          <button className="gray-btn">UPDATE TOTALS</button>
          <button className="gray-btn">UPDATE CART</button>
          <button
            type="button"
            className="checkout-btn"
            onClick={() => {
              console.log("Checkout button clicked. user:", user);
              if (user) {
                navigate("/checkout");
              } else {
                // show a visible message and navigate to sign-in, preserving destination
                alert("You must sign in to proceed to checkout.");
                navigate("/signin", { state: { from: "/checkout" }, replace: true });
              }
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Bottom Section */}
        <div className="cart-bottom">

          {/* Coupon */}
          <div className="coupon-box">
            <h3>Coupon code</h3>
            <input type="text" placeholder="Enter your coupon code" />
            <button className="apply-btn">APPLY COUPON</button>
          </div>

          {/* Shipping */}
          <div className="shipping-box">
            <h3>Calculate shipping</h3>

            <select>
              <option>United Kingdom (UK)</option>
              <option>Nigeria</option>
              <option>Ghana</option>
            </select>

            <input type="text" placeholder="State / Province" />
            <input type="text" placeholder="Zip / Postal Code" />

          </div>

          {/* Cart Totals */}
          <div className="totals-box">
            <h3>Cart totals</h3>

            <div className="totals-row">
              <span>Cart Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <div className="totals-row">
              <span>Shipping and Handling</span>
              <strong>$25.00</strong>
            </div>

            <div className="totals-row total">
              <span>Order Total</span>
              <strong>${(subtotal + 25).toFixed(2)}</strong>
            </div>

          </div>

        </div>

            

      </div>
      <Footer />
    </div>
  );
}
