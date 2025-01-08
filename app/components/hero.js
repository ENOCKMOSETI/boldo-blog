import Image from "next/image";

export default function Hero() {
  return (
    <>
      <h3 className="text-lg">Blog</h3>
      <h1 className="text-4xl md:text-6xl font-manrope">Thoughts and words</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src="/../hero.svg"
            alt="hero-image"
            layout="fill"
            objectFit="fit"
          />
        </div>
        <div className="text-start w-full md:w-1/2 flex flex-col justify-center gap-4 mt-4 md:mt-0">
          <p className="text-sm">
            Category{" "}
            <span className="text-gray-500 text-sm">November 22, 2021</span>
          </p>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-manrope">
            Pitch termsheet backing validation focus release
          </h2>
          <div className="flex items-center">
            <Image
              src="/../author1.svg"
              alt="author-image"
              width={20}
              height={20}
            />
            <span className="mx-2 text-sm">Chandler Bing</span>
          </div>
        </div>
      </div>
    </>
  );
}
