"use client";
import Input from "@/components/common/Input";
import React, { useState } from "react";

const HomePage: React.FC = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setError("Invalid email address");
      return;
    }
    setError("");
    alert("Form Submitted!");
  };

  return (
    <div className=" bg-gray-100 h-screen grid items-center">
      <div className="grid grid md:grid-cols-2 gap-4 h-1/2 md:w-2/3 m-auto">
        <h1 className="font-bold text-blue-500 text-3xl">Welcome </h1>
        <div className="flex flex-col bg-white justify-center gap-4 p-6 rounded-lg  ">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />

          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
