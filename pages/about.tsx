import Head from "next/head";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>About Us - AvO Gaming Peripherals</title>
      </Head>

      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">About Us</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <img
              src="/images/about-us.jpg"
              alt="About Us"
              className="mb-4 w-full rounded-lg shadow-lg"
            />

            <p className="mb-4 text-lg text-gray-700">
              AvO Gaming Peripherals was founded in 2015 by John Doe, a lifelong
              gamer and technology enthusiast. John's passion for gaming started
              at a young age, and he quickly became interested in the technology
              that powers gaming and the accessories that enhance the
              experience.
            </p>

            <p className="mb-4 text-lg text-gray-700">
              After completing his degree in Electrical Engineering, John worked
              for several years in the gaming industry, developing cutting-edge
              technology and designing innovative gaming peripherals. However,
              he noticed that many gamers were frustrated by the lack of
              high-quality and affordable gaming accessories on the market.
            </p>

            <p className="mb-4 text-lg text-gray-700">
              John decided to start AvO Gaming Peripherals with the goal of
              providing top-notch gaming accessories at an affordable price. He
              drew on his expertise in electrical engineering and his passion
              for gaming to design and develop a line of gaming peripherals that
              would meet the needs of gamers at all levels.
            </p>

            <p className="mb-4 text-lg text-gray-700">
              Today, AvO Gaming Peripherals is one of the leading providers of
              gaming accessories and peripherals, offering a wide range of
              products that are designed with the needs of gamers in mind. We
              are committed to providing high-quality products at an affordable
              price, and we pride ourselves on our dedication to customer
              service and support.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Our Founder's Expertise
            </h2>

            <p className="mb-4 text-lg text-gray-700">
              John Doe's background in Electrical Engineering gives him a unique
              perspective on the design and development of gaming peripherals.
              His expertise in circuit design, software development, and
              hardware optimization allows him to create products that are not
              only innovative and cutting-edge, but also affordable and
              accessible to all gamers.
            </p>

            <p className="mb-4 text-lg text-gray-700">
              At AvO Gaming Peripherals, we believe that our founder's
              background and expertise sets us apart from our competitors. We
              are constantly pushing the boundaries of gaming technology and
              innovation, and we are committed to providing our customers with
              the best products and customer service in the industry.
            </p>

            <p className="mb-4 text-lg text-gray-700">
              Thank you for choosing AvO Gaming Peripherals. We look forward to
              serving you and helping you take your gaming experience to the
              next level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
