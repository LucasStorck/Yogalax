import program1 from "../images/program-1.jpg";
import program5 from "../images/program-5.jpg";
import program3 from "../images/program-3.jpg";

function ClassesSection() {
  return (
    <div className="mt-20 container mx-auto">
      <h1 className="text-center uppercase text-sm text-gray-400">
        Yoga Classes
      </h1>
      <h1 className="mb-16 sm:text-5xl lg:text-6xl text-center mt-6 tracking-tighter font-extralight text-3xl">
        Choose Your Level & Focus
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="relative sm:w-1/2 lg:w-1/3">
          <img src={program1} alt="" />
          <div className="absolute w-full h-full top-0 left-0 bg-pink-400 opacity-0 z-10 transition-opacity duration-300 hover:opacity-35">
            <p className="mt-20 text-center text-white text-2xl font-bold">
              Yoga For Groups
            </p>
            <p className="text-center text-white text-lg font-bold">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="relative sm:w-1/2 lg:w-1/3">
          <img src={program5} alt="" />
          <div className="absolute w-full h-full top-0 left-0 bg-pink-400 opacity-0 z-10 transition-opacity duration-300 hover:opacity-35">
            <p className="mt-20 text-center text-white text-2xl font-bold">
              Yoga For Beginners
            </p>
            <p className="text-center text-white text-lg font-bold">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="relative sm:w-1/2 lg:w-1/3">
          <img src={program3} alt="" />
          <div className="absolute w-full h-full top-0 left-0 bg-pink-400 opacity-0 z-10 transition-opacity duration-300 hover:opacity-35">
            <p className="mt-20 text-center text-white text-2xl font-bold">
              Yoga For Pregnant
            </p>
            <p className="text-center text-white text-lg font-bold">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>

        <div className="relative sm:w-1/2 lg:w-1/3">
          <img src={program1} alt="" />
          <div className="absolute w-full h-full top-0 left-0 bg-pink-400 opacity-0 z-10 transition-opacity duration-300 hover:opacity-35">
            <p className="mt-20 text-center text-white text-2xl font-bold">
              Yoga For Groups
            </p>
            <p className="text-center text-white text-lg font-bold">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="relative sm:w-1/2 lg:w-1/3">
          <img src={program5} alt="" />
          <div className="absolute w-full h-full top-0 left-0 bg-pink-400 opacity-0 z-10 transition-opacity duration-300 hover:opacity-35">
            <p className="mt-20 text-center text-white text-2xl font-bold">
              Yoga For Beginners
            </p>
            <p className="text-center text-white text-lg font-bold">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="relative sm:w-1/2 lg:w-1/3">
          <img src={program3} alt="" />
          <div className="absolute w-full h-full top-0 left-0 bg-pink-400 opacity-0 z-10 transition-opacity duration-300 hover:opacity-35">
            <p className="mt-20 text-center text-white text-2xl font-bold">
              Yoga For Pregnant
            </p>
            <p className="text-center text-white text-lg font-bold">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassesSection;
