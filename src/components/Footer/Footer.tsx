import Image from "next/image";
import Link from "next/link";
import {
  FaCaretDown,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <Image src="/tour-buddy.png" alt="logo" width={194} height={22} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-16 mt-5">
            <div>
              <div className="mb-4">
                <h3 className="font-medium mb-2">Language</h3>
                <div className="relative">
                  <select className="appearance-none bg-gray-800 border border-gray-700 text-white py-2 pl-3 pr-8 rounded w-full">
                    <option>English (UK)</option>
                    <option> Español</option>
                    <option> Français</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                    <FaCaretDown />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Currency</h3>
                <div className="relative">
                  <select className="appearance-none bg-gray-800 border border-gray-700 text-white py-2 pl-3 pr-8 rounded w-full">
                    <option>U.S. Dollar ($)</option>
                    <option>Euro (€)</option>
                    <option>British Pound (£)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                    <FaCaretDown />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us" className="hover:text-teal-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-teal-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-teal-400">
                    Press Room
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-teal-400">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="hover:text-teal-400">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-teal-400">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-teal-400">
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-teal-400">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="hover:text-teal-400">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">
                Payment methods possible
              </h3>
              <div className="grid grid-cols-5 gap-1">
                <Image
                  src="/image 28.png"
                  alt="Mastercard"
                  width={60}
                  height={26}
                />

                <Image
                  src="/image 37.png"
                  alt="American Express"
                  width={60}
                  height={26}
                />

                <Image
                  src="/image 29.png"
                  alt="Discover"
                  width={60}
                  height={26}
                />

                <Image
                  src="/image 31.png"
                  alt="Google Pay"
                  width={60}
                  height={26}
                />

                <Image
                  src="/image 33.png"
                  alt="Apple Pay"
                  width={60}
                  height={26}
                />
                <Image
                  src="/image 34.png"
                  alt="Sofrot Pay"
                  width={60}
                  height={26}
                />
                <Image
                  src="/image 35.png"
                  alt="Apple Pay"
                  width={60}
                  height={26}
                />
                <Image
                  src="/image 36.png"
                  alt="Apple Pay"
                  width={60}
                  height={26}
                />
                <Image
                  src="/image 27.png"
                  alt="Apple Pay"
                  width={60}
                  height={26}
                />
                <Image src="/image 30.png" alt="Visa" width={60} height={26} />
              </div>

              <h3 className="font-medium text-lg mt-5 mb-4">Company</h3>
              <Link href="/become-guide" className="hover:text-teal-400">
                Become a Tour guide for Us
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>Copyright 2025 Tour Buddy. All Rights Reserved</p>
            </div>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="bg-blue-400 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FaPinterest />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
