import { LuPlayCircle } from "react-icons/lu";
import Section from "./Section";



const Home = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-purple-700 bg-purple-50 font-medium border border-purple-400 mt-8 rounded-full p-2 text-sm text-center">
          <span className="text-purple-700 border border-purple-400 bg-white rounded-xl px-1 py-[2px] m-2 text-sm">
            New feature
          </span>
          Check out the team dashboard <span className="text-base font-semibold">→</span>
        </h2>
        <h1 className="text-3xl md:text-6xl leading-tight text-gray-800 font-bold text-center">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-base md:text-xl w-full md:w-[53%] text-gray-600 font-normal text-center">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex flex-col-reverse w-80 md:w-fit md:flex-row gap-4">
        <button className="border border-gray-500 px-8 py-4 text-lg rounded-lg font-medium flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300">
    <LuPlayCircle className="text-2xl" />
    Demo
  </button>

  <button className="bg-purple-600 text-lg text-white rounded-lg px-8 py-4 flex items-center justify-center shadow-md hover:bg-purple-700 transition duration-300">
    Sign up
  </button>
        </div>
        <img
          src="Content.jpg"
          alt="imageFirst"
          className="w-full md:w-fit h-auto hidden md:block"
        />
          <img
          src="Content1.png"
          alt="imageFirst"
          className="w-full md:w-fit h-auto md:hidden block"
        />

      </div>

     
    </Section>
  );
};

export default Home;
