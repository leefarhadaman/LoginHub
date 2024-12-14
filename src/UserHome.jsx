import React from 'react';

const UserHome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to User Home</h1>
        <p className="text-center">You are logged in as a User!</p>
      </div>
    </div>
  );
};

export default UserHome;
