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
            className="text-white mr-6 px-3 py-3 hover-underline-animation"
          >
            Keyboards
          </Link>
          <Link
            href="/mice"
            className="text-white mr-6 px-3 py-3 hover-underline-animation"
          >
            Mice
          </Link>
          <Link
            href="/headsets"
            className="text-white mr-6 px-3 py-3 hover-underline-animation"
          >
            Headsets
          </Link>
          <Link
            href="/mousepads"
            className="text-white mr-6 px-3 py-3 hover-underline-animation"
          >
            Mousepads
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
          } md:hidden absolute right-0 top-0 w-full h-full py-2 bg-black rounded-lg shadow-xl flex justify-center align-center`}
        >
          <div className="mt-16">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden rounded-full focus:outline-none focus:shadow-outline-blue absolute right-10 top-10`}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center ">
              <Link
                href="/home"
                className="px-4 py-2 hover-underline-animation"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/keyboards"
                className="px-4 py-2 hover-underline-animation"
                onClick={() => setIsOpen(false)}
              >
                Keyboards
              </Link>
              <Link
                href="/mice"
                className="px-4 py-2 hover-underline-animation"
                onClick={() => setIsOpen(false)}
              >
                Mice
              </Link>
              <Link
                href="/headsets"
                className="px-4 py-2 hover-underline-animation"
                onClick={() => setIsOpen(false)}
              >
                Headsets
              </Link>
              <Link
                href="/mousepads"
                className="px-4 py-2 hover-underline-animation"
                onClick={() => setIsOpen(false)}
              >
                Mousepads
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
