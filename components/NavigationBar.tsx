import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 p-2">
      <div className="container mx-auto flex items-center justify-between font-anton">
        <Link href="/" className="mr-6 text-white hover:text-gray-400">
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
            className="hover-underline-animation mr-6 px-3 py-3 text-white"
          >
            Keyboards
          </Link>
          <Link
            href="/mice"
            className="hover-underline-animation mr-6 px-3 py-3 text-white"
          >
            Mice
          </Link>
          <Link
            href="/headsets"
            className="hover-underline-animation mr-6 px-3 py-3 text-white"
          >
            Headsets
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            href="/account"
            className="hover-underline-animation mr-6 px-3 py-3 text-white"
          >
            <UserIcon className="h-5 w-5 text-white" />
          </Link>
          <Link
            href="/cart"
            className="hover-underline-animation mr-6 px-3 py-3 text-white"
          >
            <ShoppingCartIcon className="h-5 w-5 text-white" />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`focus:shadow-outline-blue rounded-full focus:outline-none md:hidden`}
        >
          <svg
            className="h-6 w-6"
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
          } align-center absolute right-0 top-0 flex h-full w-full justify-center rounded-lg bg-black py-2 shadow-xl md:hidden`}
        >
          <div className="mt-16">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:shadow-outline-blue absolute right-10 top-10 rounded-full focus:outline-none md:hidden`}
            >
              <svg
                className="h-6 w-6 text-white"
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
                href="/"
                className="hover-underline-animation px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/keyboards"
                className="hover-underline-animation px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Keyboards
              </Link>
              <Link
                href="/mice"
                className="hover-underline-animation px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Mice
              </Link>
              <Link
                href="/headsets"
                className="hover-underline-animation px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Headsets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
