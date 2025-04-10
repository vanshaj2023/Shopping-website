import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { useAuth } from '../context/AuthContext';
import LoginBtn from '../components/LoginBtn';

export default function Cart() {
  const { cart, cartTotal, clearCart, cartCount } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
    const { user } = useAuth();
  
    if (!user) {
      return <LoginBtn message="Please login to view your cart" />;
    }

  const handleCheckout = () => {
    clearCart();
    setOrderPlaced(true);
    
    setTimeout(() => {
      setOrderPlaced(false);
    }, 4000);
  };

  if (cartCount === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart ({cartCount} items)</h2>
      
      <div className="cart-items">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        
        <button 
          className="checkout-btn"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
      
      {orderPlaced && (
        <div className="order-success-modal">
          <div className="modal-content">
            <h3>Order placed successfully!</h3>
            <p>Thank you for your purchase.</p>
          </div>
        </div>
      )}
    </div>
  );
}