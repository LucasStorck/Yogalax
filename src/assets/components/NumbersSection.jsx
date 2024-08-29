import CountUp from "react-countup";

function NumbersSection() {
  return (
    <div className="mt-20 w-full">
      <div className="h-86 w-full bg-cover bg-gradient-to-r from-pink-200 to-pink-100 bg-fixed bg-center bg-no-repeat shadow-lg">
        <div className="py-16 px-16 flex flex-wrap">
          <div className="w-full lg:w-1/4">
            <CountUp
              className="flex justify-center"
              start={0}
              end={4800}
              duration={3}
              style={{ fontSize: "48px", color: "#ffffff", fontWeight: "bold" }}
            ></CountUp>
            <h1 className="text-center text-sm text-white">Happy Customers</h1>
          </div>
          <div className="w-full lg:w-1/4">
            <CountUp
              className="flex justify-center"
              start={0}
              end={80}
              duration={3}
              style={{ fontSize: "48px", color: "#ffffff", fontWeight: "bold" }}
            ></CountUp>
            <h1 className="text-center text-sm text-white">Yoga Workshops</h1>
          </div>
          <div className="w-full lg:w-1/4">
            <CountUp
              className="flex justify-center"
              start={0}
              end={40}
              duration={3}
              style={{ fontSize: "48px", color: "#ffffff", fontWeight: "bold" }}
            ></CountUp>
            <h1 className="text-center text-sm text-white">
              Years of Experience
            </h1>
          </div>
          <div className="w-full lg:w-1/4">
            <CountUp
              className="flex justify-center"
              start={0}
              end={1600}
              duration={3}
              style={{ fontSize: "48px", color: "#ffffff", fontWeight: "bold" }}
            ></CountUp>
            <h1 className="text-center text-sm text-white">Yoga Instructors</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumbersSection;
