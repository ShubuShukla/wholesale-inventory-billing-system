import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import CustomerLogin from "./pages/CustomerLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminBills from "./pages/AdminBills";
import { Button } from "@/components/ui/button";

export default function App() {
  return (

    <Routes>
      < Route path="/" element={< Home />} />
      < Route path="/admin-login" element={< AdminLogin />} />
      < Route path="/customer-login" element={< CustomerLogin />} />
      < Route path="/admin" element={< AdminDashboard />} />
      < Route path="/customer" element={< CustomerDashboard />} />

      <Route path="/admin/bills" element={<AdminBills />} />
// Optional placeholders for details/new:
      <Route path="/admin/bills/new" element={<div className="p-6">Create new bill (placeholder)</div>} />
      <Route path="/admin/bills/:id" element={<div className="p-6">Bill details (placeholder)</div>} />
    </Routes >
  );
}
