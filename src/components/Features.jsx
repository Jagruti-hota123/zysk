import Section from "./Section";

const Features = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-5 p-4 md:p-8">
        <h1 className="text-purple-600 text-sm border bg-purple-50 rounded-full px-2 py-1">
          Features
        </h1>
        <p className="text-base md:text-lg font-semibold text-center w-full md:w-1/2">
          Cutting-edge features for advanced analytics
        </p>
        <p className="text-sm text-gray-600 text-center w-full md:w-[39vw]">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <img
          src="Content.png"
          alt="Features"
          className="w-full h-auto object-cover md:block hidden "
        />
         <img
          src="mobile.png"
          alt="Features"
          className="w-full h-auto object-cover block md:hidden "
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {cardsArr.map((e) => (
          <div
            key={e.id}
            className="flex flex-col items-center gap-3 text-center p-4 rounded-lg"
          >
            <img src={e.icon} alt="icon" className="w-10 h-10 md:w-12 md:h-12" />
            <h1 className="text-base md:text-lg font-semibold">{e.title}</h1>
            <p className="text-sm text-gray-600 w-full md:w-[25vw]">
              {e.description}
            </p>
            <h1 className="text-purple-600 text-sm cursor-pointer">
              Learn More <span className="text-base font-semibold">→</span>
            </h1>
          </div>
        ))}
      </div>
      <hr className="mt-8" />
    </Section>
  );
};

export default Features;


const cardsArr = [
  {
    id: 1,
    icon: "../features/1.png",
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    id: 2,
    icon: "../features/2.png",
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    id: 3,
    icon: "../features/3.png",
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
];
