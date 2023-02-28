import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
  agreed: boolean;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [agreed, setAgreed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data, e: any) => {
    console.log(data);
    toast.success("Thank you contacting us. Your message has been submitted.", {
      position: "top-center",
    });
    e.target.reset();
  };

  return (
    <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Please fill out the required fields and we'll respond to your query as
          soon as possible.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("firstName", {
                  required: true,
                  minLength: 2,
                  maxLength: 35,
                })}
              />
              {errors?.firstName?.type === "required" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  This field is required
                </p>
              )}
              {errors?.firstName?.type === "minLength" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  First Name cannot be less than 2 characters
                </p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  First Name cannot exceed 35 characters
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("lastName", {
                  required: true,
                  minLength: 2,
                  maxLength: 35,
                })}
              />
              {errors?.lastName?.type === "required" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  This field is required
                </p>
              )}
              {errors?.lastName?.type === "minLength" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  Last Name cannot be less than 2 characters
                </p>
              )}
              {errors?.lastName?.type === "maxLength" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  Last Name cannot exceed 35 characters
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("phone", {
                  required: true,
                  minLength: 10,
                  maxLength: 16,
                })}
              />
              {errors?.phone?.type === "required" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  This field is required
                </p>
              )}
              {errors?.phone?.type === "minLength" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  Please enter at least 10 digits
                </p>
              )}
              {errors?.phone?.type === "maxLength" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  You cannot exceed 16 digits
                </p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                {...register("message", {
                  required: true,
                  minLength: 10,
                  maxLength: 500,
                })}
              />
              {errors?.message?.type === "required" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  This field is required
                </p>
              )}
              {errors?.message?.type === "minLength" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  Please enter at least 10 characters
                </p>
              )}
              {errors?.message?.type === "maxLength" && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  Your message cannot exceed 500 characters
                </p>
              )}
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={!agreed}
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              agreed ? "bg-black hover:bg-teal-800" : "bg-gray-400 "
            }`}
          >
            Submit message
          </button>
        </div>
      </form>
    </div>
  );
}
