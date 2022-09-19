import Link from "next/link";
import { doctors } from "components/doctors";

export default function TeamSection() {
  return (
    <div className="max-w-7xl mx-auto px-3 pb-12">
      <div className="text-center pb-12 ">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Meet our Experts
        </h1>
        <p className="max-w-prose mx-auto">
          Our team of fertility specialists have been known for their extensive
          clinical experience and research contributions, as well as for their
          success in treating the most challenging fertility cases.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 sm:gap-y-10 ">
        {doctors.map((items) => (
          <Link href={"/contact-us"} passHref key={items.id}>
            <div className="text-center mb-8 md:mb-0 cursor-pointer">
              <img
                className="w-36 h-36 sm:w-36 sm:h-36 rounded-full mx-auto -mb-20 "
                src={items.image}
                alt="Avatar Jacky"
              />
              <div className="bg-gray-100 shadow-lg rounded-lg px-2 pt-24 sm:pt-28 pb-6 h-52 text-gray-400 hover:shadow-2xl hover:bg-gray-50 transition-all duration-500">
                <h3 className="font-heading font-bold text-gray-800 text-md mb-3">
                  {items.name}
                </h3>
                <p className="text-gray-800 text-sm tracking-wide">
                  {items.designation}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
