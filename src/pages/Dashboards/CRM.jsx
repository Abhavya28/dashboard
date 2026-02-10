import { DollarSign, EllipsisVertical, LineChart } from "lucide-react";
import React from "react";

const CRM = () => {
  return (
    <div className="">
      {/* 4 Divs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
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
                  <DollarSign className="text-black h-5" />
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
                  <DollarSign className="text-black h-5" />
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
                  <DollarSign className="text-black h-5" />
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
      <div className="grid md:grid-cols-2 gap-10">
        {/* Payment Record */}
        <div className="bg-white shadow-md rounded-xl p-2">
          <div className="flex justify-between items-center">
            <h1 className="text-primary font-bold text-lg">Payment Record</h1>
            <div className="rounded-full h-6 w-6 border-2 border-darkgreytone flex items-center justify-center">
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

        <div className="bg-white shadow-md rounded-xl p-2">
          <div>chart</div>
          {/* 3 divs */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b-2 border-dotted border-graytone p-2">
              <div className="flex items-center justify-center gap-4">
                <div className="flex justify-center items-center border-2 border-greytone">img</div>
                <div className="flex flex-col">
                  <p className="text-primary font-semibold">Shopify eCommerce Store</p>
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
                <div className="flex justify-center items-center border-2 border-greytone">img</div>
                <div className="flex flex-col">
                  <p className="text-primary font-semibold">Shopify eCommerce Store</p>
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
                <div className="flex justify-center items-center border-2 border-greytone">img</div>
                <div className="flex flex-col">
                  <p className="text-primary font-semibold">Shopify eCommerce Store</p>
                  <p className="text-darkgreytone text-sm">Development</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-semibold">$1200</p>
                <p className="text-darkgreytone text-sm">6 Projects</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CRM;
