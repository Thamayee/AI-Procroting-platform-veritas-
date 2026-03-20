import { useState } from "react";

export default function Login({ setPage, role }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex items-center justify-center bg-teal-500">
      <div className="bg-white p-8 rounded-xl w-96 shadow">
        <h2 className="text-xl font-bold mb-4 text-center">
          {role === "admin" ? "Admin Login" : "Student Login"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() => setPage("dashboard")}
          className="w-full bg-teal-500 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
