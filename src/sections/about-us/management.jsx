const people = [
  {
    name: "Dr Asha S Vijay",
    role: "Founder & Medical Director",
    imageUrl: "https://media.graphassets.com/AKVhJHLwRmCJOyzS53Ri",
    bio: "Dr Asha S Vijay is a well-known fertility specialist and leading name in the field of fertility and reproductive treatment. She is a specialist in the field...",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vijay Kumar Shehsadri",
    role: "Founder & CEO",
    imageUrl: "https://media.graphassets.com/KEZntaT5RyimC9BHvR2g",
    bio: "Mr Vijay Kumar is an Electrical Engineer and a serial entrepreneur. He has successfully started and built multiple engineering companies…",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Hari Srinivasan",
    role: "Co-Founder & Director",
    imageUrl: "https://media.graphassets.com/2HK2dzgNQQuyM39BnF5Q",
    bio: "Mr Hari is a Medical Electronics engineer by education and an entrepreneur by passion. GarbhaGudi is his fourth stint as an entrepreneur. Prior to this, he has been…",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Pushpalatha M.S",
    role: "Co-Founder & Director of Operations",
    imageUrl: "https://media.graphassets.com/QbUzLaphQMGJ6wp4GuR9",
    bio: "Mrs Pushpalatha M S has completed her masters in Power Electronics and is on the leadership team of multiple organizations. She completed her engineering…",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Management() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight sm:text-4xl font-heading">
              Management Team
            </h2>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <div key={person.name}>
                  <div className="text-center md:space-y-4">
                    <div className="aspect-square">
                      <img
                        className="shadow-2xl object-fit rounded-3xl w-96 h-96 mx-auto"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="text-lg font-medium">
                      <h3 className="text-xl font-heading font-bold ">
                        {person.name}
                      </h3>
                      <p className="bg-clip-text text-transparent bg-gradient-to-r from-brandPink to-brandPurpleDark">
                        {person.role}
                      </p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
