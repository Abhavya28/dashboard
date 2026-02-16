import { Box, Calendar, IndianRupee, Mail, MapPin, PenTool, Phone, User } from "lucide-react";
import React from "react";

const InstallationCreate = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="p-6 flex flex-col gap-6">
          <p className="font-semibold text-primary text-lg">
            Customer Information:
          </p>
          {/* Form */}
          <div className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-y-2 lg:items-center">
              <label htmlFor="name" className="text-darkgreytone font-semibold">
                Name
              </label>
              <div className="flex items-center border border-greytone rounded-lg overflow-hidden w-full lg:max-w-[420px]">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600">
                  <User size={18} />
                </div>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="flex-1 px-4 py-3 text-sm outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-y-2 lg:items-center">
              <label htmlFor="email" className="text-darkgreytone font-semibold">
                Email
              </label>
              <div className="flex items-center border border-greytone rounded-lg overflow-hidden w-full lg:max-w-[420px]">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  type="text"
                  placeholder="Email"
                  className="flex-1 px-4 py-3 text-sm outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-y-2 lg:items-center">
              <label htmlFor="address" className="text-darkgreytone font-semibold">
                Address
              </label>
              <div className="flex items-center border border-greytone rounded-lg overflow-hidden w-full lg:max-w-[420px]">
                <div className="flex items-center justify-center w-12 h-16 bg-gray-100 text-gray-600">
                  <MapPin size={18} />
                </div>
                <textarea
                  id="address" rows={2}
                  placeholder="Address"
                  className="flex-1 px-4 py-3 text-sm outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-y-2 lg:items-center">
              <label htmlFor="contact" className="text-darkgreytone font-semibold">
                Contact
              </label>
              <div className="flex items-center border border-greytone rounded-lg overflow-hidden w-full lg:max-w-[420px]">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600">
                  <Phone size={18} />
                </div>
                <input
                  id="contact"
                  type="text"
                  placeholder="Contact"
                  className="flex-1 px-4 py-3 text-sm outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Order Number */}
            <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-y-2 lg:items-center">
              <label htmlFor="orderno" className="text-darkgreytone font-semibold">
                Order Number:
              </label>
              <div className="flex items-center border border-greytone rounded-lg overflow-hidden w-full lg:max-w-[420px]">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600">
                  <Box size={18} />
                </div>
                <input
                  id="orderno"
                  type="text"
                  placeholder="Order Number"
                  className="flex-1 px-4 py-3 text-sm outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Date */}
            <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-y-2 lg:items-center">
              <label htmlFor="date" className="text-darkgreytone font-semibold">
                Date
              </label>
              <div className="flex items-center border border-greytone rounded-lg overflow-hidden w-full lg:max-w-[420px]">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600">
                  <Calendar size={18} />
                </div>
                <input
                  id="date"
                  type="date"
                  placeholder="Date"
                  className="flex-1 px-4 py-3 text-sm outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Description of Goods */}
            <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-y-2 lg:items-center">
              <label htmlFor="desc" className="text-darkgreytone font-semibold">
                Description of Goods
              </label>
              <div className="flex items-center border border-greytone rounded-lg overflow-hidden w-full lg:max-w-[420px]">
                <div className="flex items-center justify-center w-12 h-16 bg-gray-100 text-gray-600">
                  <PenTool size={18} />
                </div>
                <textarea
                  id="desc" rows={2}
                  placeholder="Description of Goods"
                  className="flex-1 px-4 py-3 text-sm outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Basic Value (Rs.) */}
            <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-y-2 lg:items-center">
              <label htmlFor="basicvalue" className="text-darkgreytone font-semibold">
                Basic Value (Rs.)
              </label>
              <div className="flex items-center border border-greytone rounded-lg overflow-hidden w-full lg:max-w-[420px]">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600">
                  <IndianRupee size={18} />
                </div>
                <input
                  id="basicvalue"
                  type="text"
                  placeholder="Basic Value (Rs.)"
                  className="flex-1 px-4 py-3 text-sm outline-none placeholder-gray-400"
                />
              </div>
            </div>

             {/* Taxes / Others */}
            <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-y-2 lg:items-center">
              <label htmlFor="taxes" className="text-darkgreytone font-semibold">
                Taxes / Others
              </label>
              <div className="flex items-center border border-greytone rounded-lg overflow-hidden w-full lg:max-w-[420px]">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600">
                  <IndianRupee size={18} />
                </div>
                <input
                  id="taxes"
                  type="text"
                  placeholder="Taxes / Others"
                  className="flex-1 px-4 py-3 text-sm outline-none placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationCreate;
