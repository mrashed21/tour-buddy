"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white py-4 shadow-sm font-mulish">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image src="/tour-buddy.png" alt="logo" width={194} height={22} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 font-mulish flex items-center gap-1"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              About Us
            </Link>
            <Link
              href="/guides"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              Our Most Rated Guides
            </Link>
            <Link
              href="/packages"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              Our Packages
            </Link>
            <Link
              href="/destinations"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              Most Desired Places
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/signin">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded">
                Sign In
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 font-mulish flex items-center gap-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/guides"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                onClick={toggleMenu}
              >
                Our Most Rated Guides
              </Link>
              <Link
                href="/packages"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                onClick={toggleMenu}
              >
                Our Packages
              </Link>
              <Link
                href="/destinations"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                onClick={toggleMenu}
              >
                Most Desired Places
              </Link>
              <Link href="/signin" onClick={toggleMenu}>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded w-full">
                  Sign In
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
