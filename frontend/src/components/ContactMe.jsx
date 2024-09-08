import React from "react";
import { FaChevronDown } from "react-icons/fa";

function ContactMe() {
  return (
    <section className="mt-2 mx-4 sm:mx-8 md:mx-16 lg:mx-20 bg-zinc-900 max-h-auto pb-10">
      <div className="container max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Image Section */}
        <div className="relative order-2 lg:order-2">
          <form
            action="#"
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-slate-200"
                >
                  First Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-slate-200"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-slate-200"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-slate-200"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-slate-200"
                >
                  Phone number
                </label>
                <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-slate-200"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="relative inline-block mt-10">
              <div className="absolute flex top-2 left-2 w-full h-full bg-gradient-to-r from-lime-400 to-blue-500 rounded-lg"></div>
              <button
                type="submit"
                className="relative bg-white text-black px-10 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>

        {/* Text Section */}
        <div className="p-4 md:p-10 lg:p-20 text-white order-1 lg:order-1">
          <h1 className="text-2xl md:text-5xl font-bold">
          Get in touch
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold mt-6 md:mt-10">
          Let's have a coffee and talk!
          </h2>
          <p className="mt-6 md:mt-10 text-base md:text-lg leading-loose">
          Have an idea, need a solution, or just want to connect? Let’s make it happen!<br/><br/>
          Reach out using the form on this page or contact me through your preferred method. I look forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
