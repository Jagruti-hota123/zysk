import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center border-b px-4 md:px-8 py-6">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <img src="Logo.png" alt="logo" className="w-8 h-8 md:w-10 md:h-10 " />
          <h1 className="text-lg md:text-xl font-semibold">Untitled UI</h1>
        </div>
        <ul className="hidden md:flex items-center gap-6">
          <li className="text-lg font-semibold text-gray-600">Home</li>
          <li className="flex items-center gap-1 text-gray-600">
            <span className="text-lg font-semibold">Products</span>
            <RiArrowDropDownLine className="text-gray-600 text-xl" />
          </li>
          <li className="flex items-center gap-1 text-gray-600">
            <span className="text-lg font-semibold">Resources</span>
            <RiArrowDropDownLine className="text-gray-600 text-xl" />
          </li>
          <li className="text-lg font-semibold text-gray-600">Pricing</li>
        </ul>
      </div>

      <img
        src="profile.png"
        alt="img"
        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-200 md:block hidden"
      />
      <RxHamburgerMenu className="text-2xl md:hidden block" />
    </div>
  );
};

export default Header;
