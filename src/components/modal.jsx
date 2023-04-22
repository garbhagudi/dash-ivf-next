import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Form from "./form";

export default function MyModal({ title }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="px-6 py-4 focus:outline-none bg-brandPink text-white font-semibold rounded-md"
        >
          {title}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>

          <div className="fixed inset-0 overscroll-y-contain">
            <div className="flex max-w-lg mx-auto min-h-full items-center justify-center text-center mt-14">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg -mt-5 transform rounded cursor-pointer overflow-hidden bg-gray-50 opacity-95 align-middle shadow-xl transition-all">
                  <div
                    className="my-4 flex sm:hidden items-center justify-center cursor-pointer px-3 py-1 bg-brandPink2 mx-auto w-20 text-white font-semibold rounded-lg"
                    onClick={closeModal}
                  >
                    Close
                  </div>
                  <Form />
                  <div
                    className="hidden my-4 items-center sm:block justify-center cursor-pointer px-3 py-1 bg-brandPink2 mx-auto w-20 text-white font-semibold rounded-lg"
                    onClick={closeModal}
                  >
                    Close
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
