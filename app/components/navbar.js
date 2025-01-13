import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "react-feather";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="container">
      <nav className="flex items-center justify-between h-16 md:h-20">
        <a>
          <Image
            src="/logo.svg"
            alt="Boldo logo image"
            width={100}
            height={100}
          />
        </a>
        <ul className="hidden md:flex items-center space-x-4 md:space-x-10">
          <li>
            <a className="text-sm md:text-base hover:text-gray-600 cursor-pointer">
              Product
            </a>
          </li>
          <li>
            <a className="text-sm md:text-base hover:text-gray-600 cursor-pointer">
              Services
            </a>
          </li>
          <li>
            <a className="text-sm md:text-base hover:text-gray-600 cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a className="rounded-full border border-solid border-black py-2 px-4 md:px-8 text-sm md:text-base text-center hover:text-gray-600 cursor-pointer">
              Log In
            </a>
          </li>
        </ul>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4">
          <button
            className="self-end p-2 focus:outline-none"
            onClick={toggleDrawer}
          >
            <X size={24} />
          </button>
          <ul className="flex flex-col items-center space-y-4 mt-6">
            <li>
              <a className="text-sm hover:text-gray-600 cursor-pointer">
                Product
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-600 cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-600 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a className="rounded-full border border-solid border-black py-2 px-4 text-sm text-center hover:text-gray-600 cursor-pointer">
                Log In
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
