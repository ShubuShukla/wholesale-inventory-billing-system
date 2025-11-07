import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Book,
  FileText,
  Package,
  Users,
  Calendar,
  ShieldCheck,
  Settings,
  HelpCircle,
  Info,
  UsersRound,
  MoreHorizontal,
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const features = [
    { label: "Cashbook", icon: <Book size={22} />, route: "/admin/cashbook" },
    { label: "Bills", icon: <FileText size={22} />, route: "/admin/bills" },
    { label: "Items", icon: <Package size={22} />, route: "/admin/items" },
    { label: "Staff", icon: <Users size={22} />, route: "/admin/staff" },
    { label: "Collection", icon: <Calendar size={22} />, route: "/admin/collection" },
    { label: "Shop Insurance", icon: <ShieldCheck size={22} />, route: "/admin/insurance" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Header */}
      <header className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
        <h1 className="font-semibold text-lg">My Business</h1>
        <button className="text-sm underline" onClick={() => alert("Edit Business (coming soon)")}>
          Edit
        </button>
      </header>

      {/* Profile */}
      <div className="p-4 bg-white shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            MB
          </div>
          <div>
            <p className="font-semibold text-gray-800">My Business</p>
            <p className="text-xs text-gray-500">Retail & Wholesale</p>
          </div>
        </div>
        <Button size="sm" variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Profile Strength */}
      <div className="px-4 py-2">
        <p className="text-sm text-gray-700 font-medium">
          Profile strength: <span className="text-red-600">Weak</span>
        </p>
        <Progress value={10} className="h-2 mt-1" />
      </div>

      {/* Promo Banner */}
      <Card className="mx-4 mt-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 rounded-xl shadow-md">
        <h3 className="font-semibold mb-2">Fill missing details for a FREE Business Card</h3>
        <Button
          size="sm"
          variant="secondary"
          className="bg-white text-blue-700 hover:bg-gray-100"
        >
          PROCEED
        </Button>
      </Card>

      {/* Feature Grid */}
      <div className="grid grid-cols-3 gap-4 px-4 py-6">
        {features.map((f, i) => (
          <Card
            key={i}
            onClick={() => navigate(f.route)}
            className="flex flex-col items-center justify-center p-4 shadow-sm hover:bg-blue-50 active:scale-95 transition"
          >
            <div className="text-blue-600 mb-2">{f.icon}</div>
            <p className="text-xs font-medium text-gray-700">{f.label}</p>
          </Card>
        ))}
      </div>

      {/* Settings / Help */}
      <div className="bg-white mx-4 rounded-xl shadow-sm mb-20">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2 text-gray-700">
            <Settings size={18} /> <span>Settings</span>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2 text-gray-700">
            <HelpCircle size={18} /> <span>Help & Support</span>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-gray-700">
            <Info size={18} /> <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm flex justify-around py-2 text-gray-600">
        <div className="flex flex-col items-center text-blue-600">
          <UsersRound size={20} />
          <span className="text-xs">Parties</span>
        </div>
        <div className="flex flex-col items-center">
          <FileText size={20} />
          <span className="text-xs">Bills</span>
        </div>
        <div className="flex flex-col items-center">
          <Package size={20} />
          <span className="text-xs">Items</span>
        </div>
        <div className="flex flex-col items-center">
          <MoreHorizontal size={20} />
          <span className="text-xs">More</span>
        </div>
      </nav>
    </div>
  );
}
