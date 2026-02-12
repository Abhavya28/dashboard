import {
  MapPin,
  Phone,
  Mail,
  Trash2,
  SquarePen,
  X,
  Send,
  Eye,
  MoreVertical,
} from "lucide-react";
import Button from "../../components/Button";
import { useState } from "react";

const data = [
  { id: "#258963", date: "02 NOV, 2022", amount: "$350", status: "Completed" },
  { id: "#987456", date: "05 DEC, 2022", amount: "$590", status: "Pending" },
  { id: "#456321", date: "31 NOV, 2022", amount: "$450", status: "Rejected" },
  { id: "#357951", date: "03 JAN, 2023", amount: "$250", status: "Completed" },
  { id: "#258963", date: "02 NOV, 2022", amount: "$350", status: "Completed" },
  { id: "#357951", date: "03 JAN, 2023", amount: "$250", status: "Completed" },
];

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-green-100 text-green-600";
    case "pending":
      return "bg-yellow-100 text-yellow-600";
    case "rejected":
      return "bg-red-100 text-red-600";
    default:
      return "";
  }
};
const CustomersView = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-10 w-full lg:w-[30%]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-darkgreytone">
                <div className="flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <p className="text-sm">Location</p>
              </div>
              <div className="text-primary font-semibold">
                <p className="hover:text-hoverblue">California, USA</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-darkgreytone">
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <p className="text-sm">Phone</p>
              </div>
              <div className="text-primary font-semibold">
                <p className="hover:text-hoverblue">+01 (375) 2589 645</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-darkgreytone">
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <p className="text-sm">Email</p>
              </div>
              <div className="text-primary font-semibold">
                <p className="hover:text-hoverblue">alex.della@outlook.com</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="bg-white text-darkgreytone">
              <Trash2 />
              <p className="text-sm">DELETE</p>
            </Button>
            <Button className="bg-hoverblue text-white">
              <SquarePen />
              <p className="text-sm">EDIT PROFILE</p>
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2 bg-white shadow-md rounded-xl w-full lg:w-[70%]">
          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-6 ">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-[50%] pt-2 pb-4 text-lg font-semibold transition
              ${
                activeTab === "overview"
                  ? "text-hoverblue border-b-2 border-hoverblue bg-[#F0F2FC]"
                  : "text-darkgreytone"
              }`}
            >
              Overview
            </button>

            <button
              onClick={() => setActiveTab("billing")}
              className={`w-[50%] pt-2 pb-3 text-lg font-semibold transition
              ${
                activeTab === "billing"
                  ? "text-hoverblue border-b-2 border-hoverblue bg-[#F0F2FC]"
                  : "text-darkgreytone"
              }`}
            >
              Billing
            </button>
          </div>

          {/* Tab Content */}
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-4 p-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-primary text-lg">
                    Profile About:
                  </h1>
                  <button className="border-2 border-greytone text-primary text-xs font-semibold p-1">
                    UPDATES
                  </button>
                </div>

                <p className="text-sm text-darkgreytone">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam minus doloribus in, autem veniam sunt eius
                  laudantium ipsam magni blanditiis libero a. Placeat alias
                  saepe a optio repudiandae harum quaerat!
                </p>
                <p className="text-sm text-darkgreytone">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam minus doloribus in, autem veniam sunt eius
                  laudantium ipsam magni blanditiis libero a. Placeat alias
                  saepe a optio repudiandae harum quaerat!
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-primary text-md">
                    Profile About:
                  </h1>
                  <button className="border-2 border-greytone text-primary text-xs font-semibold p-1">
                    EDIT PROFILE
                  </button>
                </div>

                <div className="flex flex-col gap-4 text-darkgreytone">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Full Name:</p>
                    <p className="font-semibold sm:pl-10">Alexandra Della</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Surname:</p>
                    <p className="font-semibold sm:pl-10">Della</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Company:</p>
                    <p className="font-semibold sm:pl-10">WRAPCODERS</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Date of Birth:</p>
                    <p className="font-semibold sm:pl-10">26 May, 2000</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Mobile Number:</p>
                    <p className="font-semibold sm:pl-10">
                      +01 (375) 5896 3214
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Email Address:</p>
                    <p className="font-semibold sm:pl-10">
                      alex.della@outlook.com
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Location:</p>
                    <p className="font-semibold sm:pl-10">
                      California, United States
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Joining Date:</p>
                    <p className="font-semibold sm:pl-10">20 Dec, 2023</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Country:</p>
                    <p className="font-semibold sm:pl-10">United States</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Communication:</p>
                    <p className="font-semibold sm:pl-10">Email, Phone</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Allow Changes:</p>
                    <p className="font-semibold sm:pl-10">YES</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p>Website:</p>
                    <p className="font-semibold sm:pl-10">
                      https://wrapcoders.com
                    </p>
                  </div>
                </div>
              </div>

              {showBanner && (
                <div className="border border-dashed border-orange-300 bg-orange-50 rounded-xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-orange-600 font-semibold">
                      Your profile has not been updated yet!!!
                    </h3>

                    <p className="text-xs text-orange-500 mt-1">
                      LAST UPDATE: 26 DEC, 2023
                    </p>

                    <button className="mt-4 px-4 py-2 bg-orange-200 text-orange-700 text-sm font-semibold rounded-md">
                      UPDATE NOW
                    </button>
                  </div>

                  <button onClick={() => setShowBanner(false)}>
                    <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === "billing" && (
            <div className="space-y-4 p-8">
              {showBanner && (
                <div className="border border-dashed border-[#F0F9FA] bg-[#F0F9FA] rounded-xl p-6 flex justify-between items-start">
                  <div className="text-[#41B2C4]">
                    <h3 className="font-semibold">
                      Your profile has not been updated yet!!!
                    </h3>

                    <p className="text-xs mt-1">LAST UPDATE: 26 DEC, 2023</p>

                    <button className="mt-4 px-4 py-2 bg-blue-200 text-[#41B2C4] text-xs font-semibold rounded-md hover:bg-blue-300">
                      UPDATE NOW
                    </button>
                  </div>

                  <button onClick={() => setShowBanner(false)}>
                    <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                  </button>
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-primary text-lg">
                    Subscription & Plan:
                  </h1>
                  <button className="border-2 border-greytone text-primary text-xs font-semibold p-1">
                    4 DAYS REMAINING
                  </button>
                </div>
              </div>

              <div className="border-2 border-dotted border-grey-300 p-6 flex flex-col gap-4">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <p className="text-primary font-semibold">
                      Your current plan is
                    </p>
                    <button className="bg-[#3454D1] text-white rounded-md p-1 items-center justify-center">
                      Team Plan
                    </button>
                  </div>
                  <p className="text-darkgreytone text-sm">
                    A simple start for everyone
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-primary font-bold text-xl">
                    $29.99 /{" "}
                    <span className="font-semibold text-xs italic">Month</span>
                  </p>
                  <p className="text-darkgreytone text-sm">
                    Billed Monthly / Next payment on 12/10/2023 for{" "}
                    <span className="font-semibold text-primary"> $62.48</span>
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    fullWidth={false}
                    className="text-red-600 border-none"
                  >
                    Cancel Plan
                  </Button>
                  <Button size="sm" fullWidth={false} className="text-primary">
                    UPDATE PLAN
                  </Button>
                </div>
              </div>

              <div className="border-2 border-dotted border-[#F2F3F8] bg-[#F2F3F8] p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-primary font-semibold">BASIC</p>
                  <p className="text-darkgreytone text-sm">
                    Starter plan for individuals.
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-darkgreytone text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quod ipsa id corrupti modi, impedit exercitationem harum
                    voluptates reiciendis.
                  </p>
                </div>

                <div className="flex gap-2">
                  <p className="text-primary text-lg font-bold">
                    $12.99 /
                    <span className="font-semibold text-xs italic"> Month</span>
                  </p>
                </div>
              </div>

              <div className="border-2 border-dotted border-[#F2F3F8] bg-[#F2F3F8] p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-primary font-semibold">TEAM</p>
                  <p className="text-darkgreytone text-sm">
                    Collaborate up to 10 people.
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-darkgreytone text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quod ipsa id corrupti modi, impedit exercitationem harum
                    voluptates reiciendis.
                  </p>
                </div>

                <div className="flex gap-2">
                  <p className="text-primary text-lg font-bold">
                    $29.99 /
                    <span className="font-semibold text-xs italic"> Month</span>
                  </p>
                </div>
              </div>

              <div className="border-2 border-dotted border-[#F2F3F8] bg-[#F2F3F8] p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-primary font-semibold">ENTERPRISE</p>
                  <p className="text-darkgreytone text-sm">
                    For bigger businesses.
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-darkgreytone text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quod ipsa id corrupti modi, impedit exercitationem harum
                    voluptates reiciendis.
                  </p>
                </div>

                <div className="flex gap-2">
                  <p className="text-primary text-lg font-bold">
                    $49.99 /
                    <span className="font-semibold text-xs italic"> Month</span>
                  </p>
                </div>
              </div>

              <hr />

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-primary text-lg">
                    Payment Methords:
                  </h1>
                  <button className="border-2 border-greytone text-primary text-xs font-semibold p-1">
                    ADD METHOD
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((card) => (
                  <div
                    key={card}
                    className="flex flex-col sm:flex-row items-center sm:justify-between border-2 border-dotted border-gray-300 p-4 rounded-md"
                  >
                    {/* Left: Avatar + Info */}
                    <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>{" "}
                      {/* optional avatar */}
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-md text-primary">
                          Alexandra Della
                        </p>
                        <p className="text-sm text-darkgreytone">
                          5155 **** **** ****
                        </p>
                        <p className="uppercase text-xs text-darkgreytone">
                          Card expires at 12/24
                        </p>
                      </div>
                    </div>

                    {/* Right: Buttons */}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        fullWidth={false}
                        className="text-red-600 font-semibold border-none hover:bg-red-50"
                      >
                        Delete
                      </Button>
                      <Button
                        size="sm"
                        fullWidth={false}
                        className="text-primary font-semibold border-none bg-[#F1F2F7] hover:bg-[#e0e1eb]"
                      >
                        EDIT
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              {/* Billig History */}
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-primary text-lg">
                  Billing History:
                </h1>
                <button className="border-2 border-greytone text-primary text-xs font-semibold p-1">
                  ADD HISTORY
                </button>
              </div>

              {/* Billing History Table */}
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="">
                    <tr className="text-primary text-xs font-medium uppercase tracking-wider">
                      <th className="px-6 py-3 text-left ">ID</th>
                      <th className="px-6 py-3 text-left ">Date</th>
                      <th className="px-6 py-3 text-left ">Amount</th>
                      <th className="px-6 py-3 text-left ">Status</th>
                      <th className="px-6 py-3 text-right ">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-primary">
                          {row.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                          {row.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {row.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                              row.status,
                            )}`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right flex justify-end items-center gap-2 text-primary">
                          <button className="p-1 rounded-full">
                            <Send size={12} />
                          </button>
                          <button className="p-1 rounded-full">
                            <Eye size={12} />
                          </button>
                          <button className="p-1 rounded-full">
                            <MoreVertical size={12} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomersView;
