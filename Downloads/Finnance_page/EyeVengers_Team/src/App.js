import React from "react";
import ReactDOM from "react-dom/client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Home,
  PieChart,
  DollarSign,
  Settings,
  LogOut,
} from "lucide-react";

// بيانات الرسم البياني
const data = [
  { name: "Jan", revenue: 4000, expenses: 2400 },
  { name: "Feb", revenue: 3000, expenses: 1398 },
  { name: "Mar", revenue: 2000, expenses: 9800 },
  { name: "Apr", revenue: 2780, expenses: 3908 },
  { name: "May", revenue: 1890, expenses: 4800 },
  { name: "Jun", revenue: 2390, expenses: 3800 },
];

// المكون الرئيسي
function App() {
  // دالة للتعامل مع النقر على الأزرار
  const handleAddReport = () => {
    alert("Add Report button clicked!");
  };

  const handleNavigation = (page) => {
    console.log(`Navigating to: ${page}`);
    // هنا يمكن إضافة منطق التوجيه
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      console.log("User logged out");
      // هنا يمكن إضافة منطق تسجيل الخروج
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* الشريط الجانبي */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col justify-between">
        <div>
          <div className="p-6 text-2xl font-bold text-center border-b border-blue-500">
            Eye Clinic
          </div>
          <nav className="mt-6 flex flex-col space-y-4 px-6">
            <button 
              onClick={() => handleNavigation("dashboard")}
              className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors"
            >
              <Home size={20} /> <span>Dashboard</span>
            </button>
            <button 
              onClick={() => handleNavigation("reports")}
              className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors"
            >
              <PieChart size={20} /> <span>Reports</span>
            </button>
            <button 
              onClick={() => handleNavigation("transactions")}
              className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors"
            >
              <DollarSign size={20} /> <span>Transactions</span>
            </button>
            <button 
              onClick={() => handleNavigation("settings")}
              className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors"
            >
              <Settings size={20} /> <span>Settings</span>
            </button>
          </nav>
        </div>
        <div className="p-6 border-t border-blue-500">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors"
          >
            <LogOut size={20} /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Finance Overview</h1>
          <button 
            onClick={handleAddReport}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Add Report
          </button>
        </header>

        {/* بطاقات الإحصائيات */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
            <h3 className="text-gray-500">Total Revenue</h3>
            <p className="text-3xl font-semibold text-blue-700 mt-2">$52,300</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <h3 className="text-gray-500">Expenses</h3>
            <p className="text-3xl font-semibold text-green-600 mt-2">$21,000</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
            <h3 className="text-gray-500">Profit</h3>
            <p className="text-3xl font-semibold text-indigo-600 mt-2">$31,300</p>
          </div>
        </section>

        {/* قسم الرسم البياني */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart 
              data={data} 
              margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`$${value}`, '']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar 
                dataKey="revenue" 
                fill="#2563eb" 
                radius={[4, 4, 0, 0]} 
                name="Revenue"
              />
              <Bar 
                dataKey="expenses" 
                fill="#93c5fd" 
                radius={[4, 4, 0, 0]} 
                name="Expenses"
              />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
}

// تقديم التطبيق
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// تصدير المكون للتطوير
export default App;