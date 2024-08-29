import { CheckCircle2 } from "lucide-react";
import introBg from "../images/bg_4.png";
import { introItems } from "../constants";

function IntroSection() {
  return (
    <div className="mt-20 cont">
      <h1 className="text-center uppercase text-sm text-gray-400">Intro</h1>
      <h1 className="mb-4 sm:text-5xl lg:text-6xl text-center mt-6 tracking-tighter font-extralight text-3xl">
        Why You Should Go To Yoga
      </h1>
      <p className="py-8 text-center tracking-tighter font-extralight text-2xl">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full sm:w-1/2 lg:w-1/2">
          <img className="w-full" src={introBg} alt="Intro Image" />
        </div>
        <div className="pt-20 lg:w-1/2">
          {introItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-pink-300 px-6 mb-6 justify-center items-center rounded-full">
                <CheckCircle2 className="mt-2"></CheckCircle2>
              </div>
              <div>
                <h4 className="text-pink-300 tracking-tighter font-normal text-3xl">
                  {item.text}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
