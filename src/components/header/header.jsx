import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "components/image";
import { HiCalendar, HiMenu, HiChevronDown, HiX } from "react-icons/hi";
import Link from "next/link";

const treatments = [
  {
    name: "Male Infertility",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/male-infertility",
    icon: HiCalendar,
  },
  {
    name: "Female Infertility",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/female-infertility",
    icon: HiCalendar,
  },
  {
    name: "IVF",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "ICSI",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "TESA/PESA",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: HiCalendar,
  },
];

const callsToAction = [
  { name: "Get Quote", href: "#", icon: HiCalendar },
  { name: "Contact Us", href: "#", icon: HiCalendar },
];

const services = [
  {
    name: "Online Consultation",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "IVF From Home",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "Paripoorna",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "More Offers",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: HiCalendar,
  },
];
const resources = [
  {
    name: "About Us",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "Dr Asha S Vijay",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "Our Fertility Experts",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: HiCalendar,
  },
];

const mobileMenu = [
  {
    name: "About Us",
    href: "",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="sticky top-0 bg-white border-b-2 shadow-xl z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  border-gray-100 py-3 sm:py-5 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-10 sm:h-14"
                  src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/GG_Logo_lwfiec.svg"
                  alt="logo"
                />
              </a>
            </Link>
          </div>

          <Popover.Group as="nav" className="hidden lg:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-brandPink2" : "text-gray-900",
                      "group bg-white rounded-md inline-flex items-center text-sm md:text-base font-medium hover:text-brandPink2 focus:outline-none focus:ring-offset-2"
                    )}
                  >
                    <span>Treatments</span>
                    <HiChevronDown
                      className={classNames(
                        open ? "text-brandPink2" : "text-gray-900",
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
                    <Popover.Panel className="absolute z-10 -ml-4 mt-5 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {treatments.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-brandPink2" : "text-gray-900",
                      "group bg-white rounded-md inline-flex items-center text-sm md:text-base font-medium hover:text-brandPink2 focus:outline-none focus:ring-offset-2"
                    )}
                  >
                    <span>Services</span>
                    <HiChevronDown
                      className={classNames(
                        open ? "text-brandPink2" : "text-gray-900",
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
                    <Popover.Panel className="absolute z-10 -ml-4 mt-5 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {services.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-brandPink2" : "text-gray-900",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-brandPink2 focus:outline-none"
                    )}
                  >
                    <span>Locations</span>
                    <HiChevronDown
                      className={classNames(
                        open ? "text-brandPink2" : "text-gray-900",
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
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-5 px-2 w-screen max-w-sm sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-brandPink2" : "text-gray-900",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-brandPink2 focus:outline-none"
                    )}
                  >
                    <span>About Us</span>
                    <HiChevronDown
                      className={classNames(
                        open ? "text-brandPink2" : "text-gray-900",
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
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-5 px-2 w-screen max-w-sm sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 hidden md:flex items-center justify-end whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brandPink3 hover:bg-brandPink"
            >
              Book an Appointment
            </a>
            <a
              href="#"
              className="ml-8 md:hidden flex items-center justify-end whitespace-nowrap px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brandPink3 hover:bg-brandPink"
            >
              Book Now
            </a>
            <div className="-mr-2 ml-2 -my-2 lg:hidden">
              <Popover.Button className="bg-white rounded-md p-2 flex items-end justify-between text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandPink">
                <span className="sr-only">Open menu</span>
                <HiMenu className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-30"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-12 w-auto"
                    src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/GG_Logo_lwfiec.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandPink">
                    <span className="sr-only">Close menu</span>
                    <HiX className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {treatments.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
