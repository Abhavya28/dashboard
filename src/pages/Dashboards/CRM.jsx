import {
  ActivityIcon,
  Airplay,
  Briefcase,
  Cast,
  DollarSign,
  Dot,
  EllipsisVertical,
  FileText,
  LineChart,
  Star,
} from "lucide-react";
import React, { Activity } from "react";

const CRM = () => {

  const users = [
  {
    id: 1,
    name: "Archie Cantones",
    email: "arcie.tones@gmail.com",
    avatar: "/images/Archie.png",
    proposal: "Sent",
    date: "11/06/2023 10:53",
    status: "Completed",
  },
  {
    id: 2,
    name: "Holmes Cherryman",
    email: "golms.chan@gmail.com",
    avatar: "/images/Holmes.png",
    proposal: "New",
    date: "11/06/2023 10:53",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Malanie Hanvey",
    email: "lanie.nveyn@gmail.com",
    avatar: "/images/Malanie.png",
    proposal: "Sent",
    date: "11/06/2023 10:53",
    status: "Completed",
  },
  {
    id: 4,
    name: "Kenneth Hune",
    email: "nneth.une@gmail.com",
    avatar: "/images/Kenneth.png",
    proposal: "Returning",
    date: "11/06/2023 10:53",
    status: "Not Interested",
  },
  {
    id: 5,
    name: "Valentine Maton",
    email: "alennie.aton@gmail.com",
    avatar: "/images/Valentine.png",
    proposal: "Sent",
    date: "11/06/2023 10:53",
    status: "Completed",
  },
];

  return (
    <div className="">
      {/* 4 Divs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {/* Invoices Awaiting Payment */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <div className="flex rounded-full bg-greytone w-12 h-12 items-center justify-center">
                  <DollarSign className="text-black h-5" />
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-primary font-bold text-xl">45/76</h1>
                  <p className="text-primary font-semibold">
                    Invoices Awaiting Payment
                  </p>
                </div>
              </div>
              <div>
                <EllipsisVertical className="text-primary hover:text-[#3454D1] h-5" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-darkgreytone">Invoices Awaiting</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-primary text-sm">$5,569</p>
                  <p className="text-darkgreytone text-sm">(56%)</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-300 mt-3"></div>
            </div>
          </div>
        </div>

        {/* Converted Leads */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <div className="flex rounded-full bg-greytone w-12 h-12 items-center justify-center">
                  <Cast className="text-black h-5" />
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-primary font-bold text-xl">48/86</h1>
                  <p className="text-primary font-semibold">Converted Leads</p>
                </div>
              </div>
              <div>
                <EllipsisVertical className="text-primary hover:text-[#3454D1] h-5" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-darkgreytone">Converted Leads</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-primary text-sm">52 Completed</p>
                  <p className="text-darkgreytone text-sm">(63%)</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-300 mt-3"></div>
            </div>
          </div>
        </div>

        {/* Projects In Progress */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <div className="flex rounded-full bg-greytone w-12 h-12 items-center justify-center">
                  <Briefcase className="text-black h-5" />
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-primary font-bold text-xl">16/20</h1>
                  <p className="text-primary font-semibold">
                    Projects In Progress
                  </p>
                </div>
              </div>
              <div>
                <EllipsisVertical className="text-primary hover:text-[#3454D1] h-5" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-darkgreytone">
                    Projects In Progress
                  </p>
                </div>
                <div className="flex gap-1">
                  <p className="text-primary text-sm">16 Completed</p>
                  <p className="text-darkgreytone text-sm">(78%)</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-300 mt-3"></div>
            </div>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <div className="flex rounded-full bg-greytone w-12 h-12 items-center justify-center">
                  <ActivityIcon className="text-black h-5" />
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-primary font-bold text-xl">46.59%</h1>
                  <p className="text-primary font-semibold">Conversion Rate</p>
                </div>
              </div>
              <div>
                <EllipsisVertical className="text-primary hover:text-[#3454D1] h-5" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-darkgreytone">Conversion Rate</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-primary text-sm">$2,254</p>
                  <p className="text-darkgreytone text-sm">(46%)</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-300 mt-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Record + Total Sales */}
      <div className="flex flex-col md:flex-row gap-6 p-4 items-stretch">
        {/* Payment Record */}
        <div className="bg-white shadow-md rounded-xl p-2 md:basis-[65%] w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-primary font-bold text-lg">Payment Record</h1>
            <div className="rounded-full h-6 w-6 border-2 border-greytone flex items-center justify-center">
              <EllipsisVertical className="h-4 text-primary hover:text-[#3454D1]" />
            </div>
          </div>
          <div className="w-full h-px bg-gray-300 mt-3"></div>

          <div>graph</div>

          <div className="w-full h-px bg-gray-300 mt-3"></div>

          {/* 4 divs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div className="border-2 border-dotted border-greytone flex flex-col p-2">
              <p className="text-darkgreytone text-sm">Awaiting</p>
              <p className="text-lg text-primary font-semibold">$5,486</p>
              <div className="w-full h-px bg-gray-300 mt-3"></div>
            </div>

            <div className="border-2 border-dotted border-greytone flex flex-col p-2">
              <p className="text-darkgreytone text-sm">Completed</p>
              <p className="text-lg text-primary font-semibold">$9,275</p>
              <div className="w-full h-px bg-gray-300 mt-3"></div>
            </div>

            <div className="border-2 border-dotted border-greytone flex flex-col p-2">
              <p className="text-darkgreytone text-sm">Rejected</p>
              <p className="text-lg text-primary font-semibold">$3,868</p>
              <div className="w-full h-px bg-gray-300 mt-3"></div>
            </div>

            <div className="border-2 border-dotted border-greytone flex flex-col p-2">
              <p className="text-darkgreytone text-sm">Revenue</p>
              <p className="text-lg text-primary font-semibold">$50,668</p>
              <div className="w-full h-px bg-gray-300 mt-3"></div>
            </div>
          </div>
        </div>

        {/* Total Sales */}
        <div className="bg-white shadow-md rounded-xl p-2 md:basis-[35%] w-full">
          <div>chart</div>
          {/* 3 divs */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b-2 border-dotted border-graytone p-2">
              <div className="flex items-center justify-center gap-4">
                <div className="flex justify-center items-center border-2 border-greytone">
                  <img
                    src="/images/shopify.png"
                    alt="shopify"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-primary font-semibold">
                    Shopify eCommerce Store
                  </p>
                  <p className="text-darkgreytone text-sm">Development</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-semibold">$1200</p>
                <p className="text-darkgreytone text-sm">6 Projects</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-b-2 border-dotted border-graytone p-2">
              <div className="flex items-center justify-center gap-4">
                <div className="flex justify-center items-center border-2 border-greytone">
                  <img
                    src="/images/ios-app.png"
                    alt="ios-app"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-primary font-semibold">
                    iOS Apps Development
                  </p>
                  <p className="text-darkgreytone text-sm">Development</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-semibold">$1450</p>
                <p className="text-darkgreytone text-sm">3 Projects</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-2">
              <div className="flex items-center justify-center gap-4">
                <div className="flex justify-center items-center border-2 border-greytone">
                  <img
                    src="/images/figma.png"
                    alt="figma"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-primary font-semibold">
                    Figma Dashboard Design
                  </p>
                  <p className="text-darkgreytone text-sm">UI/UX Design</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-semibold">$1250</p>
                <p className="text-darkgreytone text-sm">5 Projects</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-300 mt-3"></div>

          <div className="flex items-center justify-center p-4">
            <p className="text-primary font-semibold">FULL DETAILS</p>
          </div>
        </div>
      </div>

      {/* Tasks completed + New tasks + Project Done */}
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Tasks Completed */}
        <div className="bg-white shadow-md rounded-xl p-4 md:p-2 md:flex-1 w-full h-full">
          <div className="flex justify-between items-center p-4">
            <div className="flex gap-4">
              <div className="rounded-full border-2 border-greytone h-12 w-12 flex items-center justify-center">
                <Star className="text-darkgreytone" />
              </div>
              <div className="flex flex-col">
                <p className="text-primary font-semibold">Tasks Completed</p>
                <p className="text-darkgreytone text-sm">22/35 completed</p>
              </div>
            </div>
            <div>
              <p className="text-primary font-bold text-2xl">22/35</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>graph</div>
            <div className="flex flex-col">
              <p className="text-primary">28% more</p>
              <p className="text-darkgreytone">from last week</p>
            </div>
          </div>
        </div>

        {/* New Tasks */}
        <div className="bg-white shadow-md rounded-xl p-4 md:p-2 md:flex-1 w-full h-full">
          <div className="flex justify-between items-center p-4">
            <div className="flex gap-4">
              <div className="rounded-full border-2 border-greytone h-12 w-12 flex items-center justify-center">
                <FileText className="text-darkgreytone" />
              </div>
              <div className="flex flex-col">
                <p className="text-primary font-semibold">New Tasks</p>
                <p className="text-darkgreytone text-sm">0/20 tasks</p>
              </div>
            </div>
            <div>
              <p className="text-primary font-bold text-2xl">5/20</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>graph</div>
            <div className="flex flex-col">
              <p className="text-primary">34% more</p>
              <p className="text-darkgreytone">from last week</p>
            </div>
          </div>
        </div>

        {/* Projects Done */}
        <div className="bg-white shadow-md rounded-xl p-4 md:p-2 md:flex-1 w-full h-full">
          <div className="flex justify-between items-center p-4">
            <div className="flex gap-4">
              <div className="rounded-full border-2 border-greytone h-12 w-12 flex items-center justify-center">
                <Airplay className="text-darkgreytone" />
              </div>
              <div className="flex flex-col">
                <p className="text-primary font-semibold">Project Done</p>
                <p className="text-darkgreytone text-sm">20/30 project</p>
              </div>
            </div>
            <div>
              <p className="text-primary font-bold text-2xl">20/30</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>graph</div>
            <div className="flex flex-col">
              <p className="text-primary">42% more</p>
              <p className="text-darkgreytone">from last week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leads Overview + Latest Leads */}
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Leads Overview */}
        <div className="bg-white shadow-md rounded-xl p-2 md:basis-[35%] w-full">
          <div className="flex flex-col gap-4 p-4 ">
            <div className="flex items-center justify-between">
              <p className="text-primary font-semibold text-lg">
                Leads Overview
              </p>
              <div className="rounded-full h-6 w-6 border-2 border-greytone flex items-center justify-center">
                <EllipsisVertical className="h-4 text-primary hover:text-[#3454D1]" />
              </div>
            </div>

            <div className="w-full h-px bg-gray-300 mt-3"></div>
          </div>

          {/* Pie Chart */}
          <div>pie chart</div>

          {/* Grid 3*3 */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex group border-2 border-dotted border-greytone">
              <Dot className="h-12 w-12  text-[#3454D1]" />
              <div className="flex gap-1 items-center">
                <p className="font-semibold text-primary group-hover:text-[#3454D1]">
                  New
                </p>
                <p className="text-darkgreytone font-semibold text-xs">(20K)</p>
              </div>
            </div>

            <div className="flex group border-2 border-dotted border-greytone">
              <Dot className="h-12 w-12  text-[#0D519E]" />
              <div className="flex gap-1 items-center">
                <p className="font-semibold text-primary group-hover:text-[#3454D1]">
                  Contacted
                </p>
                <p className="text-darkgreytone font-semibold text-xs">(15K)</p>
              </div>
            </div>

            <div className="flex group border-2 border-dotted border-greytone">
              <Dot className="h-12 w-12  text-[#1976D2]" />
              <div className="flex gap-1 items-center">
                <p className="font-semibold text-primary group-hover:text-[#3454D1]">
                  Qualified
                </p>
                <p className="text-darkgreytone font-semibold text-xs">(10K)</p>
              </div>
            </div>

            <div className="flex group border-2 border-dotted border-greytone">
              <Dot className="h-12 w-12  text-[#1E88E5]" />
              <div className="flex gap-1 items-center">
                <p className="font-semibold text-primary group-hover:text-[#3454D1]">
                  Working
                </p>
                <p className="text-darkgreytone font-semibold text-xs">(18K)</p>
              </div>
            </div>

            <div className="flex group border-2 border-dotted border-greytone">
              <Dot className="h-12 w-12  text-[#2196F3]" />
              <div className="flex gap-1 items-center">
                <p className="font-semibold text-primary group-hover:text-[#3454D1]">
                  Customer
                </p>
                <p className="text-darkgreytone font-semibold text-xs">(10K)</p>
              </div>
            </div>

            <div className="flex group border-2 border-dotted border-greytone">
              <Dot className="h-12 w-12  text-[#42A5F5]" />
              <div className="flex gap-1 items-center">
                <p className="font-semibold text-primary group-hover:text-[#3454D1]">
                  Proposal
                </p>
                <p className="text-darkgreytone font-semibold text-xs">(15K)</p>
              </div>
            </div>

            <div className="flex group border-2 border-dotted border-greytone">
              <Dot className="h-12 w-12  text-[#64B5F6]" />
              <div className="flex gap-1 items-center">
                <p className="font-semibold text-primary group-hover:text-[#3454D1]">
                  Leads
                </p>
                <p className="text-darkgreytone font-semibold text-xs">(16K)</p>
              </div>
            </div>

            <div className="flex group border-2 border-dotted border-greytone">
              <Dot className="h-12 w-12  text-[#64B5F6]" />
              <div className="flex gap-1 items-center">
                <p className="font-semibold text-primary group-hover:text-[#3454D1]">
                  Progress
                </p>
                <p className="text-darkgreytone font-semibold text-xs">(14K)</p>
              </div>
            </div>

            <div className="flex group border-2 border-dotted border-greytone">
              <Dot className="h-12 w-12  text-[#AAD6FA]" />
              <div className="flex gap-1 items-center">
                <p className="font-semibold text-primary group-hover:text-[#3454D1]">
                  Others
                </p>
                <p className="text-darkgreytone font-semibold text-xs">(10K)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Leads */}
        <div className="bg-white shadow-md rounded-xl p-2 md:basis-[65%] w-full">
          <div className="flex flex-col gap-4 p-4 ">
            <div className="flex items-center justify-between">
              <p className="text-primary font-semibold text-lg">Latest Leads</p>
              <div className="rounded-full h-6 w-6 border-2 border-greytone flex items-center justify-center">
                <EllipsisVertical className="h-4 text-primary hover:text-[#3454D1]" />
              </div>
            </div>

            <div className="w-full h-px bg-gray-300 mt-3"></div>
          </div>

          {/* Table Data */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Head */}
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="p-4">USERS</th>
                  <th className="p-4">PROPOSAL</th>
                  <th className="p-4">DATE</th>
                  <th className="p-4">STATUS</th>
                  <th className="p-4 text-center">ACTIONS</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b last:border-none hover:bg-gray-100 transition"
                  >
                    {/* User column */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <p className="text-primary font-semibold">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>

                    {/* Proposal */}
                    <td className="p-4">
                      <span className="px-3 py-1 text-sm rounded-md bg-gray-100 text-gray-700">
                        {user.proposal}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="p-4 text-sm text-gray-700">{user.date}</td>

                    {/* Status */}
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-medium ${
                          user.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : user.status === "In Progress"
                              ? "bg-indigo-100 text-indigo-700"
                              : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-center">
                      <button className="text-gray-500 hover:text-gray-800">
                        ⋮
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full h-px bg-gray-200"></div>

          {/* Buttons */}
          <div className="p-2">
            <div className="rounded-full flex items-center justify-center h-8 w-8 border-2 border-greytone text-primary hover:text-white hover:bg-[#3454D1]">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRM;
