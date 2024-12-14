import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginController from './LoginController';

function Login() {
  const location = useLocation();
  const loginType = location.state?.loginType;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm mx-auto">
        {loginType && <LoginController loginType={loginType} />}
      </div>
    </div>
  );
}

export default Login;
