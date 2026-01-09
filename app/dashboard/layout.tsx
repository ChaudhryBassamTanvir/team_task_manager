import { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <h2 className="text-xl font-bold">Task Manager</h2>

        <nav className="mt-8 space-y-4">
          <a className="block text-gray-700 hover:text-black" href="/dashboard">
            Dashboard
          </a>
          <a className="block text-gray-700 hover:text-black" href="/dashboard/tasks">
            Tasks
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
