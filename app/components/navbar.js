import Image from "next/image";

export default function Navbar() {
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
        <ul className="flex items-center space-x-4 md:space-x-10">
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
      </nav>
    </header>
  );
}
