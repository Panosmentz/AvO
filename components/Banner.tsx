import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Banner() {
  const [showBanner, setShowBanner] = useState(false);

  const handleDismiss = () => {
    setShowBanner(true);
  };
  return (
    <div
      className={`relative isolate flex items-center gap-x-6 overflow-hidden bg-teal-500 py-2.5 px-6 sm:px-3.5 sm:before:flex-1 ${
        showBanner ? "hidden" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
        <p className="text-lg font-bold leading-6 text-gray-900">
          <strong className="font-semibold text-red-500">Disclaimer</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          This is a personal project and the items, privacy policy and terms of
          service on this website are NOT real. Payments are in Sandbox.
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={handleDismiss}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
