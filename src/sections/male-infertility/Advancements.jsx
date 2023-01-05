import React from "react";

const Advancements = () => {
  return (
    <div id="advancements" className="max-w-6xl pb-12 mx-auto px-3 sm:px-0">
      <h3 className="text-2xl sm:text-4xl font-heading font-bold text-center py-4 md:py-10">
        Advancements in the Field of Male Infertility Treatment
      </h3>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center flex-col">
            <h4
              className="text-xl mt-8 sm:text-2xl font-heading font-bold text-center scroll-m-10 md:scroll-m-28"
              id="casa"
            >
              Computer Assisted Sperm Analysis (CASA)
            </h4>
            <p className="mt-6">
              A semen analysis is a test performed to screen for male fertility
              problems. The evaluation of sperm cell motility (movement) and
              morphology (shape and size) is an essential parameters in the
              examination of sperm quality and CASA allows an objective
              assessment of sperm quality. At GarbhaGudi, we use a sophisticated
              electronic imaging system to visualize the sperm and an advanced
              software program to evaluate dozens of individual sperm
              parameters. This examination provides very accurate results and
              treatment can be specifically tailored for male infertility.
            </p>
          </div>
          <div className="flex items-center justify-center mx-auto lg:ml-10">
            <img
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1667805635/garbhagudi-ivf/New%20Website/CASA-min_kb4aei.jpg"
              alt="CASA"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div
        className="mt-10 scroll-m-10 md:scroll-m-28 grid grid-cols-1 lg:grid-cols-2"
        id="tesa-pesa"
      >
        <div className="flex items-center justify-center flex-col">
          <h4 className="text-center font-heading text-brandPink text-xl sm:text-2xl font-bold">
            Percutaneous Epididymal Sperm Aspiration (PESA)
          </h4>
          <p className="mt-6">
            PESA is a simple procedure that involves inserting a needle into the
            epididymis to extract fluid that contains sperm. The aspirated fluid
            will then be sent to the laboratory for sperm aspiration. The sperms
            extracted from the epididymis require a procedure called ICSI
            (intracytoplasmic sperm injection), an IVF procedure where the sperm
            cell is directly injected into the cytoplasm of the egg. This
            same-day procedure gives the benefit of not having to make an
            incision on the body. PESA is one of the most effective and
            successful techniques of sperm aspiration. If your testes are
            healthy to produce healthy sperms that are not able to make their
            way into the ejaculate, this same-day procedure would be considered
            as it does not involve any surgical incision.
          </p>
        </div>
        <div className="w-96 flex items-center justify-center mx-auto">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1667805636/garbhagudi-ivf/New%20Website/PESA-min_uoxqt7.webp"
            alt="pesa"
          />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center flex-col">
          <h4 className="text-center font-heading text-brandPink text-xl sm:text-2xl font-bold">
            Testicular Sperm Aspiration (TESA)
          </h4>
          <p className="mt-6">
            Similar to PESA, testicular sperm aspiration (TESA) is also one of
            the newest methods used in the treatment of infertility in men. This
            technique is widely recommended to men with azoospermia, in which
            there is a lack of sperm in the ejaculate. The invention of ICSI
            (intra-cytoplasmic sperm injection) has made it possible for a
            number of men with azoospermia to biologically father a child. This
            has been a breakthrough procedure in extracting sperm directly from
            the testis of a male. The procedure is done by insertion of a needle
            into the testis and with the aid of negative pressure, fluid and
            tissue are aspirated. The sample thus obtained undergoes further
            processing to retrieve the sperm cells in a laboratory. In this
            procedure, the sperm cells do not have to necessarily be mature and
            travel through the epididymis in order to fertilize the egg and
            because the sperms are immature, ICSI has to be performed so as to
            be able to obtain single sperm and inject straight away into the egg
            for further fertilization to occur and result in the embryo
            formation. Both the procedures are helpful in treating the male
            infertility factor, but there are certain factors to be taken into
            consideration before deciding which one is ideal for your condition.
            This is possible only through a fertility specialist. Approach the
            right facility and choose a specialist who can efficiently guide you
            through your journey to reach your destination of being a biological
            father. GarbhaGudi IVF Centre – A path from dreams to success.
          </p>
        </div>
        <div className="w-96 flex items-center justify-center mx-auto">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1667805636/garbhagudi-ivf/New%20Website/TESA-min_fep5ds.webp"
            alt="TESA"
          />
        </div>
      </div>
      <div
        className="mt-10 grid grid-cols-1 lg:grid-cols-2 scroll-m-28"
        id="semen-freezing"
      >
        <div className="flex items-center justify-center flex-col">
          <h4 className="text-center font-heading text-brandPink text-xl sm:text-2xl font-bold">
            Semen Freezing
          </h4>
          <p className="mt-6">
            Semen freezing, commonly known as sperm cryopreservation or sperm
            banking/freezing, is a method of preserving sperm cells. It is a
            procedure that uses unique chemical protectants to preserve and
            store sperm in a sperm bank for future use. Sperms may be kept in
            liquid nitrogen at -196°C for many years with reasonable quality and
            be used when needed in the future. Donor sperm can also be collected
            and stored by sperm banks. Storing your sperm may allow you to use
            it for future therapy. Frozen sperm (including donor sperm) can thus
            be used in IVF and IUI in the future.
          </p>
        </div>
        <div className="w-96 flex items-center justify-center mx-auto">
          <img
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1667805636/garbhagudi-ivf/New%20Website/Semen-Freezing-min_pfcrvp.png"
            alt="Semen Freezing"
          />
        </div>
      </div>
    </div>
  );
};

export default Advancements;
