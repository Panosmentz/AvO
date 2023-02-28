export default function Testimonial() {
  return (
    <section className="relative isolate divide-y divide-dashed overflow-hidden bg-white bg-gradient-to-tl from-violet-500 via-cyan-400 to-violet-500 py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center text-xl font-semibold text-gray-900  sm:text-2xl">
        <h1>What the pros say about our products</h1>
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              I've been using AvO's gaming gear for the past few months, and I
              have to say, I'm impressed. The futuristic design of their
              keyboards, mice, and headsets not only looks amazing but also
              enhances my gaming experience. The precision and accuracy of their
              products have given me a competitive edge over my opponents. I
              highly recommend AvO to any serious gamer who wants to take their
              gaming to the next level.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">John Doe</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Professional Gamer</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
