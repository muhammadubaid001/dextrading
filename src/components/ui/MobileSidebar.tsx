import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export const MobileSidebar = () => {
  return (
    <div className="drawer block md:hidden z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="drawer-button">
          <Menu className="h-8 w-8" />
        </label>
      </div>
      <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        <Sidebar />
      </div>
    </div>
  );
};
