import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>AvO | Gaming Gear | PC Peripherals </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative bg-gradient-to-tl from-violet-500 via-cyan-400 to-teal-800 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Welcome to AvO - where futuristic design meets top-notch
                performance.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our gaming gear is designed to revolutionize the industry and
                elevate your gaming experience. Dominate the competition with
                customizable RGB lighting, advanced software, and ergonomic
                designs. Join us on our mission to change the gaming industry.
                Experience the future of gaming with AvO.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="#discover"
                  className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main>
        <section
          className=" bg-gradient-to-tl from-teal-800 via-cyan-400 to-violet-500"
          id="discover"
        >
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl">
                Get ready to game like never before with our top-quality
                futuristic gear.
              </h1>
              <p className="mb-6 max-w-2xl font-light  text-gray-900 md:text-lg lg:mb-8 lg:text-xl">
                Made from premium materials, our products are designed for
                gamers, by gamers, to provide exceptional performance. Whether
                you're an amateur or a pro, our gear is made to enhance your
                gaming experience and take it to the next level. Embrace the
                future of gaming with our innovative and high-performance
                products.
              </p>
              <Link
                href="/keyboards"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Keyboards
              </Link>
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
        </section>
        <section className="bg-gradient-to-tl from-violet-500 via-cyan-400 to-teal-800">
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
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl">
                Unlock the Future of Gaming with Our Cutting-Edge Gear
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-900  md:text-lg lg:mb-8 lg:text-xl">
                Get ready to take your gaming to the future with our top-notch
                products. Join the revolution and embrace the ultimate gaming
                experience today
              </p>
              <Link
                href="/mice"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Mice
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-tl from-violet-500 via-cyan-400 to-violet-500">
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl">
                Unlock your full potential
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-900  md:text-lg lg:mb-8 lg:text-xl">
                Our products are designed to provide lightning-fast response
                times and fully customizable options, allowing you to tailor
                your gaming experience to your exact preferences.
              </p>
              <Link
                href="/headsets"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Headsets
              </Link>
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
        <section className="bg-black p-5">
          <div className="flex items-center justify-center ">
            <div className="mr-10  font-medium text-white ">
              Free Shipping
              <div className="mt-2 flex justify-center">
                <Image
                  src="/shipping.png"
                  width={50}
                  height={50}
                  alt="shipping"
                  className="rounded bg-white"
                />
              </div>
            </div>
            <div className="mr-10 font-medium text-white">
              Free Returns
              <div className="mt-2 flex justify-center">
                <Image
                  src="/return.png"
                  width={50}
                  height={50}
                  alt="returns"
                  className="rounded bg-white"
                />
              </div>
            </div>
            <div className="mr-10 font-medium text-white">
              5 Years Warranty
              <div className="mt-2 flex justify-center">
                <Image
                  src="/warranty.png"
                  width={50}
                  height={50}
                  alt="warranty"
                  className="rounded bg-white"
                />
              </div>
            </div>
            <div className="font-medium text-white">
              Secure Payments
              <div className="mt-2 flex justify-center">
                <Image
                  src="/payment.png"
                  width={50}
                  height={50}
                  alt="payment"
                  className="rounded bg-white"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Testimonial />
    </div>
  );
};

export default Home;
