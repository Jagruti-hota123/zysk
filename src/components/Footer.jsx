import Section from "./Section";

const Footer = () => {
  return (
    <Section className="flex flex-col gap-6 px-4 md:px-8 py-6 bg-gray-50">
      <div className="flex flex-col gap-6">

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {firstArr.map((e, index) => (
            <h1
              key={index}
              className="text-sm text-gray-500 font-medium text-center md:text-left"
            >
              {e}
            </h1>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {secondArr.map((e, index) => (
            <h1
              key={index}
              className="text-sm md:text-base text-gray-600 font-normal text-center md:text-left"
            >
              {e}
            </h1>
          ))}
        </div>
      </div>

      <hr className="border-gray-300" />

   
      <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start gap-4">
   
        <div className="flex items-center gap-2">
          <img
            src="Logo.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-lg font-semibold text-gray-800">Untitled UI</h1>
        </div>
        <h1 className="text-sm text-gray-600 text-center">
          © 2077 Untitled UI. All rights reserved.
        </h1>
      </div>
    </Section>
  );
};

export default Footer;

// Footer Data Arrays
const firstArr = ["Product", "Company", "Resources", "Use Cases", "Social", "Legal"];

const secondArr = [
  "Overview",
  "About Us",
  "Blog",
  "Startups",
  "Twitter",
  "Terms",
  "Features",
  "Careers",
  "Newsletter",
  "Enterprise",
  "LinkedIn",
  "Privacy",
  "Solutions",
  "Press",
  "Events",
  "Government",
  "Facebook",
  "Cookies",
  "Tutorials",
  "News",
  "Help Centre",
  "SaaS Centre",
  "GitHub",
  "Licenses",
  "Pricing",
  "Media kit",
  "Tutorials",
  "Marketplaces",
  "AngelList",
  "Settings",
  "Releases",
  "Contact",
  "Support",
  "Ecommerce",
  "Dribble",
  "Contact",
];
