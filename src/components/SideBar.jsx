import {
  LayoutDashboard,
  Users,
  Package,
  CreditCard,
  Wrench,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarLinks = [
    {
      title: "Dashboards",
      icon: <LayoutDashboard size={18} />,
      submenu: [{ name: "CRM", path: "/" }],
    },
    {
      title: "Customers",
      icon: <Users size={18} />,
      submenu: [
        { name: "Customers", path: "/customers" },
        { name: "Customers View", path: "/customers/view" },
        { name: "Customers Create", path: "/customers/create" },
      ],
    },
    {
      title: "Products",
      icon: <Package size={18} />,
      submenu: [
        { name: "Total Products", path: "/products" },
        { name: "Products View", path: "/products/view" },
        { name: "Products Create", path: "/products/create" },
      ],
    },
    {
      title: "Payment",
      icon: <CreditCard size={18} />,
      submenu: [
        { name: "Payment", path: "/payment" },
        { name: "Invoice View", path: "/invoice/view" },
        { name: "Invoice Create", path: "/invoice/create" },
      ],
    },
    {
      title: "Installation",
      icon: <Wrench size={18} />,
      submenu: [
        { name: "Installation", path: "/installation" },
        { name: "Installation View", path: "/installation/view" },
        { name: "Installation Create", path: "/installation/create" },
      ],
    },
  ];

  return (
    <>
     
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          ${collapsed ? "w-20" : "w-64"}
          bg-white border-r border-gray-200
          p-4 overflow-y-auto min-h-screen
          transform transition-all duration-300
          ${isMobile && collapsed ? "-translate-x-full" : "translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="p-2 flex items-center justify-center">
          {collapsed ? (
            <div className="h-10 w-10 bg-hoverblue text-white flex items-center justify-center rounded-lg text-xl font-semibold">
              D
            </div>
          ) : (
            <img src="/images/logo-full.png" alt="logo" />
          )}
        </div>

        <div className="w-full h-px bg-gray-300 mt-3" />

        {!collapsed && (
          <div className="text-xs text-primary font-semibold p-4">
            NAVIGATION
          </div>
        )}

        {sidebarLinks.map((link, idx) => (
          <div key={idx} className="mb-2">
            {/* Main Menu */}
            <button
              onClick={() => {
                if (!collapsed) {
                  setOpenSubmenu(openSubmenu === idx ? null : idx);
                }
              }}
              className={`
                w-full flex items-center rounded-md transition duration-200
                ${collapsed ? "justify-center py-3" : "justify-between px-4 py-2"}
                hover:bg-gray-100 text-gray-800 font-medium
              `}
            >
              <div className={`flex items-center ${collapsed ? "" : "gap-3"}`}>
                {link.icon}
                {!collapsed && <span className="text-sm">{link.title}</span>}
              </div>

              {!collapsed &&
                (openSubmenu === idx ? <ChevronDown /> : <ChevronRight />)}
            </button>

            {/* Submenu */}
            {!collapsed && openSubmenu === idx && (
              <div className="ml-8 mt-1 flex flex-col space-y-1">
                {link.submenu.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    onClick={() => {
                      if (isMobile) setCollapsed(true);
                    }}
                    className={`
                      px-4 py-2 rounded-md text-sm transition
                      ${
                        location.pathname === sub.path
                          ? "bg-gray-300 text-primary font-semibold"
                          : "text-gray-700 hover:bg-gray-200"
                      }
                    `}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;


