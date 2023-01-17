import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-neutral-900 p-2">
      <div className="container mx-auto flex items-center justify-between font-anton">
        <Link href="/" className="text-white mr-6 hover:text-gray-400">
          <Image
            src="/logo.png"
            width={90}
            height={12}
            alt="logo"
            className="rounded"
          />
        </Link>
        <div className="hidden md:block">
          <Link
            href="/keyboards"
            className="text-white text-l mr-6 font-bold text-underline transition-colors duration-300 hover:text-underline-current hover:bg-teal-900"
          >
            Keyboards
          </Link>
          <Link
            href="/mice"
            className="text-white text-l mr-6 font-bold text-underline transition-colors duration-300 hover:text-underline-current hover:bg-teal-900"
          >
            Mice
          </Link>
          <Link
            href="/headsets"
            className="text-white text-l mr-6 font-bold text-underline transition-colors duration-300 hover:text-underline-current hover:bg-teal-900"
          >
            Headsets
          </Link>
          <Link
            href="/mousepads"
            className="text-white text-l mr-6 font-bold text-underline transition-colors duration-300 hover:text-underline-current hover:bg-teal-900"
          >
            Mousepads
          </Link>
          <Link
            href="/contact"
            className="text-white text-l mr-6 font-bold text-underline transition-colors duration-300 hover:text-underline-current hover:bg-teal-900"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden rounded-full focus:outline-none focus:shadow-outline-blue`}
        >
          <svg
            className="w-6 h-6"
            stroke="white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute right-0 top-0 mt-16 w-full  py-2 bg-white rounded-lg shadow-xl`}
        >
          <Link
            href="/keyboards"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Keyboards
          </Link>
          <Link
            href="/mice"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Mice
          </Link>
          <Link
            href="/headsets"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Headsets
          </Link>
          <Link
            href="/mousepads"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Mousepads
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
