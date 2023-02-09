import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../components/NavigationBar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>AvO | Gaming Gear | PC Peripherals </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Get ready to game like never before with our top-quality
                futuristic gear.
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Made from premium materials, our products are designed for
                gamers, by gamers, to provide exceptional performance. Whether
                you're an amateur or a pro, our gear is made to enhance your
                gaming experience and take it to the next level. Embrace the
                future of gaming with our innovative and high-performance
                products.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Buy Now
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src="/keyboard.png"
                width={400}
                height={400}
                alt="keyboard"
                className="rounded"
              />
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src="/mouse.png"
                width={400}
                height={400}
                alt="mouse"
                className="rounded"
              />
            </div>
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Unlock the Future of Gaming with Our Cutting-Edge Gear
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Get ready to take your gaming to the future with our top-notch
                products. Join the revolution and embrace the ultimate gaming
                experience today
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Buy Now
              </a>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Unlock your full potential
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Our products are designed to provide lightning-fast response
                times and fully customizable options, allowing you to tailor
                your gaming experience to your exact preferences.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Buy Now
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
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
