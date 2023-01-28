import MyModal from "components/modal";

const Banner = () => {
  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-3xl font-bold lg:text-4xl py-6">
              Thousands of smiles and millions of memories began with a visit to
              GarbhaGudi.
            </h1>
            <p className="font-content text-lg pb-6">
              Making families smile since 2011
            </p>
          </div>
          <div className="text-lg text-center mb-4 px-3 py-2 bg-gray-300 max-w-lg font-semibold mx-auto rounded-lg">
            To Book an Appointment call{" "}
            <a href="tel+919148038971" className="text-brandPink">
              +919148038971
            </a>
          </div>
          <div className="mx-auto">
            <div className="text-center">
              <MyModal title="Book a Free Appointment" />
            </div>
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1665994576/garbhagudi-ivf/New%20Website/image-1-compressed_n32eoj.jpg"
              alt="illustration"
              className="lg:max-w-3xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
