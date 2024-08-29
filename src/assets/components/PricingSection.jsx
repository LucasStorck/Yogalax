import { pricingOptions } from "../constants";

function PricingSection() {
  return (
    <div className="py-20 mt-20 bg-slate-50">
      <p className="p-10 text-center uppercase text-sm text-gray-400">
        Pricing
      </p>
      <h1 className="mb-16 sm:text-5xl lg:text-6xl text-center tracking-tighter font-extralight text-3xl">
        Membership Prices
      </h1>
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-8">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4">
            <div className="rounded-xl shadow-md text-center py-10">
              <p className="text-md mb-6">{option.title}</p>
              <p className="mb-6 text-5xl font-extrabold text-pink-300">
                <span className="text-xl">$</span>
                {option.price}
              </p>
              <p className="mb-6 uppercase font-bold">{option.subtitle}</p>
              <ul>
                {option.features.map((features, index) => (
                  <li
                    key={index}
                    className="mt-6 flex justify-center items-center"
                  >
                    <span className="ml-2">{features}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="bg-pink-300 text-white inline-flex justify-center items-center text-center w-40 h-10 p-5 mt-5 tracking-tight text-xl py-2 px-3 rounded-md hover:scale-110 duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
