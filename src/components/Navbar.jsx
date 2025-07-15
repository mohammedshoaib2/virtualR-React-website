import { useState } from "react";
import logo from "../assets/logo.png";
import { X, Menu } from "lucide-react";
import { navItems } from "../constants/index.jsx";
const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <nav className="sticky z-50 top-0 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="w-full flex justify-between items-center  px-4 py-3 mx-auto ">
        <div className="flex gap-2 justify-center items-center">
          <img className="h-10" src={logo} alt="logo" />
          <span className="text-xl tracking-tight">VirtualR</span>
        </div>
        <ul className="hidden justify-center items-center lg:flex  gap-14">
          {navItems.map((item, index) => {
            return (
              <li className="text-sm cursor-pointer" key={index}>
                {item.label}
              </li>
            );
          })}
        </ul>
        <div className="justify-center items-center gap-14 hidden lg:flex">
          <button className="px-3 py-2 border-1 rounded-md text-sm cursor-pointer">
            Sign in
          </button>
          <button className="px-3 py-2 text-sm bg-linear-to-r from-orange-500 to-orange-800 rounded-md cursor-pointer">
            Create an account
          </button>
        </div>

        <div className="cursor-pointer flex lg:hidden" onClick={toggleNav}>
          {isMobileNavOpen ? <X /> : <Menu />}
        </div>
      </div>

      {isMobileNavOpen && (
        <div className="w-full flex flex-col justify-center items-center lg:hidden">
          <ul className="mx-auto my-10 space-y-6">
            {navItems.map((item, index) => {
              return (
                <li className="cursor-pointer" key={index}>
                  {item.label}
                </li>
              );
            })}
          </ul>

          <div className="flex justify-center items-center  mb-6 gap-6">
            <button className="px-3 py-2 border-1 rounded-md text-sm cursor-pointer">
              Sign in
            </button>
            <button className="px-3 py-2 text-sm bg-linear-to-r from-orange-400 to-orange-900 rounded-md cursor-pointer">
              Create an account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
