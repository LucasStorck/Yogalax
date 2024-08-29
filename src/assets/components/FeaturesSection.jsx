import { Brain, HeartIcon } from "lucide-react";

function FeaturesSection() {
  return (
    <div className="mt-20 bg-slate-50">
      <div className="py-28 flex mx-24 flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/5">
          <HeartIcon className="mt-6 text-pink-300 bg-pink-100 border border-pink-100 rounded-3xl h-16 w-16"></HeartIcon>
          <h1 className="mt-6 mb-6 text-xl font-semibold">Healthy Lifestyle</h1>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country
          </p>
        </div>
        <div className="w-full lg:w-1/5">
          <Brain className="mt-6 text-pink-300 bg-pink-100 border border-pink-100 rounded-3xl h-16 w-16"></Brain>
          <h1 className="mt-6 mb-6 text-xl font-semibold">
            Body & Mind Balance
          </h1>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country
          </p>
        </div>
        <div className="w-full lg:w-1/5">
          <HeartIcon className="mt-6 text-pink-300 bg-pink-100 border border-pink-100 rounded-3xl h-16 w-16"></HeartIcon>
          <h1 className="mt-6 mb-6 text-xl font-semibold">
            Meditation Practice
          </h1>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country
          </p>
        </div>
        <div className="w-full lg:w-1/5">
          <Brain className="mt-6 text-pink-300 bg-pink-100 border border-pink-100 rounded-3xl h-16 w-16"></Brain>
          <h1 className="mt-6 mb-6 text-xl font-semibold">Ideology</h1>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
