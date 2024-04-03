import { useState } from 'react';
import './Login.scss';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // hard-coded user credentials
    const users = [
      { username: 'liri', password: `${import.meta.env.VITE_LIRI_PASSWORD}` },
      { username: 'phin', password: `${import.meta.env.VITE_PHIN_PASSWORD}` }
    ];

    // check if username and password match any of the hard-coded users
    const foundUser = users.find(user => user.username === username && user.password === password);

    // if user is found, call the onLoginSuccess function
    if (foundUser) {
      onLoginSuccess(foundUser.username);
    } else {
      setError('Invalid username or password!');
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login__form">
        <div className="login__user">
            <label htmlFor="username" className="login__label">
            Username:
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login__input"
                required
            />
            </label>
        </div>

        <div className="login__password">
            <label htmlFor="password" className="login__label">
            Password:
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login__input"
                required
            />
            </label>
        </div>

        {error && <p className="login__error">{error}</p>}

        <button type="submit" className="login__button">Login</button>
      </form>
    </div>
  );
}

export default Login;
