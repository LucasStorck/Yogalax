import card1 from "../images/image_1.jpg";
import card2 from "../images/image_2.jpg";
import card3 from "../images/image_3.jpg";

function BlogSection() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-sm text-gray-400 uppercase">Blog</h1>
        <h1 className="mb-16 sm:text-5xl lg:text-6xl text-center mt-6 tracking-tighter font-extralight text-3xl">
          Recents Posts
        </h1>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-16">
        <div className="sm:w-1/2 lg:w-1/4">
          <div className="rounded-2xl shadow-xl">
            <img src={card1} alt="" />
          </div>
          <div className="py-3 mx-6">
            <p className="py-3">
              <span className="text-pink-400 text-4xl">31</span> Jan 2024
            </p>
            <a
              className="py-4 text-xl font-semibold hover:text-pink-400"
              href="http://"
            >
              Young Woman Doing Yoga
            </a>
            <p className="py-3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4">
          <div className="rounded-2xl shadow-xl">
            <img src={card2} alt="" />
          </div>
          <div className="py-3 mx-6">
            <p className="py-3">
              <span className="text-pink-400 text-4xl">31</span> Jan 2024
            </p>
            <a
              className="py-4 text-xl font-semibold hover:text-pink-400"
              href="http://"
            >
              Young Woman Doing Yoga
            </a>
            <p className="py-3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4">
          <div className="rounded-2xl shadow-xl">
            <img src={card3} alt="" />
          </div>
          <div className="py-3 mx-6">
            <p className="py-3">
              <span className="text-pink-400 text-4xl">31</span> Jan 2024
            </p>
            <a
              className="py-4 text-xl font-semibold hover:text-pink-400"
              href="http://"
            >
              Young Woman Doing Yoga
            </a>
            <p className="py-3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
