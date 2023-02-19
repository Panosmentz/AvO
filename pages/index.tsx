import Head from "next/head";
import Image from "next/image";

const Home = () => {
  //if it matches the category id, show the products -_ref is inside each product

  return (
    <div className="">
      <Head>
        <title>AvO | Gaming Gear | PC Peripherals </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                Get ready to game like never before with our top-quality
                futuristic gear.
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                Made from premium materials, our products are designed for
                gamers, by gamers, to provide exceptional performance. Whether
                you're an amateur or a pro, our gear is made to enhance your
                gaming experience and take it to the next level. Embrace the
                future of gaming with our innovative and high-performance
                products.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Buy Now
              </a>
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <Image
                src="/keyboard.png"
                width={400}
                height={400}
                alt="keyboard"
                className="rounded"
              />
            </div>
          </div>
          <section className="bg-white ">
            <div className="flex items-center justify-center">
              <div className="mr-10 font-medium text-gray-700">
                Free Shipping
                <Image
                  src="/shipping.png"
                  width={50}
                  height={50}
                  alt="shipping"
                  className="rounded"
                />
              </div>
              <div className="mr-10 font-medium text-gray-700">
                Free Returns
                <Image
                  src="/return.png"
                  width={50}
                  height={50}
                  alt="returns"
                  className="rounded"
                />
              </div>
              <div className="mr-10 font-medium text-gray-700">
                Warranty
                <Image
                  src="/warranty.png"
                  width={50}
                  height={50}
                  alt="warranty"
                  className="rounded"
                />
              </div>
              <div className="font-medium text-gray-700">
                Secure Payments
                <Image
                  src="/payment.png"
                  width={50}
                  height={50}
                  alt="payment"
                  className="rounded"
                />
              </div>
            </div>
          </section>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <Image
                src="/mouse.png"
                width={400}
                height={400}
                alt="mouse"
                className="rounded"
              />
            </div>
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                Unlock the Future of Gaming with Our Cutting-Edge Gear
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                Get ready to take your gaming to the future with our top-notch
                products. Join the revolution and embrace the ultimate gaming
                experience today
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Buy Now
              </a>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                Unlock your full potential
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                Our products are designed to provide lightning-fast response
                times and fully customizable options, allowing you to tailor
                your gaming experience to your exact preferences.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Buy Now
              </a>
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <Image
                src="/headset2.png"
                width={400}
                height={400}
                alt="keyboard"
                className="rounded"
              />
            </div>
          </div>
        </section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default Home;
