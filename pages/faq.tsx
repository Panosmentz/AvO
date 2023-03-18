import React from "react";

const FAQ = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col justify-center p-4 md:p-8">
        <h2 className="mb-12 text-center text-4xl font-bold leading-none sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y divide-gray-700 sm:px-8 lg:px-12 xl:px-32">
          <details>
            <summary className="cursor-pointer py-2 outline-none focus:underline">
              What is AvO?
            </summary>
            <div className="px-4 pb-4">
              <p>
                AvO is a company that sells futuristic and high performance
                gaming peripherals, designed and manufactured by our skilled
                engineers with a strong focus on quality control.
              </p>
            </div>
          </details>
          <details>
            <summary className="cursor-pointer py-2 outline-none focus:underline">
              What countries do you ship to?
            </summary>
            <div className="px-4 pb-4">
              <p>
                We ship worldwide, and offer free shipping to the following
                countries:
              </p>
              <ul className="list-disc pl-8">
                <li>United States</li>
                <li>Canada</li>
                <li>United Kingdom</li>
                <li>Germany</li>
                <li>France</li>
                <li>Australia</li>
              </ul>
              <p>
                If you don't see your country listed, please contact us and
                we'll do our best to accommodate your shipping needs.
              </p>
            </div>
          </details>
          <details>
            <summary className="cursor-pointer py-2 outline-none focus:underline">
              Do you offer free returns?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Yes, we offer free returns. If you're not satisfied with your
                purchase for any reason, please contact us within 30 days of
                receipt to initiate the return process.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
