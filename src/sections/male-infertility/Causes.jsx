import React from "react";
import Image from "components/image";

const Causes = () => {
  return (
    <div className="max-w-7xl mx-auto px-3">
      <div className="text-2xl sm:text-4xl font-heading font-bold text-center">
        What Causes Male Infertility?{" "}
      </div>
      <div className="text-center py-2">
        There are many reasons for this and some are discussed below:
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-8">
        <div className="flex items-start justify-center flex-col">
          <h3 className="text-xl sm:text-2xl text-brandPink font-heading font-bold">
            Low Sperm Count
          </h3>
          <p className="mt-4">
            A man’s sperm count is considered lower than normal if he has fewer
            than 15 million sperm per mL of semen which can decrease the chances
            of conceiving a child simply because of fewer opportunities for
            fertilization. Low sperm count is caused by a variety of
            physiological, environmental and lifestyle factors, from infections,
            hormonal imbalances, and autoimmune problems, to emotional stress,
            depression and obesity.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780881/garbhagudi-ivf/Images%20/low-sperm_j21spq.jpg"
            alt="lsc"
            className="my-4 sm:mt-0 w-72"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-8">
        <div className="flex items-start justify-center flex-col">
          <h3 className="text-xl sm:text-2xl text-brandPink font-heading font-bold">
            Poor sperm movement
          </h3>
          <p className="mt-4">
            Sperm motility refers to the ability of sperm to move efficiently.
            It is important in fertility because sperm need to move rapidly and
            directly through the woman’s reproductive tract to reach and
            fertilize her egg before the sperm cells die. Damage to the
            testicles, which make and store sperms could be a reason for low
            sperm motility.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780880/garbhagudi-ivf/Images%20/sperm-movement_mpnozg.jpg"
            alt="lsc"
            className="my-4 sm:mt-0 w-72"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-8">
        <div className="flex items-start flex-col justify-center">
          <h3 className="text-xl sm:text-2xl text-brandPink font-heading font-bold">
            Sperm Quality
          </h3>
          <p className="mt-4">
            Degradation of sperm DNA affects the health of an embryo’s genetic
            make-up, and can contribute to miscarriage. After men turn 40, the
            quality of their sperm’s genetic material lessens and the new sperm
            isn’t as good as the sperm they produced when younger. It’s a
            natural and irreversible effect of aging, much like how women’s eggs
            deteriorate after age 35. Declining sperm quality may not impact a
            man’s ability to ejaculate or successfully fertilize an egg, but it
            is more likely to make an embryo nonviable.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780880/garbhagudi-ivf/Images%20/sperm-quality_aqp6kp.jpg"
            alt="lsc"
            className="my-4 sm:mt-0 w-72"
          />
        </div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 py-8 scroll-m-16 lg:scroll-m-28"
        id="varicocele"
      >
        <div className="flex items-start justify-center flex-col">
          <h3 className="text-xl sm:text-2xl text-brandPink font-heading font-bold">
            Varicocele
          </h3>
          <p className="mt-4">
            Degradation of sperm DNA affects the health of an embryo’s genetic
            make-up, and can contribute to miscarriage. After men turn 40, the
            quality of their sperm’s genetic material lessens and the new sperm
            isn’t as good as the sperm they produced when younger. It’s a
            natural and irreversible effect of aging, much like how women’s eggs
            deteriorate after age 35. Declining sperm quality may not impact a
            man’s ability to ejaculate or successfully fertilize an egg, but it
            is more likely to make an embryo nonviable.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/1884335-Varicocele.20220125174126722.png?w=1155&h=1722"
            alt="lsc"
            className="my-4 sm:mt-0 w-72 border border-brandPurpleDark rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Causes;
