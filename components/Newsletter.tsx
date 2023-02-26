import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface Inputs {
  email: string;
}

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data, e: any) => {
    console.log(data);
    toast.success("Thank you for subscribing!", {
      position: "top-center",
    });
    e.target.reset();
  };
  return (
    <div className=" relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2 ">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our early access community.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Join our community and get early access for new releases.
            </p>
            <form
              className="mt-6  max-w-md gap-x-4 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                })}
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  Please enter a valid email
                </p>
              )}
              <button
                type="submit"
                className="mt-3 flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 ">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                What is early access?
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                We operate on a first come, first served model so make sure to
                subscribe as soon as possible.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7  text-gray-400 ">
                We will only send out emails when a new product is getting close
                to release date.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
