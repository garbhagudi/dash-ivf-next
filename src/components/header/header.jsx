import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "components/image";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { Treatments, Services, Locations, About } from "./popover";
import { mobileMenu } from "./menuData";
import MyModal from "components/modal";
import AccordionLayout from "./mobileMenuLauout";

export default function Header() {
  const [activeIndex1, setActiveIndex1] = useState(0);
  return (
    <Popover className="sticky top-0 z-20 bg-white border-b-2 shadow-xl font-content">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-3 border-gray-100 sm:py-5 md:justify-start md:space-x-10">
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

          <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
            <Treatments />
            <Services />
            <Locations />
            <About />
          </Popover.Group>

          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <div className="hidden md:flex">
              <MyModal title={"Book Appointment"} />
            </div>
            <Link href="/contact-us">
              <a className="flex items-center justify-end px-3 py-1 ml-8 text-sm font-medium text-white border border-transparent rounded-md shadow-sm md:hidden whitespace-nowrap bg-brandPink3 hover:bg-brandPink">
                Book Now
              </a>
            </Link>
            <div className="ml-2 -my-2 -mr-2 lg:hidden">
              <Popover.Button className="flex items-end justify-between p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandPink">
                <span className="sr-only">Open menu</span>
                <HiMenu className="w-6 h-6" aria-hidden="true" />
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
          className="absolute inset-x-0 top-0 z-30 p-2 transition duration-500 origin-top-right transform lg:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-2 pt-5 pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="w-auto h-10 sm:h-12"
                    src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/GG_Logo_lwfiec.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="flex items-center justify-center -mr-2">
                  <Link href="#">
                    <a className="px-2 py-1 mr-2 text-xs font-medium text-white border border-transparent rounded-md shadow-sm md:hidden whitespace-nowrap bg-brandPink3 hover:bg-brandPink focus:outline-none">
                      Book Now
                    </a>
                  </Link>
                  <Popover.Button className="inline-flex items-center justify-center p-2 mr-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandPink">
                    <span className="sr-only">Close menu</span>
                    <HiX className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <div className="w-full">
                  <AccordionLayout
                    title={"Female Infertility"}
                    key={1}
                    index={1}
                    activeIndex={activeIndex1}
                    setActiveIndex={setActiveIndex1}
                  >
                    <div className="flex flex-col">
                      {mobileMenu.female.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <a className="px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white rounded-xl">
                            {items.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>

                  <AccordionLayout
                    title={"Male Infertility"}
                    key={2}
                    index={2}
                    activeIndex={activeIndex1}
                    setActiveIndex={setActiveIndex1}
                  >
                    <div className="flex flex-col">
                      {mobileMenu.male.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <a className="px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white rounded-xl">
                            {items.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>

                  <AccordionLayout
                    title={"Advanced Treatments"}
                    key={3}
                    index={3}
                    activeIndex={activeIndex1}
                    setActiveIndex={setActiveIndex1}
                  >
                    <div className="flex flex-col">
                      {mobileMenu.infertility.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <a className="px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white rounded-xl">
                            {items.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>

                  <AccordionLayout
                    title={"Value Added Service"}
                    key={4}
                    index={4}
                    activeIndex={activeIndex1}
                    setActiveIndex={setActiveIndex1}
                  >
                    <div className="flex flex-col">
                      {mobileMenu.valueAdds.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <a className="px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white rounded-xl">
                            {items.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>

                  <AccordionLayout
                    title={"Locations"}
                    key={5}
                    index={5}
                    activeIndex={activeIndex1}
                    setActiveIndex={setActiveIndex1}
                  >
                    <div className="flex flex-col">
                      {mobileMenu.locations.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <a className="px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white rounded-xl">
                            {items.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>

                  <AccordionLayout
                    title={"About Us"}
                    key={6}
                    index={6}
                    activeIndex={activeIndex1}
                    setActiveIndex={setActiveIndex1}
                  >
                    <div className="flex flex-col">
                      {mobileMenu.others.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <a className="px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white rounded-xl">
                            {items.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
