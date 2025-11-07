import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

/**
 * Admin Bills page — mobile-first Khatabook style
 * - Shows filter bar (search / month)
 * - Shows list of mock bills
 * - Floating "New Bill" button
 *
 * Replace mockData with real API later.
 */

const mockData = [
  {
    id: "B-1001",
    retailer: "Shyam Traders",
    amount: 5200,
    date: "2025-10-12",
    status: "Due",
  },
  {
    id: "B-1002",
    retailer: "Sona Kirana",
    amount: 8000,
    date: "2025-10-15",
    status: "Paid",
  },
  {
    id: "B-1003",
    retailer: "Rita Stores",
    amount: 3300,
    date: "2025-10-20",
    status: "Due",
  },
];

function BillRow({ bill, onClick }) {
  return (
    <Card
      onClick={() => onClick(bill)}
      className="p-4 mb-3 cursor-pointer hover:bg-blue-50 transition"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-gray-500">#{bill.id}</div>
          <div className="font-semibold text-gray-800">{bill.retailer}</div>
          <div className="text-xs text-gray-500 mt-1">{bill.date}</div>
        </div>

        <div className="text-right">
          <div
            className={`font-semibold text-lg ${
              bill.status === "Paid" ? "text-green-600" : "text-red-600"
            }`}
          >
            ₹ {bill.amount.toLocaleString("en-IN")}
          </div>
          <div className="text-xs text-gray-500 mt-1">{bill.status}</div>
        </div>
      </div>
    </Card>
  );
}

export default function AdminBills() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [month, setMonth] = useState(""); // optional filter
  const [bills] = useState(mockData);

  const filtered = useMemo(() => {
    return bills.filter((b) => {
      const matchesQ =
        !query ||
        b.id.toLowerCase().includes(query.toLowerCase()) ||
        b.retailer.toLowerCase().includes(query.toLowerCase());
      const matchesMonth = !month || b.date.startsWith(month); // month as 'YYYY-MM'
      return matchesQ && matchesMonth;
    });
  }, [bills, query, month]);

  function openBill(b) {
    // For now simple navigation to placeholder; later go to real bill details route
    navigate("/admin/bills/" + b.id);
  }

  function handleNewBill() {
    // Later open create-bill modal or route
    navigate("/admin/bills/new");
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <header className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
        <div className="font-semibold text-lg">Bills</div>
        <div className="text-sm opacity-90">Total: ₹{bills.reduce((s, b) => s + b.amount, 0).toLocaleString("en-IN")}</div>
      </header>

      {/* Filters */}
      <div className="p-4">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by bill id or retailer"
              className="pl-10"
            />
          </div>

          <div style={{ minWidth: 120 }}>
            <Input
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="YYYY-MM"
            />
          </div>
        </div>
      </div>

      {/* List */}
      <div className="px-4">
        {filtered.length === 0 ? (
          <Card className="p-6 text-center text-gray-500">No bills found</Card>
        ) : (
          filtered.map((b) => <BillRow key={b.id} bill={b} onClick={openBill} />)
        )}
      </div>

      {/* Floating New Bill Button */}
      <div className="fixed right-4 bottom-20">
        <Button className="bg-blue-600 text-white rounded-full px-5 py-3 shadow-lg" onClick={handleNewBill}>
          + New Bill
        </Button>
      </div>

      {/* Bottom nav placeholder (space reserved by pb-28) */}
    </div>
  );
}
