import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl mb-8">Login</h1>
      <div className="space-y-4">
        <Link to="/driver-login" className="block text-center bg-blue-500 text-white py-2 px-4 rounded">
          Driver Login
        </Link>
        <Link to="/customer-login" className="block text-center bg-green-500 text-white py-2 px-4 rounded">
          Customer Login
        </Link>
      </div>
    </div>
  );
};

export default Login;