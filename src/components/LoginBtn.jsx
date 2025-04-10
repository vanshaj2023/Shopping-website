// src/components/LoginPrompt.jsx
import { Link } from 'react-router-dom';

export default function LoginBtn({ message = "Please login to continue" }) {
  return (
    <div className="login-prompt">
      <p>{message}</p>
      <Link to="/login" className="login-btn">
        Go to Login
      </Link>
    </div>
  );
}