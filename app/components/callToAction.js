export default function CallToAction() {
  return (
    <div className="container relative flex flex-col w-full bg-[#0A2640] rounded-xl justify-around items-center overflow-hidden min-h-[391px] my-12 px-4">
      <h2 className="text-white w-11/12 md:w-3/4 text-3xl md:text-4xl lg:text-[3.5rem] lg:leading-none text-center z-10 mb-8 font-manrope">
        An enterprise template to ramp up your company website
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <input
          className="rounded-full px-6 py-3 min-w-[280px] text-sm md:text-base"
          placeholder="Your email address"
        />
        <button className="rounded-full border border-black bg-[#65E4A3] text-sm font-bold md:text-base py-3 px-6 hover:bg-[#4cc88a] transition-colors">
          Start now
        </button>
      </div>
      <div className="absolute bg-[#1C3D5B] rounded-full w-[1293px] h-[1293px] -top-[1054px] left-1/2 transform -translate-x-1/2 lg:left-[466px] lg:translate-x-0" />
    </div>
  );
}
