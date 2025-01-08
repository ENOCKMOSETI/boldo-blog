import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 h-64">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        <div className="flex flex-col space-y-6 lg:w-1/3">
          <div className="h-12">
            <Image
              src="/../logo.svg"
              alt="logo"
              width={150}
              height={150}
              className="h-full w-auto"
            />
          </div>
          <p className="text-sm w-3/4 text-[#777777]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="text-sm text-[#777777]">All rights reserved.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold h-12 flex items-center">Landings</h3>
            <ul className="flex flex-col space-y-4">
              <li className="text-[#777777] hover:text-gray-600 cursor-pointer">Home</li>
              <li className="text-[#777777] hover:text-gray-600 cursor-pointer">Products</li>
              <li className="text-[#777777] hover:text-gray-600 cursor-pointer">Services</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold h-12 flex items-center">Company</h3>
            <ul className="flex flex-col space-y-4">
              <li className="text-[#777777] hover:text-gray-600 cursor-pointer">Home</li>
              <li className="flex items-center space-x-2 text-[#777777] hover:text-gray-600 cursor-pointer">
                <span>Careers</span>
                <span className="bg-[#65E4A3] text-black font-semibold text-sm px-3 py-1 rounded-full">
                  Hiring!
                </span>
              </li>
              <li className="text-[#777777] hover:text-gray-600 cursor-pointer">Services</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold h-12 flex items-center">Resources</h3>
            <ul className="flex flex-col space-y-4">
              <li className="text-[#777777] hover:text-gray-600 cursor-pointer">Blog</li>
              <li className="text-[#777777] hover:text-gray-600 cursor-pointer">Products</li>
              <li className="text-[#777777] hover:text-gray-600 cursor-pointer">Services</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
