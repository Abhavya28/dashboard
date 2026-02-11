import { Ellipsis, Eye } from "lucide-react";
import React, { useState } from "react";

const Customers = () => {
  const customersData = [
    {
      id: 1,
      name: "Alexandra Della",
      img: "/images/alexandra.png",
      email: "alex.della@outlook.com",
      phone: "+1 (375) 9632 548",
      createdAt: "2023-04-05 12:05 AM",
      status: "Active",
      tags: ["Team", "Primary", "Updates", "Personal", "Promotions"],
    },
    {
      id: 2,
      name: "Nancy Elliot",
      img: "/images/alexandra.png",
      email: "nancy.elliot@outlook.com",
      phone: "(375) 8523 456",
      createdAt: "2023-04-06 02:52 PM",
      status: "Active",
      tags: ["Team", "Primary", "Updates", "Personal", "Promotions"],
    },
    {
      id: 3,
      name: "Green Cute",
      img: "/images/alexandra.png",
      email: "green.cute@outlook.com",
      phone: "(845) 9632 874",
      createdAt: "2023-04-08 08:34 PM",
      status: "Active",
      tags: ["Bugs", "Team", "Primary", "Updates", "Personal"],
    },
    {
      id: 4,
      name: "Henry Leach",
      img: "/images/alexandra.png",
      email: "henry.leach@outlook.com",
      phone: "(258) 9514 657",
      createdAt: "2023-04-10 05:25 PM",
      status: "Inactive",
      tags: ["VIP", "Bugs", "Team", "Primary", "Updates"],
    },
    {
      id: 5,
      name: "Alexandra Della",
      img: "/images/alexandra.png",
      email: "alex.della@outlook.com",
      phone: "+1 (375) 9632 548",
      createdAt: "2023-04-05 12:05 AM",
      status: "Active",
      tags: ["Team", "Primary", "Updates", "Personal", "Promotions"],
    },
    {
      id: 6,
      name: "Nancy Elliot",
      img: "/images/alexandra.png",
      email: "nancy.elliot@outlook.com",
      phone: "(375) 8523 456",
      createdAt: "2023-04-06 02:52 PM",
      status: "Active",
      tags: ["Team", "Primary", "Updates", "Personal", "Promotions"],
    },
    {
      id: 7,
      name: "Green Cute",
      img: "/images/alexandra.png",
      email: "green.cute@outlook.com",
      phone: "(845) 9632 874",
      createdAt: "2023-04-08 08:34 PM",
      status: "Active",
      tags: ["Bugs", "Team", "Primary", "Updates", "Personal"],
    },
    {
      id: 8,
      name: "Henry Leach",
      img: "/images/alexandra.png",
      email: "henry.leach@outlook.com",
      phone: "(258) 9514 657",
      createdAt: "2023-04-10 05:25 PM",
      status: "Inactive",
      tags: ["VIP", "Bugs", "Team", "Primary", "Updates"],
    },
    {
      id: 9,
      name: "Green Cute",
      img: "/images/alexandra.png",
      email: "green.cute@outlook.com",
      phone: "(845) 9632 874",
      createdAt: "2023-04-08 08:34 PM",
      status: "Active",
      tags: ["Bugs", "Team", "Primary", "Updates", "Personal"],
    },
    {
      id: 10,
      name: "Henry Leach",
      img: "/images/alexandra.png",
      email: "henry.leach@outlook.com",
      phone: "(258) 9514 657",
      createdAt: "2023-04-10 05:25 PM",
      status: "Inactive",
      tags: ["VIP", "Bugs", "Team", "Primary", "Updates"],
    },
  ];

  const statusOptions = ["Active", "Inactive", "Declined"];

  // Status for each customer
  const [statuses, setStatuses] = useState(
    customersData.reduce((acc, cur) => ({ ...acc, [cur.id]: cur.status }), {}),
  );

  // Dropdown open state per customer
  const [openDropdown, setOpenDropdown] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleStatusChange = (id, newStatus) => {
    setStatuses((prev) => ({ ...prev, [id]: newStatus }));
    setOpenDropdown((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm text-gray-700">
              <th className="p-4">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded bg-greytone checked:bg-hoverblue cursor-pointer"
                />
              </th>
              <th className="p-4">CUSTOMERS</th>
              <th className="p-4">EMAIL</th>
              <th className="p-4">GROUP</th>
              <th className="p-4">PHONE</th>
              <th className="p-4">DATE</th>
              <th className="p-4">STATUS</th>
              <th className="p-4 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {customersData.map((customer) => (
              <tr
                key={customer.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Checkbox */}
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded bg-greytone checked:bg-hoverblue cursor-pointer"
                  />
                </td>

                {/* Customer */}
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={customer.img}
                    alt={customer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="font-semibold">{customer.name}</p>
                </td>

                {/* Email */}
                <td className="p-4">{customer.email}</td>

                {/* Group */}
                <td className="p-4 max-w-[140px]">
                  <div className="max-h-20 overflow-y-auto rounded-lg border border-gray-200 p-1 space-y-1">
                    {customer.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="text-sm px-2 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-default"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </td>

                {/* Phone */}
                <td className="p-4">{customer.phone}</td>

                {/* Date */}
                <td className="p-4 text-sm text-gray-500">
                  {customer.createdAt}
                </td>

                {/* Status Dropdown */}
                <td className="p-4 relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(customer.id);
                    }}
                    className={`w-full text-left px-3 py-2 rounded border ${
                      statuses[customer.id] === "Active"
                        ? "border-green-500 text-green-600"
                        : statuses[customer.id] === "Inactive"
                          ? "border-yellow-500 text-yellow-600"
                          : "border-red-500 text-red-600"
                    }`}
                  >
                    {statuses[customer.id]}
                  </button>

                  {openDropdown[customer.id] && (
                    <div className="absolute mt-1 w-full rounded border bg-white shadow z-20">
                      {statusOptions.map((status) => (
                        <div
                          key={status}
                          className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                          onClick={() =>
                            handleStatusChange(customer.id, status)
                          }
                        >
                          {status}
                        </div>
                      ))}
                    </div>
                  )}
                </td>

                {/* Actions */}
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-3">
                    <div className="text-gray-500 hover:text-hoverblue rounded-full border-2 border-greytone h-8 w-8 flex items-center justify-center">
                      <Eye className="h-6 w-6"/>
                    </div>
                    <div className="text-gray-500 hover:text-hoverblue rounded-full border-2 border-greytone h-8 w-8 flex items-center justify-center">
                      <Ellipsis className="h-6 w-6"/>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
