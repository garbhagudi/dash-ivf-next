import Image from "next/image";
import Form from "components/form";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="order-0 relative">
          <div className="flex items-left justify-center w-full h-full flex-col text-center py-16 lg:py-0 bg-cover bg-no-repeat">
            <div className="text-2xl font-heading font-extrabold text-center pb-4 px-2">
              <div className="text-[#e92e64] uppercase">
                Leading IVF & Fertility clinic in Bangalore: Expert care &
                Advanced treatments
              </div>
            </div>
            <div className="text-xl py-2 font-normal font-content pb-4 px-4">
              Offer of the Month : <br />
              <div className="px-1.5 py-0.5 font-bold text-white bg-brandPink rounded-sm block">
                Free Fertility Screening
              </div>{" "}
              <ol className="list-decimal list-inside mt-2 text-justify mx-auto inline-block">
                <li className="py-0.5 mt-0.5 font-bold">Free Baseline scan</li>{" "}
                <li className="py-0.5 mt-0.5 font-bold">Free semen analysis</li>{" "}
                <li className="py-0.5 mt-0.5 font-bold">Free Consultation &</li>{" "}
                <li className="py-0.5 mt-0.5 font-bold">
                  Free Counseling session
                </li>{" "}
              </ol>
            </div>
            <Link
              href={"#leadForm"}
              className="py-1.5 bg-brandPink w-full md:w-1/2 mx-auto text-base font-bold text-white rounded-sm transition duration-200 ease-in-out hover:bg-brandPurpleDark"
            >
              <button>Book an Appointment</button>
            </Link>
          </div>
          <div className="font-content -mt-5 text-xs font-medium hidden lg:block">
            *terms and conditions apply
          </div>
        </div>
        <div className="order-1 flex items-end justify-start object-cover overflow-hidden">
          <div className="absolute font-content -mt-5 text-xs font-medium lg:hidden block bg-white px-3 py-1 bg-opacity-50 rounded-t-md z-10">
            *terms and conditions apply
          </div>
          <Image
            src={
              "https://res.cloudinary.com/garbhagudiivf/image/upload/v1719824922/July-Month-offer-ads-Source-File_1__n90fcn.webp"
            }
            width={1920}
            height={1080}
            alt="Start IVF from as low as 90K"
            className="object-center h-full"
            priority={true}
          />
        </div>
        <div className="order-2 bg-[#005e7e]" id="leadForm">
          <div className="flex items-center justify-center">
            <Form />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto sm:mt-10 ">
        <div className="text-base md:text-lg text-center mb-4 px-3 py-2 bg-gray-300 max-w-lg font-semibold mx-auto sm:rounded-lg">
          To Book Appointment call{" "}
          <a
            href="tel:+919108910832"
            className="text-brandPink block sm:inline-block"
          >
            +91 9108 9108 32
          </a>
        </div>
        <div className="mx-auto text-center">
          <button className="px-3 py-2 text-center mx-auto block sm:inline-block bg-brandPink hover:bg-brandPurpleDark transition duration-200 ease-in-out text-white font-semibold rounded-lg">
            <Link href="#leadForm" className="scroll-smooth font-sans">
              Book an Appointment
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
