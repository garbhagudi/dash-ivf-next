import MyModal from "components/modal";
import Image from "components/image";

const Banner = () => {
  return (
    <div className="">
      <Image
        src={
          "https://res.cloudinary.com/garbhagudi/image/upload/v1682069547/garbhagudi-ivf/Banners/90K-Add-option-2-Landing-Page-Banner-01-min_lbiic6.webp"
        }
        alt="Start IVF from as low as 90K"
      />
      <div className="max-w-7xl mx-auto sm:mt-10 ">
        <div className="text-base md:text-lg text-center mb-4 px-3 py-2 bg-gray-300 max-w-lg font-semibold mx-auto sm:rounded-lg">
          To Book Appointment call{" "}
          <a
            href="tel+919108910832"
            className="text-brandPink block sm:inline-block"
          >
            +91 9108 9108 32
          </a>
        </div>
        <div className="text-center mt-8 sm:mt-0">
          <MyModal title="Book a Free Appointment" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
