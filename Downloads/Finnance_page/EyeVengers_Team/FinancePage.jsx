import React from "react";

const FinancePage = () => {
  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8 text-center">Clinic Finance</h1>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:bg-blue-600 p-2 rounded">Dashboard</a>
          <a href="#" className="hover:bg-blue-600 p-2 rounded">Invoices</a>
          <a href="#" className="hover:bg-blue-600 p-2 rounded">Payments</a>
          <a href="#" className="hover:bg-blue-600 p-2 rounded">Expenses</a>
          <a href="#" className="hover:bg-blue-600 p-2 rounded">Reports</a>
        </nav>
        <div className="mt-auto text-center border-t border-blue-500 pt-4">
          <p className="text-sm">© 2025 Eye Clinic</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Finance Overview</h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-700 font-semibold">Total Revenue</h3>
            <p className="text-2xl font-bold text-blue-700 mt-2">$45,230</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-700 font-semibold">Monthly Expenses</h3>
            <p className="text-2xl font-bold text-red-600 mt-2">$12,480</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-700 font-semibold">Net Profit</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">$32,750</p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Recent Transactions</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3 border-b">Date</th>
                <th className="p-3 border-b">Description</th>
                <th className="p-3 border-b">Amount</th>
                <th className="p-3 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b">2025-10-15</td>
                <td className="p-3 border-b">Consultation Payment</td>
                <td className="p-3 border-b text-green-600">+$120</td>
                <td className="p-3 border-b">Completed</td>
              </tr>
              <tr>
                <td className="p-3 border-b">2025-10-13</td>
                <td className="p-3 border-b">Equipment Maintenance</td>
                <td className="p-3 border-b text-red-600">-$350</td>
                <td className="p-3 border-b">Pending</td>
              </tr>
              <tr>
                <td className="p-3 border-b">2025-10-10</td>
                <td className="p-3 border-b">Surgery Payment</td>
                <td className="p-3 border-b text-green-600">+$950</td>
                <td className="p-3 border-b">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default FinancePage;
