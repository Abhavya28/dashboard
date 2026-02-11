import { MapPin, Phone, Mail, Trash2, SquarePen } from "lucide-react";
import Button from "../../components/Button";
import { useState } from "react";
const CustomersView = () => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div>
      <div className="flex gap-6">
        {/* Left */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-10 w-[30%]">
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
        <div className="lg:col-span-2 bg-white shadow-md rounded-xl">
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
          {activeTab === "overview" && (
            <div className="space-y-4 p-6">
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
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-4 p-6">
              <h3 className="font-semibold text-primary">Billing Details</h3>
              <p className="text-sm text-darkgreytone">
                Invoices, payments, and billing history will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomersView;
