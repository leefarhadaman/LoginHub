import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './login';
import ExtranetHome from './ExtranetHome';
import UserHome from './UserHome';

function App() {
  const navigate = useNavigate();

  const handleLoginTypeChange = (type) => {
    navigate('/login', { state: { loginType: type } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-10 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Choose Login Type</h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleLoginTypeChange('extranet')}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Extranet Login
          </button>
          <button
            onClick={() => handleLoginTypeChange('user')}
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            User Login
          </button>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/extranet-home" element={<ExtranetHome />} />
        <Route path="/user-home" element={<UserHome />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
