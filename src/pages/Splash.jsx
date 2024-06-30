import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-blue-500">
      <h1 className="text-5xl text-white">Welcome to Cab Service</h1>
    </div>
  );
};

export default Splash;