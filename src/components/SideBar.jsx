import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  const sidebarLinks = [
    { title: "Dashboards", submenu: [{ name: "CRM", path: "/" }] },
    {
      title: "Customers",
      submenu: [
        { name: "Customers", path: "/customers" },
        { name: "Customers View", path: "/customers/view" },
        { name: "Customers Create", path: "/customers/create" },
      ],
    },
    {
      title: "Products",
      submenu: [
        { name: "Total Products", path: "/totalproducts" },
        { name: "Products View", path: "/products/view" },
        { name: "Products Create", path: "/products/create" },
      ],
    },
    {
      title: "Payment",
      submenu: [
        { name: "Payment", path: "/payment" },
        { name: "Invoice View", path: "/invoice/view" },
        { name: "Invoice Create", path: "/invoice/create" },
      ],
    },
    {
      title: "Installation",
      submenu: [
        { name: "Installation", path: "/installation" },
        { name: "Installation View", path: "/installation/view" },
        { name: "Installation Create", path: "/installation/create" },
      ],
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setOpenSidebar(true)}
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          w-64 bg-white border-r border-gray-200
          p-4 overflow-y-auto min-h-screen
          transform transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >

        {/* Logo */}
        <div className="p-2 flex items-center justify-center">
          <img src="/images/logo-full.png" alt="logo" />
        </div>

        <div className="w-full h-px bg-gray-300 mt-3"></div>

        <div className="text-xs text-primary font-semibold p-4">
          NAVIGATION
        </div>

        {sidebarLinks.map((link, idx) => (
          <div key={idx} className="mb-3">
            <button
              onClick={() =>
                setOpenSubmenu(openSubmenu === idx ? null : idx)
              }
              className="w-full flex justify-between items-center px-4 py-2 rounded-md hover:bg-gray-100 text-left font-medium text-gray-800 transition duration-200"
            >
              {link.title}
              <span className="text-gray-500">
                {openSubmenu === idx ? <ChevronDown /> : <ChevronRight />}
              </span>
            </button>

            {openSubmenu === idx && (
              <div className="ml-4 mt-1 flex flex-col space-y-1">
                {link.submenu.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    onClick={() => setOpenSidebar(false)}
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
