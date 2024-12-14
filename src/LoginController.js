import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './components/Input';
import { UserAuth, ExtranetAuth } from './authServices';

function LoginController({ loginType }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Validate form data
  const validateForm = () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return false;
    }
    setError('');
    return true;
  };

  // Handle login logic
  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    let isAuthenticated = false;

    if (loginType === 'user') {
      isAuthenticated = await UserAuth(username, password);
    } else if (loginType === 'extranet') {
      isAuthenticated = await ExtranetAuth(username, password);
    }

    setLoading(false);

    if (isAuthenticated) {
      navigate(loginType === 'user' ? '/user-home' : '/extranet-home');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="p-10 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {loginType === 'extranet' ? 'Extranet Login' : 'User Login'}
      </h2>

      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      <Input
        label="Username"
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
        required
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        required
      />

      <button
        onClick={handleLogin}
        className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md ${loading ? 'opacity-50' : 'hover:bg-blue-600'}`}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}

export default LoginController;
