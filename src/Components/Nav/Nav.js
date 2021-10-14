import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Nav () {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="w-full mx-10 px-6 sm:px-8 lg:px-10">
          <div className="flex items-left justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                  <Link className="p-4 no-underline" to="/">
                <img
                  className="h-10 w-10 mx-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                /> 
                <h6 className="text-white text-3xl">Teachzy</h6></Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link className="p-4 no-underline hover:bg-gray-700 text-white px-3 py-2 rounded-md text-2xl font-medium" to="/Home">Home</Link>
                  <Link className="p-4 no-underline hover:bg-gray-700 text-white px-3 py-2 rounded-md text-2xl font-medium" to="/About">About</Link>
                  <Link className="p-4 no-underline hover:bg-gray-700 text-white px-3 py-2 rounded-md text-2xl font-medium" to="/Courses">Courses</Link>
                  <Link className="p-4 no-underline hover:bg-gray-700 text-white px-3 py-2 rounded-md text-2xl font-medium" to="/Tutors">Tutors</Link>
                </div>
              </div>
            </div>
            <div className="me-5 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link className="p-4 no-underline hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-2xl text-center font-medium" to="/Home">Home</Link>
                <Link className="p-4 no-underline hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-2xl text-center font-medium" to="/About">About</Link>
                <Link className="p-4 no-underline hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-2xl text-center font-medium" to="/Courses">Courses</Link>
                <Link className="p-4 no-underline hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-2xl text-center font-medium" to="/Tutors">Tutors</Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
