import {
  Bell,
  Clock,
  Plus,
  Menu,
  Funnel,
  SignalHigh,
  Paperclip,
  Star,
  Layers,
} from "lucide-react";
import Button from "./Button";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";

const Header = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="bg-white">
      {/* Upper Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b-2 border-gray-200">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu />
          </button>
          <div className="rounded-full bg-hoverblue flex items-center justify-center h-6 w-6 text-white">
            <Plus className="h-3 w-3" />
          </div>
          <Button
            size="sm"
            fullWidth={false}
            className="rounded-sm text-xs text-primary font-semibold"
          >
            MEGA MENU
          </Button>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <div className="relative inline-block">
            <Clock className="text-darkgreytone text-xl" />
            <span
              className="absolute top-0 right-0 inline-flex items-center justify-center
               px-2 py-1 text-xs font-bold leading-none text-white
               bg-green-400 rounded-full transform translate-x-1/2 -translate-y-1/2"
            >
              2
            </span>
          </div>

          <div className="relative inline-block">
            <Bell className="text-darkgreytone text-xl" />
            <span
              className="absolute top-0 right-0 inline-flex items-center justify-center
               px-2 py-1 text-xs font-bold leading-none text-white
               bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2"
            >
              3
            </span>
          </div>

          <div className="rounded-full h-12 w-12 flex items-center justify-center">
            <img src="/images/alexandra.png" alt="" className="rounded-full" />
          </div>
        </div>
      </div>

      {/* Lower Header */}
      <div className="bg-white shadow-md px-6 py-2 flex justify-between items-center">
        <div>
          <Breadcrumb />
        </div>
        <div>
          {/* Dashboard Header */}
          {pathname === "/" && (
            <div className="flex gap-2">
              <Button
                className="border-2 border-greytone rounded-md text-primary text-xs"
                size="sm"
                fullWidth={false}
              >
                Jan 14, 26 - Feb 12, 26
              </Button>
              <Button
                className="border-2 border-greytone rounded-md text-darkgreytone text-xs"
                size="sm"
                fullWidth={false}
              >
                <Funnel className="h-4 w-4" />
                FILTER
              </Button>
            </div>
          )}

          {/* Customers, Products, Payment and Installation Header */}
          {(pathname === "/customers" || pathname === "/products" || pathname === "/payment" || pathname === "/installation") && (
            <div className="flex gap-2">
              <Button
                className="border-2 border-greytone rounded-md text-primary text-xs flex items-center justify-center h-10 w-10"
                size="sm"
                fullWidth={false}
              >
                <SignalHigh className="h-4 w-4" />
              </Button>
              <Button
                className="border-2 border-greytone rounded-md text-primary text-xs flex items-center justify-center h-10 w-10"
                size="sm"
                fullWidth={false}
              >
                <Funnel className="h-4 w-4" />
              </Button>
              <Button
                className="border-2 border-greytone rounded-md text-primary text-xs flex items-center justify-center h-10 w-10"
                size="sm"
                fullWidth={false}
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button
                className="bg-hoverblue text-white text-xs flex items-center justify-center"
                size="sm"
              >
                <Plus className="h-4 w-4" />
                CREATE CUSTOMER
              </Button>
            </div>
          )}

          {/* Customers, Products, Payment and Installation View Header */}
          {(pathname === "/customers/view" || pathname === "/products/view" || pathname === "/invoice/view" || pathname === "/installation/view") && (
            <div className="flex gap-2">
              <Button
                className="border-2 border-greytone rounded-md text-primary text-xs flex items-center justify-center h-10 w-10"
                size="sm"
                fullWidth={false}
              >
                <Star className="h-4 w-4" />
              </Button>
              <Button
                className="bg-hoverblue text-white text-xs flex items-center justify-center"
                size="sm"
              >
                <Plus className="h-4 w-4" />
                CREATE CUSTOMER
              </Button>
            </div>
          )}

          {/* Customers, Products, Payment and Installation Create Header */}
          {(pathname === "/customers/create" || pathname === "/products/create" || pathname === "/invoice/create" || pathname === "/installation/create") && (
            <div className="flex gap-2">
              <Button
                className="border-2 border-greytone text-primary text-xs flex items-center justify-center"
                size="sm"
              >
                <Layers className="h-4 w-4" />
                SAVE DRAFT
              </Button>
              <Button
                className="bg-hoverblue text-white text-xs flex items-center justify-center"
                size="sm"
              >
                <Plus className="h-4 w-4" />
                <p className="text-xs">CREATE</p>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
