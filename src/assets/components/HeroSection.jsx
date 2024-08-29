import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <div className="flex flex-col items-center py-80">
      <div className="tracking-tighter text-center font-thin text-8xl"></div>
      <div className="justify-center">
        <TypeAnimation
          className="justify-center py-8 px-2 tracking-tighter font-extralight text-3xl"
          sequence={[
            "Flexibility is A Second Power.",
            2000,
            "Inspiration For Joyful Living.",
            2000,
            "Effective Therapy Against Stress.",
            2000,
          ]}
          style={{
            fontSize: "5rem",
            lineHeight: "5rem",
            justifyContent: "center",
            marginBottom: "2rem",
            paddingTop: "3rem",
            paddingbottom: "3rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            letterSpacing: "-0.05rem",
            fontWeight: "150",
          }}
          repeat={Infinity}
        />
      </div>
      <div className="justify-center items-center">
        <p className="py-8 px-2 tracking-tighter font-extralight text-3xl">
          Do Yoga today for a better tomorrow
        </p>
      </div>
      <div className="justify-center items-center hover:scale-110 duration-200">
        <a
          href="href"
          type="button"
          className="py-2 px-3 border-white rounded-xl bg-pink-200 text-white"
        >
          Schudele Now!
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
