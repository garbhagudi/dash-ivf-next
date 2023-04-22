import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import { about, locations, services, treatments } from "./menuData";
import Image from "components/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Treatments = () => {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button
            className={classNames(
              close ? "text-gray-900" : "text-brandPink2",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-brandPink2 focus:outline-none"
            )}
          >
            <span>Treatments</span>
            <HiChevronDown
              className={classNames(
                close ? "text-gray-900" : "text-brandPink2",
                "ml-2 h-5 w-5 group-hover:text-brandPink2"
              )}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute mt-7 z-10 w-screen max-w-md px-4 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl xl:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <p className="bg-white text-brandDark px-4 pt-4 pb-2 font-bold underline text-xs sm:text-sm">
                  Female Infertility
                </p>
                <div className="relative grid gap-8 bg-white p-3 grid-cols-2">
                  {treatments.female.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => close()}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="sm:text-sm text-xs font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <hr />
                <p className="bg-white text-brandDark px-4 py-2 text-md font-bold underline text-xs sm:text-sm">
                  Male Infertility
                </p>
                <div className="relative grid gap-8 bg-white p-3 grid-cols-2">
                  {treatments.male.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => close()}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="sm:text-sm text-xs font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <hr />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export const Services = () => {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button
            className={classNames(
              close ? "text-gray-900" : "text-brandPink2",
              "group bg-white rounded-md inline-flex items-center text-sm md:text-base font-medium hover:text-brandPink2 focus:outline-none focus:ring-offset-2"
            )}
          >
            <span>Value Adds</span>
            <HiChevronDown
              className={classNames(
                close ? "text-gray-900" : "text-brandPink2",
                "ml-2 h-5 w-5 group-hover:text-brandPink2"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-5 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {services.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        onClick={() => close()}
                      >
                        <Image
                          className="flex-shrink-0 w-10 h-10 text-indigo-600"
                          src={item.icon}
                          aria-hidden="true"
                          alt={item.name}
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export const Locations = () => {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button
            className={classNames(
              close ? "text-gray-900" : "text-brandPink2",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-brandPink2 focus:outline-none"
            )}
          >
            <span>Locations</span>
            <HiChevronDown
              className={classNames(
                close ? "text-gray-900" : "text-brandPink2",
                "ml-2 h-5 w-5 group-hover:text-brandPink2"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-5 px-2 w-screen max-w-xl sm:px-0">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 grid-cols-2 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {locations.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        onClick={() => close()}
                      >
                        <Image
                          className="flex-shrink-0 w-10 h-10 text-indigo-600"
                          src={item.icon}
                          aria-hidden="true"
                          alt={item.name}
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export const About = () => {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button
            className={classNames(
              close ? "text-gray-900" : "text-brandPink2",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-brandPink2 focus:outline-none"
            )}
          >
            <span>About Us</span>
            <HiChevronDown
              className={classNames(
                close ? "text-gray-900" : "text-brandPink2",
                "ml-2 h-5 w-5 group-hover:text-brandPink2"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-5 px-2 w-screen max-w-xs sm:px-0">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {about.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        onClick={() => close()}
                      >
                        <Image
                          className="flex-shrink-0 w-10 h-10 text-indigo-600"
                          src={item.icon}
                          aria-hidden="true"
                          alt={item.name}
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
