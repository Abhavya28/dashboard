import { Bell, Clock, Plus } from "lucide-react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="bg-white">
      {/* Upper Header */}
      <div className="flex items-center justify-between p-6 border-b-2 border-gray-200">
        <div className="flex gap-4 items-center">
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
      <div className="bg-white">
        
      </div>
    </div>
  );
};

export default Header;
