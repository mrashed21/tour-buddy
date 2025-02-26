"use client";
import Image from "next/image";
// pages/payment.tsx
import React from "react";

const PaymentPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl mx-16  mt-10 font-normal font-mulish mb-3">
          Payment
        </h1>
      </div>
      <div className="bg-[#F9FAFD] py-16">
        <div className="container mx-auto flex-grow ">
          <div className="mx-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-normal mb-8 font-inria">
                  Choose Payment Method
                </h2>

                <div className="space-y-6 font-mulish">
                  <div>
                    <label className="block mb-2 text-sm font-semibold">
                      Name:
                    </label>
                    <input
                      type="text"
                      value="Ahnaf Amer"
                      className="w-full p-3 border border-gray-200 rounded bg-gray-50"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold">
                      Transaction Id:
                    </label>
                    <input
                      type="text"
                      value="---------"
                      className="w-full p-3 border border-gray-200 rounded bg-gray-50"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      value="+8801321454687"
                      className="w-full p-3 border border-gray-200 rounded bg-gray-50"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold">
                      Pin Code:
                    </label>
                    <input
                      type="password"
                      defaultValue="--------"
                      className="w-full p-3 border border-gray-200 rounded bg-gray-50"
                      readOnly
                    />
                  </div>

                  <div className="font-mukta">
                    <p className="mb-2  font-semibold">Select Method:</p>
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-[#37B1E2] text-white px-4 py-2 rounded-full flex items-center space-x-1">
                        <span className="h-2 w-2 bg-white rounded-full"></span>
                        <span>Bkash</span>
                      </button>
                      <button className="bg-[#37B1E2] text-white px-4 py-2 rounded-full flex items-center space-x-1">
                        <span className="h-2 w-2 bg-white rounded-full"></span>
                        <span>Nagad</span>
                      </button>
                      <button className="bg-[#37B1E2] text-white px-4 py-2 rounded-full flex items-center space-x-1">
                        <span className="h-2 w-2 bg-white rounded-full"></span>
                        <span>UPAY</span>
                      </button>
                      <button className="bg-[#37B1E2] text-white px-4 py-2 rounded-full flex items-center space-x-1">
                        <span className="h-2 w-2 bg-white rounded-full"></span>
                        <span>VISA</span>
                      </button>
                      <button className="bg-[#37B1E2] text-white px-4 py-2 rounded-full flex items-center space-x-1">
                        <span className="h-2 w-2 bg-white rounded-full"></span>
                        <span>MasterCard</span>
                      </button>
                      <button className="bg-[#37B1E2] text-white px-4 py-2 rounded-full flex items-center space-x-1">
                        <span className="h-2 w-2 bg-white rounded-full"></span>
                        <span>Others</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="bg-gray-900 hover:bg-black text-white font-medium py-3 px-6 rounded-full w-full md:w-auto font-mulish">
                      Confirm Payment
                    </button>
                  </div>
                </div>

                {/* Payment Logos Grid */}
                <div className="mt-10 ">
                  <Image
                    src="/ssl2 1.png"
                    alt="Payment Method"
                    width={1200}
                    height={500}
                  />
                </div>
              </div>

              {/* Payment Method Image */}
              <div className="lg:col-span-1">
                <Image
                  src="/payment 1.png"
                  alt="Payment Method"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
