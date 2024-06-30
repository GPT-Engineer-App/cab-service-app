import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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

const DriverLogin = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl mb-8">Driver Login</h1>
      <form className="space-y-4 w-1/3">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <Label htmlFor="email">Email ID</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>
        <Button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">Login</Button>
      </form>
    </div>
  );
};

export { Login, DriverLogin };