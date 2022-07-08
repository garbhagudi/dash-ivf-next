import Link from "next/link";

const data = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/Asha-Madam_Profile_vunk51.webp",
    altText: "Dr Asha S Vijay",
    title: "Dr Asha S Vijay",
    designation: "Founder & Medical Director",
    // website: "https://garbhagudi.com/dr-asha-s-vijay-profile",
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/Chithra-SK_orc3cx.webp",
    altText: "Dr Chaithra S.K",
    title: "Dr Chaithra S.K",
    designation: "Senior Ferility Specialist",
    // website: "https://garbhagudi.com/dr-chaitra-s-k",
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/Maheshwari-new_rryrnt.webp",
    altText: "Dr Maheshwari",
    title: "Dr Maheshwari",
    designation: "Senior Ferility Specialist",
    // website: "https://garbhagudi.com/dr-maheshwari",
  },
  {
    id: 4,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/Chinmaey_kz6etc.webp",
    altText: "Dr Chinmayie R",
    title: "Dr Chinmayie R",
    designation: "Fertility Specialist",
    // website: "https://garbhagudi.com/dr-chinmayie-r",
  },
  // {
  //   id: 5,
  //   imgSrc:
  //     "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member6_rrjqnv.webp",
  //   altText: "Dr Swetha V",
  //   title: "Dr Swetha V",
  //   designation: "Fertility Specialist",
  //   // website: "https://garbhagudi.com/dr-swetha-v",
  // },
  {
    id: 6,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/Prianka-Rani_cllnrd.webp",
    altText: "Dr Priyanka Rani",
    title: "Dr Priyanka Rani",
    designation: "Fertility Specialist",
    // website: "https://garbhagudi.com/dr-priyanka-rani",
  },
  {
    id: 7,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/anitha_oambb3.webp",
    altText: "Dr Anitha A Manoj",
    title: "Dr Anitha A",
    designation: "Fertility Specialist",
    // website: "https://garbhagudi.com/dr-anitha-a-manoj/",
  },
  {
    id: 8,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/vandana_qg1ixe.webp",
    altText: "Dr Vandana Ramanathan",
    title: "Dr Vandana Ramanathan",
    designation: "Fertility Specialist",
    // website: "https://garbhagudi.com/dr-vandana-ramanathan/",
  },
  {
    id: 9,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1643980098/garbhagudi-ivf/Images%20/Jahnavi-modified_ivxuei.png",
    altText: "Dr Jahnavi Esanakula",
    title: "Dr Jahnavi Esanakula",
    designation: "Fertility Specialist",
    // website: "https://garbhagudi.com/dr-swati-shree/",
  },
  {
    id: 10,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/06_gq0pxk.webp",
    altText: "Dr Vandana Ramanathan",
    title: "Dr Srinivas B.V",
    designation: "Senior Andrologist",
    // website: "https://garbhagudi.com/dr-srinivas-b-v",
  },
  // {
  //   id: 10,
  //   imgSrc:
  //     "https://res.cloudinary.com/garbhagudi/image/upload/v1650949577/garbhagudi-ivf/Images%20/niddhi_m_wmjc6x.jpg",
  //   altText: "Dr Nidhi Jhawar",
  //   title: "Dr Nidhi Jhawar",
  //   designation: "Fertility Specialist",
  //   // website: "https://garbhagudi.com/dr-srinivas-b-v",
  // },
];

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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 sm:gap-y-10">
        {data.map((items) => (
          <Link href={"/contact-us"} passHref key={items.id}>
            <div className="text-center mb-8 md:mb-0 cursor-pointer ">
              <img
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full mx-auto -mb-16 sm:-mb-20"
                src={items.imgSrc}
                alt="Avatar Jacky"
              />
              <div className="bg-gray-100 shadow-lg rounded-lg px-2 pt-20 sm:pt-28 pb-10 text-gray-400 hover:shadow-2xl hover:bg-gray-50 transition-all duration-500">
                <h3 className="font-heading font-bold text-gray-800 text-md mb-3">
                  {items.title}
                </h3>
                <p className="font-body text-gray-800 text-xs sm:text-sm tracking-wide">
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
