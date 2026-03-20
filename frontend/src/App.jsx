import { useState } from "react";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("role");
  const [role, setRole] = useState("");

  return (
    <>
      {page === "role" && <RoleSelection setPage={setPage} setRole={setRole} />}
      {page === "login" && <Login setPage={setPage} role={role} />}
      {page === "dashboard" && <Dashboard role={role} />}
    </>
  );
}
