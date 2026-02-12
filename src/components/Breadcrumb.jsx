import { Link, useLocation } from "react-router-dom";

const routeTitleMap = {
  "": "Dashboard",
  customers: "Customers",
  products: "Products",
  payment: "Payment",
  installation: "Installation",
  create: "Create",
  view: "View",
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Page heading (Customers | Products | Dashboard)
  const pageTitle =
    pathnames.length === 0
      ? "Dashboard"
      : routeTitleMap[pathnames[0]] || pathnames[0];

  return (
    <div className="flex gap-2 items-center p-2">
      {/* PAGE TITLE */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800 mb-1">
          {pageTitle}
        </h1>
      </div>

      <div className="h-6 w-px bg-gray-300" />

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>

        {pathnames.map((segment, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <div key={to} className="flex items-center gap-2">
              <span className="text-gray-300">{">"}</span>

              {isLast ? (
                <span className="text-gray-400">
                  {routeTitleMap[segment] || segment}
                </span>
              ) : (
                <Link to={to} className="hover:text-primary">
                  {routeTitleMap[segment] || segment}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
