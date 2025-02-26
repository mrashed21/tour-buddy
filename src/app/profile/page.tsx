import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { LiaPenSolid } from "react-icons/lia";

export const metadata: Metadata = {
  title: "Profile",
  description: "Generated by create next app",
};

const ProfilePage: React.FC = () => {
  return (
    <div className=" flex flex-col font-mulish">
      {/* Main Content */}
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 ml-10 mb-8">
            User Profile
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mx-16">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-1/4 border-r border-gray-200">
                <div className="p-6 flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src="/profile-avatar.jpg"
                      alt="Profile Picture"
                      className="rounded-full object-cover border-4 border-white"
                      layout="fill"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#7BBCB0] rounded-full p-2">
                      <LiaPenSolid color="white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Muhammad Rashed
                  </h3>

                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>Dhaka</span>
                    <span className="mx-2">•</span>
                    <FaCalendarAlt className="mr-1" />
                    <span>15th February</span>
                  </div>

                  <nav className="w-full">
                    <div className="bg-[#7BBCB0] text-white font-medium p-3 mb-1">
                      Profile Informations
                    </div>
                    <div className="hover:bg-gray-100 p-3 ">
                      <Link href="/profile/booking-history" className="block">
                        Booking History
                      </Link>
                    </div>
                    <div className="hover:bg-gray-100 p-3 ">
                      <Link href="/profile/reviews" className="block">
                        Tour Guide Reviews
                      </Link>
                    </div>
                    <div className="hover:bg-gray-100 p-3">
                      <Link href="/profile/forgot-password" className="block">
                        Forgot Password
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Main Profile Content */}
              <div className="w-full md:w-3/4">
                {/* Personal Information Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    Personal Information
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="name"
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 rounded bg-gray-50"
                        defaultValue="Muhammad Rashed"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="dob">
                        Date Of Birth
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="dob"
                          className="w-full p-3 border border-gray-300 rounded bg-gray-50"
                          defaultValue="19/12/2003"
                        />
                        <div className="absolute right-3 top-3 text-gray-500">
                          <FaRegCalendarAlt size={22} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className="w-full p-3 border border-gray-300 rounded bg-gray-50"
                        defaultValue="+880-1781-131905"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="location"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        className="w-full p-3 border border-gray-300 rounded bg-gray-50"
                        defaultValue="Dhaka"
                      />
                    </div>

                    <div>
                      <button className="bg-[#7BBCB0] hover:bg-teal-600 text-white font-medium py-3 px-6 rounded w-full md:w-auto">
                        Save
                      </button>
                    </div>
                  </div>
                </div>

                {/* Security Section */}
                <div className="p-6 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    Security
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded bg-gray-50"
                        defaultValue="rashedjaman768@gmail.com"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full p-3 border border-gray-300 rounded bg-gray-50"
                        defaultValue="**********"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="confirm-password"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirm-password"
                        className="w-full p-3 border border-gray-300 rounded bg-gray-50"
                        defaultValue="**********"
                      />
                    </div>

                    <div>
                      <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded w-full md:w-auto">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default ProfilePage;
