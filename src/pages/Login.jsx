import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // FakeStoreAPI requires these specific credentials for demo
    const credentials = {
      username: 'mor_2314',
      password: '83r5^_'
    };

    const success = await login(credentials);
    if (!success) {
      setError('Invalid credentials. Please use the demo credentials.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="mor_2314"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="83r5^_"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="demo-credentials">
        Demo credentials: <br />
        Username: mor_2314 <br />
        Password: 83r5^_
      </p>
    </div>
  );
}