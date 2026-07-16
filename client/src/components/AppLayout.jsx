import Sidebar from "./Sidebar";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AppLayout;