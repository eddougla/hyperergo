import Link from "next/link";
import { getAdminUser } from "@/lib/helpers";
import { Button } from "@/components/ui/button";

const SalesPage = async () => {
  const adminUser = await getAdminUser();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Welcome back, {adminUser.firstName}!
        </h1>
        <p className="text-gray-600 mb-4">
          Manage your store's sales, products, and performance from this
          dashboard.
        </p>
        <div className="flex gap-3">
          <Link href="/admin/product/create">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Create New Product
            </Button>
          </Link>
          <Link href="/admin/products">
            <Button variant="outline">Manage Products</Button>
          </Link>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold text-gray-900">$12,426</p>
              <p className="text-gray-600">Total Sales</p>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold text-gray-900">147</p>
              <p className="text-gray-600">Total Products</p>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-8 w-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold text-gray-900">1,204</p>
              <p className="text-gray-600">Total Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border rounded-lg">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="px-6 py-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-2 w-2 bg-green-400 rounded-full"></div>
              <p className="ml-3 text-sm text-gray-600">
                New product "Wireless Headphones" created
              </p>
              <span className="ml-auto text-xs text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-2 w-2 bg-blue-400 rounded-full"></div>
              <p className="ml-3 text-sm text-gray-600">
                Order #1234 completed
              </p>
              <span className="ml-auto text-xs text-gray-400">4 hours ago</span>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-2 w-2 bg-purple-400 rounded-full"></div>
              <p className="ml-3 text-sm text-gray-600">
                Product "Smart Watch" updated
              </p>
              <span className="ml-auto text-xs text-gray-400">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
