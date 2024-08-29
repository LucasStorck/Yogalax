import gallery1 from "../images/gallery-1.jpg";
import gallery2 from "../images/gallery-2.jpg";
import gallery3 from "../images/gallery-3.jpg";
import gallery4 from "../images/gallery-4.jpg";

function GallerySection() {
  return (
    <div className="mt-20 container mx-auto">
      <div className="text-center">
        <h1 className="text-sm text-gray-400 uppercase">Gallery</h1>
        <h1 className="mb-16 sm:text-5xl lg:text-6xl text-center mt-6 tracking-tighter font-extralight text-3xl">
          See the latest photos
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="sm:w-1/2 lg:w-1/5">
            <img className="w-full" src={gallery1} alt="" />
          </div>
          <div className="sm:w-1/2 lg:w-1/5">
            <img className="w-full" src={gallery2} alt="" />
          </div>
          <div className="sm:w-1/2 lg:w-1/5">
            <img className="w-full" src={gallery3} alt="" />
          </div>
          <div className="sm:w-1/2 lg:w-1/5">
            <img className="w-full" src={gallery4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
