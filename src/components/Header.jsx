import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();

  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo">
          FakeStore
        </Link>
        
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-link">
            Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          {user && (
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}