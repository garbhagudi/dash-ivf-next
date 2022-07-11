import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "components/image";
import { HiCalendar, HiMenu, HiChevronDown, HiX } from "react-icons/hi";
import Link from "next/link";

const treatments = [
  {
    name: "Male Infertility",
    href: "/male-infertility",
    icon: HiCalendar,
  },
  {
    name: "Female Infertility",
    href: "/female-infertility",
    icon: HiCalendar,
  },
  {
    name: "IVF",
    href: "/ivf",
    icon: HiCalendar,
  },
  {
    name: "ICSI",
    href: "/icsi",
    icon: HiCalendar,
  },
  {
    name: "TESA/PESA",
    href: "/tesa-pesa",
    icon: HiCalendar,
  },
  {
    name: "PCOD/PCOS",
    href: "/pcod-pcos",
    icon: HiCalendar,
  },
];

const services = [
  {
    name: "Online Consultation",
    href: "/online-consultation",
    icon: HiCalendar,
  },
  {
    name: "IVF From Home",
    href: "/ivf-from-home",
    icon: HiCalendar,
  },
  {
    name: "Paripoorna",
    href: "/paripoorna",
    icon: HiCalendar,
  },
  {
    name: "More Offers",
    href: "#",
    icon: HiCalendar,
  },
];
const resources = [
  {
    name: "About Us",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "Dr Asha S Vijay",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "Our Fertility Experts",
    href: "#",
    icon: HiCalendar,
  },
];
const locations = [
  {
    name: "Hanumanthanagar",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "Kalyan Nagar",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "South End Circle",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "Electronic City",
    href: "#",
    icon: HiCalendar,
  },
  {
    name: "Marathahalli",
    href: "#",
    icon: HiCalendar,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="sticky top-0 bg-white border-b-2 shadow-xl z-20 font-content">
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
              {({ close }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      close ? "text-gray-900" : "text-brandPink2",
                      "group bg-white rounded-md inline-flex items-center text-sm md:text-base font-medium hover:text-brandPink2 focus:outline-none focus:ring-offset-2"
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
                    <Popover.Panel className="absolute z-10 -ml-4 mt-5 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {treatments.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <a
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                onClick={() => close()}
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ close }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      close ? "text-gray-900" : "text-brandPink2",
                      "group bg-white rounded-md inline-flex items-center text-sm md:text-base font-medium hover:text-brandPink2 focus:outline-none focus:ring-offset-2"
                    )}
                  >
                    <span>Services</span>
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
                              <a
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                onClick={() => close()}
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

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
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-5 px-2 w-screen max-w-xs sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {locations.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                onClick={() => close()}
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

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
                          {resources.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                onClick={() => close()}
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            </Link>
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
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Fertility Calculators
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Resources
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
