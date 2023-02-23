import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

const navigation = [
  { name: "Keyboards", href: "/keyboards" },
  { name: "Mice", href: "/mice" },
  { name: "Headsets", href: "/headsets" },
];

const NavigationBar = () => {
  const items = useSelector(selectBasketItems);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="  bg-black px-6 pt-4 pb-4 lg:px-8">
      <nav className="flex  items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="mr-6 text-white hover:text-gray-400 ">
            <Image
              src="/logo.png"
              width={90}
              height={12}
              alt="logo"
              className="rounded"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover-underline-animation text-red mr-6 px-3 py-3"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/account"
            className="hover-underline-animation mr-6 px-3 py-3 text-white"
          >
            <UserIcon className="h-5 w-5 text-white" />
          </Link>
          <Link
            href="/checkout"
            className="hover-underline-animation mr-6 px-3 py-3 text-white"
          >
            <div className="relative cursor-pointer">
              {items.length > 0 && (
                <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-violet-500 text-[10px] text-white">
                  {items.length}
                </span>
              )}
            </div>
            <ShoppingCartIcon className="headerIcon" />
          </Link>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-black px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="mr-6 text-white hover:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/logo.png"
                width={90}
                height={12}
                alt="logo"
                className="rounded"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    onClick={() => setMobileMenuOpen(false)}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/account"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                >
                  Account
                </Link>
                <Link
                  href="/checkout"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                >
                  Basket
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default NavigationBar;

/*
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
            href="/checkout"
            className="hover-underline-animation mr-6 px-3 py-3 text-white"
          >
            <div className="relative cursor-pointer">
              {items.length > 0 && (
                <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-violet-500 text-[10px] text-white">
                  {items.length}
                </span>
              )}
            </div>
            <ShoppingCartIcon className="headerIcon" />
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
*/
